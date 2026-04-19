/** Single evocative line below each work in the grid (gallery-style). */
export const PAINTING_TAGLINES: Record<string, string> = {
  "01": "Radiance and blessing — devotion made visible.",
  "02": "When distance grows where we never wished it to.",
  "03": "Sorrow in gold, joy in shadow — perspective shifts everything.",
  "04": "A hazy evening, stories half-remembered in the heart.",
  "05": "Grace holds what pride alone cannot explain.",
  "06": "Even tears become pearls when pain finds its worth.",
  "07": "The sky keeps changing; the journey keeps remaking you.",
  "08": "If not here, where would we be — had we walked their straight line?",
  "09": "Anger cuts through the eyes; the heart accepts its verdict.",
  "10": "The heart in one place, the gaze somewhere else entirely.",
  "11": "Memory adorns the walls of the mind.",
  "12": "Colour where thought cannot be contained.",
  "13": "A letter, a canvas, and a question left open.",
  "14": "A thousand desires — still too few.",
  "15": "All drew close with purpose; none remained as kin.",
  "16": "Separation divided the scream from the cage.",
  "17": "When the brush touched the canvas, every colour wept.",
  "18": "Silence or tears — the only roads through.",
  "19": "Effort meets the stars; destiny decides the shine.",
  "20": "Distinct in colour, in silence, apart from the rest.",
  "21": "If life is a gathering, devotion lives in these eyes.",
  "22": "The search itself becomes a way of arriving.",
};

export function taglineForWorkNumber(number: string): string {
  return PAINTING_TAGLINES[number] ?? "";
}
