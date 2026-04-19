import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";
import fs from "node:fs";

dotenv.config({ path: new URL("./.env", import.meta.url) });

const app = express();

const PORT = Number(process.env.PORT ?? 5174);
const CONTACT_TO = process.env.CONTACT_TO ?? "artgallery9925@gmail.com";
const AUTO_REPLY_DELAY_MS = 60_000;

const WORDMARK_CID = "vinay-wordmark";
const WORDMARK_PATH = new URL("./assets/vinay-wordmark.png", import.meta.url);
const WORDMARK_CONTENT = fs.existsSync(WORDMARK_PATH)
  ? fs.readFileSync(WORDMARK_PATH)
  : null;

app.use(
  cors({
    origin: true,
    credentials: false,
  })
);
app.use(express.json({ limit: "200kb" }));

function requiredEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function escapeHtml(input) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderEmailShell({ title, subtitle, rows, footerNote }) {
  const safeTitle = escapeHtml(title);
  const safeSubtitle = subtitle ? escapeHtml(subtitle) : "";
  const safeFooter = footerNote ? escapeHtml(footerNote) : "";
  const renderedRows = rows
    .map(({ label, value }) => {
      const safeLabel = escapeHtml(label);
      return `
        <tr>
          <td style="padding: 14px 16px; border-top: 1px solid #f1eee7;">
            <div style="font: 700 11px/1.2 Arial, Helvetica, sans-serif; letter-spacing: .12em; text-transform: uppercase; color:#6b7280;">
              ${safeLabel}
            </div>
            <div style="margin-top: 6px; font: 400 14px/1.65 Arial, Helvetica, sans-serif; color:#111827;">
              ${value}
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  const rowsPanel = renderedRows
    ? `<tr>
              <td style="padding: 14px 18px 6px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0; background:#ffffff; border:1px solid #f1eee7; border-radius:14px; overflow:hidden;">
                  ${renderedRows}
                </table>
              </td>
            </tr>`
    : "";

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle}</title>
  </head>
  <body style="margin:0; padding:0; background:#f6f5f2;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; background:#f6f5f2;">
      <tr>
        <td align="center" style="padding: 34px 12px;">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0; width:640px; max-width:100%; background:#ffffff; border:1px solid #e7e2d8; border-radius:16px; overflow:hidden; box-shadow: 0 18px 45px rgba(0,0,0,0.16);">
            <tr>
              <td style="padding: 0; background:#000000;">
                <div style="height: 4px; background: linear-gradient(90deg, #b8952a 0%, #e8c96a 52%, #b8952a 100%);"></div>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding: 18px 22px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                        <tr>
                          <td style="padding:0; vertical-align:middle;">
                            <img
                              src="cid:${WORDMARK_CID}"
                              width="120"
                              height="52"
                              alt="Vinay"
                              style="display:block; border:0; outline:none; text-decoration:none; height:auto;"
                            />
                          </td>
                          <td style="padding:0 0 0 10px; vertical-align:middle;">
                            <div style="font: 900 16px/1.2 Arial, Helvetica, sans-serif; letter-spacing:.16em; text-transform:uppercase; color:#e8c96a;">
                              ART GALLERY
                            </div>
                          </td>
                        </tr>
                      </table>
                      <div style="margin-top: 10px; font: 700 24px/1.25 Arial, Helvetica, sans-serif; color:#fafaf7;">
                        ${safeTitle}
                      </div>
                      ${
                        safeSubtitle
                          ? `<div style="margin-top:6px; font: 400 14px/1.7 Arial, Helvetica, sans-serif; color: rgba(250,250,247,0.78);">${safeSubtitle}</div>`
                          : ""
                      }
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            ${rowsPanel}
            <tr>
              <td style="padding: 10px 22px 20px;">
                <div style="font: 400 12px/1.7 Arial, Helvetica, sans-serif; color:#6b7280;">
                  ${safeFooter}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, enquiry, message } = req.body ?? {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({ ok: false, error: "Please enter your name." });
    }
    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return res.status(400).json({ ok: false, error: "Please enter a valid email." });
    }
    if (!enquiry || typeof enquiry !== "string") {
      return res.status(400).json({ ok: false, error: "Please select a topic." });
    }

    const safeMessage =
      typeof message === "string" ? message.trim().slice(0, 8000) : "";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: requiredEnv("GMAIL_USER"),
        pass: requiredEnv("GMAIL_APP_PASSWORD"),
      },
    });

    const fromEmail = requiredEnv("GMAIL_USER");
    const safeName = name.trim();
    const safeEmail = email.trim();
    const safeTopic = enquiry.trim();

    const adminSubject = `New enquiry: ${safeTopic}`;
    const adminText = [
      "New website enquiry",
      "",
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      `Topic: ${safeTopic}`,
      "",
      safeMessage || "(No message)",
    ].join("\n");

    const adminHtml = renderEmailShell({
      title: "New enquiry received",
      subtitle: "A message was submitted from the website contact form.",
      rows: [
        { label: "Name", value: escapeHtml(safeName) },
        { label: "Email", value: escapeHtml(safeEmail) },
        { label: "Topic", value: escapeHtml(safeTopic) },
        {
          label: "Message",
          value: `<div style="white-space:pre-wrap;">${escapeHtml(
            safeMessage || "(No message)"
          )}</div>`,
        },
      ],
      footerNote: "Replying to this email will reply to the sender.",
    });

    await transporter.sendMail({
      from: `"Vinay Art Gallery" <${fromEmail}>`,
      to: CONTACT_TO,
      replyTo: safeEmail,
      subject: adminSubject,
      text: adminText,
      html: adminHtml,
      attachments: WORDMARK_CONTENT
        ? [
            {
              filename: "vinay-wordmark.png",
              content: WORDMARK_CONTENT,
              cid: WORDMARK_CID,
              contentType: "image/png",
            },
          ]
        : [],
    });

    // Auto-reply to the user after 1 minute (in-process delay).
    setTimeout(async () => {
      try {
        const userSubject = "We received your message";
        const userText = [
          `Hello ${safeName},`,
          "",
          "Thank you for contacting us.",
          "Me and my team will try to reach you as soon as possible.",
          "",
          "This email is auto generated. Please do not reply.",
        ].join("\n");

        const userHtml = renderEmailShell({
          title: "Thank you for contacting us",
          subtitle: "Me and my team will try to reach you as soon as possible.",
          rows: [],
          footerNote: "This email is auto generated. Please do not reply.",
        });

        await transporter.sendMail({
          from: `"Vinay Art Gallery" <${fromEmail}>`,
          to: safeEmail,
          replyTo: CONTACT_TO,
          subject: userSubject,
          text: userText,
          html: userHtml,
          attachments: WORDMARK_CONTENT
            ? [
                {
                  filename: "vinay-wordmark.png",
                  content: WORDMARK_CONTENT,
                  cid: WORDMARK_CID,
                  contentType: "image/png",
                },
              ]
            : [],
        });
      } catch (e) {
        console.error("Auto-reply failed:", e);
      }
    }, AUTO_REPLY_DELAY_MS);

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);

    const msg = err instanceof Error ? err.message : "";
    const errCode =
      err && typeof err === "object" && "code" in err ? String(err.code) : "";
    const smtpResponse =
      err && typeof err === "object" && "response" in err
        ? String(err.response)
        : "";
    const responseCode =
      err && typeof err === "object" && "responseCode" in err
        ? Number(err.responseCode)
        : NaN;

    if (msg.startsWith("Missing env var:")) {
      return res.status(500).json({
        ok: false,
        error:
          "Email is not configured on the server. Create `server/.env` and set GMAIL_USER and GMAIL_APP_PASSWORD (Gmail App Password), then restart the backend.",
      });
    }

    return res.status(500).json({
      ok: false,
      error:
        errCode === "EAUTH" || responseCode === 534 || smtpResponse.includes("5.7.9")
          ? "Gmail rejected the login. Please set a real Gmail App Password in `server/.env` (GMAIL_APP_PASSWORD) and restart the backend."
          : "Sorry — something went wrong while sending your message.",
    });
  }
});

const HOST = process.env.HOST ?? "127.0.0.1";

const server = app.listen(PORT, HOST, () => {
  console.log(`Contact server listening on http://${HOST}:${PORT}`);
});

server.on("error", (err) => {
  console.error("Server error:", err);
});

// Ensure the process stays alive in environments that may unref handles.
process.stdin.resume();

