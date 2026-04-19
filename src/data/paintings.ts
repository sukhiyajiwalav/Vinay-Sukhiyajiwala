import { imagesByWorkNumber } from "./takhleeqImages.generated";

export interface Painting {
  number: string;
  title: string;
  titleHindi: string;
  year: string;
  medium: string;
  size: string;
  poem: string;
  poemEnglish: string;
  /** Cover / primary thumbnail (same as `images[0]`) */
  image: string;
  /** All photos for this work (from Photos/Takhleeq, synced to public) */
  images: string[];
}

/** Row before merging generated multi-image paths */
type PaintingRow = Omit<Painting, "images">;

const paintingsData: PaintingRow[] = [
  {
    number: "01",
    title: "Ganesha",
    titleHindi: "गणेश",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "61 × 61 × 2 cm",
    poem: "वक्रतुंड महाकाय, सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव, सर्वकार्येषु सर्वदा॥",
    poemEnglish:
      "O Lord with curved trunk and mighty form, radiant as a million suns — bless all my endeavours, always, without obstruction.",
    image: "/images/ganesha.jpg",
  },
  {
    number: "02",
    title: "Life is Unexpected",
    titleHindi: "ज़िन्दगी अनपेक्षित है",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "46 × 46 × 2 cm",
    poem: "ना चाहकर भी वो फ़ैसले हुए, और फ़ासला हुआ — उम्मीद किससे क्या थी, और ये क्या माजरा हुआ",
    poemEnglish:
      "Decisions were made even against our wishes, and distance grew — what were our hopes from whom, and what strange turn did this take.",
    image: "/images/life-unexpected.jpg",
  },
  {
    number: "03",
    title: "Nazariya",
    titleHindi: "नज़रिया — Perspective",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "76.5 × 51 × 2 cm",
    poem: "वहाँ भी दुःख है, जहाँ रास्ते सोने की तरह चमक रहे हैं — यहाँ भी सुख है, जहाँ काले बादल, कहीं चाँद छुपा बैठे है",
    poemEnglish:
      "There is sorrow even where paths shine like gold — there is joy even here, where dark clouds hide a moon somewhere.",
    image: "/images/nazariya.jpg",
  },
  {
    number: "04",
    title: "Afsos",
    titleHindi: "अफ़सोस — Regret",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "76.5 × 51 × 2 cm",
    poem: "शाम भी थी धुआँ धुआँ हुस्न भी था उदास उदास — दिल को कई कहानियाँ याद सी आ के रह गईं",
    poemEnglish:
      "The evening too was hazy with smoke, beauty too was wrapped in sadness — the heart recalled many stories, only to leave them half-remembered. — Firaq Gorakhpuri",
    image: "/images/afsos.jpg",
  },
  {
    number: "19",
    title: "Taqdeer",
    titleHindi: "तक़दीर — Destiny",
    year: "2025",
    medium: "Acrylic on Canvas",
    size: "76.5 × 38.5 × 2 cm",
    poem: "कुछ हिस्सा तो मेहनत का है — तो कुछ उन चाँद-तारों का भी। मशक़्क़त तो हर कोई करता है यहाँ — मगर चमकता वही है — जो साथ क़िस्मत ले के आया है।",
    poemEnglish:
      "Some part belongs to effort — and some to those moons and stars above. Everyone labours here — but only they shine — who arrive carrying destiny alongside them.",
    image: "/images/taqdeer.jpg",
  },
  {
    number: "05",
    title: "Krupa",
    titleHindi: "कृपा — Blessings",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "76.5 × 51 × 2 cm",
    poem: "करता तो वो है, और पाते आप हैं — जीते ऐसे हैं, जैसे सब आप ही हैं। सिक्का लिए चले थे, और आज गुमान है — ये कृपा है उसकी, वरना आपका क्या है।",
    poemEnglish:
      "It is He who acts, yet you believe you receive — you live as though everything is your own doing. You walked with a coin of pride, and today that pride remains — this is His grace, for what are you without it.",
    image: "/images/krupa.jpg",
  },
  {
    number: "06",
    title: "Dard se Takhleeq",
    titleHindi: "दर्द से तख़्लीक़ — Creation from Pain",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "46 × 61.5 × 2 cm",
    poem: "सिर्फ़ आईने पर नहीं, इन ज़ख्मों पर भी खरे उतरे — दर्द-ए-माहौल यूँ, आँसू भी मोती बनकर निकले",
    poemEnglish:
      "Not just in mirrors, but these wounds too proved their worth — in such a climate of pain, even tears emerged as pearls.",
    image: "/images/dard-se-takhleeq.jpg",
  },
  {
    number: "07",
    title: "Bhatakta Hua",
    titleHindi: "भटकता हुआ — Directionless",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "46 × 46 × 2 cm",
    poem: "मैं सही की तलाश में शहर-शहर घूमता रहा — आकाश रंग बदलता रहा, पर मैं चलता रहा। मैंने अंधे में तीर चलाया, और आकाश में इंद्रधनुष बनने लगा — ज़िंदगी की करामात यूँ — कि सफ़र अपने आप बदलता रहा।",
    poemEnglish:
      "I wandered city to city in search of what is right — the sky kept changing colours, but I kept walking. I shot an arrow blindly, and a rainbow began forming in the sky — such is life's miracle — the journey kept transforming on its own.",
    image: "/images/bhatakta-hua.jpg",
  },
  {
    number: "08",
    title: "Ehsaas",
    titleHindi: "अहसास — Feeling",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "46 × 46 × 2 cm",
    poem: "यहाँ न होते तो कहाँ होते — लोगों ने बोला ज़रूर, मगर — उस सीधे रास्ते चल दिए होते — तो आज हम कहाँ होते।",
    poemEnglish:
      "If not here, where would we be — people did say, of course — but had we walked that straight path they suggested — where would we be today.",
    image: "/images/ehsaas.jpg",
  },
  {
    number: "09",
    title: "Gussa",
    titleHindi: "गुस्सा — Anger",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "46 × 46 × 2 cm",
    poem: "गुस्से में हमने दोनों आँखें बीच से काटीं — सदमे में हमने दिल की हर बातें मानीं",
    poemEnglish:
      "In anger we severed both eyes from the middle — in shock we accepted every verdict of the heart.",
    image: "/images/gussa.jpg",
  },
  {
    number: "10",
    title: "Bahuroopiya",
    titleHindi: "बहुरूपिया — Shape-shifter",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "46 × 46 × 2 cm",
    poem: "क्या है ये विचारों की जंग भी — दिल कहीं - आँखें कहीं और ही",
    poemEnglish:
      "What is this war of thoughts — the heart is somewhere, the eyes somewhere else entirely.",
    image: "/images/bahuroopiya.jpg",
  },
  {
    number: "11",
    title: "Aaraish-e-Maazi",
    titleHindi: "आराइश-ए-माज़ी — Decoration of the Past",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "46 × 61.5 × 2 cm",
    poem: "",
    poemEnglish:
      "The adornment of what has passed — memories that decorate the walls of the mind.",
    image: "/images/aaraish-e-maazi.jpg",
  },
  {
    number: "12",
    title: "Splashing Mind",
    titleHindi: "स्प्लैशिंग माइंड",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "61 × 61 × 2 cm",
    poem: "",
    poemEnglish:
      "The mind exploding with color — thoughts that cannot be contained.",
    image: "/images/splashing-mind.jpg",
  },
  {
    number: "13",
    title: "Love Letter",
    titleHindi: "प्रेम पत्र",
    year: "2025",
    medium: "Acrylic on Canvas",
    size: "46 × 46 × 2 cm",
    poem: "चलो किसी काम तो आया तुम्हारा ख़त — गुमनामी में फाड़ देने से तो बेहतर था — इन टूटे दिलों को ही कुछ हिदायतें दे दूँ — सो यूँ हुआ कि मैं, ख़त और ख़ाली कैनवास — साथ बैठे सोच को दस्तक दे रहे थे — जब दरवाज़ा न खुला — तो ये बना डाला — तुम होतीं तो… क्या करतीं?",
    poemEnglish:
      "Well, at least your letter found some use — better than tearing it apart in anonymity — let me offer some guidance to these broken hearts — so it happened that I, the letter, and an empty canvas — sat together knocking on thought's door — when the door did not open — this was made instead — if you were here… what would you have done?",
    image: "/images/love-letter.jpg",
  },
  {
    number: "14",
    title: "Iztirab",
    titleHindi: "इज़्तिराब — Restlessness",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "61 × 61 × 2 cm",
    poem: "हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले — बहुत निकले मेरे अरमान लेकिन फिर भी कम निकले — Mirza Ghalib",
    poemEnglish:
      "A thousand desires, each one enough to take a breath away — many longings of mine emerged, yet still they felt too few. — Mirza Ghalib",
    image: "/images/iztirab.jpg",
  },
  {
    number: "15",
    title: "Haqeeqat",
    titleHindi: "हक़ीक़त — Reality",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "31 × 25.5 × 0.4 cm",
    poem: "जीते जी सब मेरे क़रीब आते रहे — मरने पर कोई न आया — सब मतलब के रिश्ते थे — मेरा अपना कोई न था",
    poemEnglish:
      "All came close to me while I lived — no one came when I died — all were relationships of purpose — not one was truly my own.",
    image: "/images/haqeeqat.jpg",
  },
  {
    number: "16",
    title: "Bantwara",
    titleHindi: "बँटवारा — Separation",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "41 × 31 × 0.4 cm",
    poem: "मैं क़ैदी था और वो पिंजरा — बँटवारा जब हुआ तो यूँ हुआ — मेरे हिस्से चीखें आईं — उसके हिस्से पिंजरा आया",
    poemEnglish:
      "I was the prisoner and that was the cage — when separation came, it came like this — to my share came the screams — to its share came the cage.",
    image: "/images/bantwara.jpg",
  },
  {
    number: "17",
    title: "Aakhir-e-Shab",
    titleHindi: "आख़िर-ए-शब — End of the Night",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "31 × 25.5 × 0.4 cm",
    poem: "बेख़ुदी, हवाएँ, चाँद और काली रातें साथ थीं — मैंने ब्रश उठाया था उसे तख़्लीक करने को — मगर ये न जाना कि — कैनवास को छूते ही — तमाम रंग रो पड़ेंगे",
    poemEnglish:
      "Oblivion, winds, the moon and dark nights were all present — I had picked up the brush to create — but I did not know — that the moment it touched the canvas — all the colours would begin to weep.",
    image: "/images/aakhir-e-shab.jpg",
  },
  {
    number: "18",
    title: "Kya Karein",
    titleHindi: "क्या करें — What Now?",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "30.5 × 30.5 × 0.4 cm",
    poem: "चुप रह कर सब कुछ छोड़ दें — या रो-रो कर सब कुछ सह जाएं",
    poemEnglish:
      "Stay silent and let everything go — or weep through it all and endure.",
    image: "/images/kya-karein.jpg",
  },
  {
    number: "20",
    title: "Alahda",
    titleHindi: "अलहदा — Distinct",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "30.5 × 30.5 × 0.4 cm",
    poem: "",
    poemEnglish:
      "Apart from the rest — distinct in its solitude, its color, its silence.",
    image: "/images/alahda.jpg",
  },
  {
    number: "21",
    title: "Find Your Way",
    titleHindi: "राह खोजो",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "20 × 15.1 × 0.4 cm",
    poem: "ज़िन्दगी-ए-बज़्म है, तो हम शराबी हैं — बंदगी इन आँखों कि, वरना कामयाबी है",
    poemEnglish:
      "If life is a gathering, then we are its intoxicated ones — devotion lies in these eyes — otherwise, what is success.",
    image: "/images/find-your-way.jpg",
  },
  {
    number: "22",
    title: "Finding Purpose",
    titleHindi: "तलाश — Finding Purpose",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "46 × 46 × 2 cm",
    poem: "",
    poemEnglish:
      "The search itself becomes the purpose — wandering as a form of arriving.",
    image: "/images/finding-purpose.jpg",
  },
];

export const paintings: Painting[] = paintingsData.map((p) => {
  const fromDisk = imagesByWorkNumber[p.number];
  const images = fromDisk?.length ? fromDisk : [p.image];
  return { ...p, image: images[0] ?? p.image, images };
});
