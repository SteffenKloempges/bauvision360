export interface ServiceData {
  title: string;
  description: string;
  features: string[];
  nachtrag?: string;
  image: string;
}

export interface ServiceDataMap {
  [key: string]: ServiceData;
}

export const serviceData: ServiceDataMap = {
  trockenbau: {
    title: "Trockenbau",
    description:
      "Wir bieten maßgeschneiderte Trockenbaulösungen für Ihre Bauprojekte. Mit langjähriger Erfahrung und modernster Technik liefern wir Ihnen stets Ergebnisse von höchster Qualität.",
    features: [
      "Wand- und Deckensysteme",
      "Akustiklösungen",
      "Brandschutzverkleidungen",
      "Schallschutzlösungen",
      "Dachgeschossausbau",
      "Raumgestaltung und Raumtrennung",
    ],
    image: "/images/services/03_Trockenbau.webp",
  },
  bodenbelagsarbeiten: {
    title: "Bodenbelagsarbeiten",
    description:
      "Professionelle Verlegung verschiedener Bodenbeläge nach Ihren individuellen Wünschen und Anforderungen.",
    features: [
      "Bemusterung von Bodenbelägen",
      "Nivellierung und Vorbereitung des Untergrunds ",
      "Laminat inkl. Trittschalldämmung",
      "Vinyl-/Designbeläge (click oder verklebt)",
      "Teppichbodenfliesen",
      "Sockelleisten",
    ],
    image: "/images/services/04_Boden.webp",
  },
  tapezier_streicharbeiten: {
    title: "Tapezier- und Streicharbeit",
    description:
      "Wir tapezieren Ihre Räumlichkeiten mit Raufasertapete durch modernste Techniken und Überstreichen diese mit Bindefarbe.",
    features: [
      "Alt-Tapeten entfernen",
      "Vorbereitung des Untergrundes",
      "Tapezieren von Raufasertapete",
      "Überstreichen in Ihrer Wunschfarbe",
    ],
    image: "/images/services/03_Tapezier-und-Streicharbeiten.webp",
  },
  tuer_und_fenstermontage: {
    title: "Tür- und Fenstermontage",
    description:
      "Wir montieren Innentüren und Fensteranlagen aus Kunststoff fachgerecht und optisch ansprechend.",
    features: [
      "Demontage Ihrer alten Innentür und Fenster",
      "Aufmaß und Bemusterung für Ihre neue Tür ",
      "Lieferung und Montage ",
      "Kürzen von Bestandstüren",
    ],
    image: "/images/services/08_Tür.webp",
  },
  kuechenmontage: {
    title: "Küchenmontage",
    description:
      "Wir montieren Ihre Küche professionell und passgenau – von Schränken über Arbeitsplatten bis zum Einbau der Elektrogeräte.",
    features: [
      "Küchenplanung",
      "Präzise Montage Ihrer Küchenzeile und Möbelstücke",
      "Einbau von Elektrogeräten",
      "Vorbereitung für Wasser- und Starkstromanschlüsse",
      "Demontage und Entsorgung Ihrer alten Küche",
      "Transport und Lieferung Ihrer bestellten Küche (auch von Privatverkäufern)",
    ],
    image: "/images/services/07_Küche.webp",
  },
  haushaltsaufloesung_und_kleinumzuege: {
    title: "Haushaltsauflösungen und Kleinumzüge",
    description:
      "Haushaltsauflösungen und Umzüge sind stets mit Stress verbunden – wir nehmen Ihnen diesen Stress gerne ab. Wir entrümpeln Keller, Dachböden und ganze Haushalte schnell, zuverlässig und diskret. Unsere Umzüge sind sicher, seriös und mit einer transparenten Kommunikation verbunden. Ihren Kleiderschrank de- und remontiert unser Tischler-Team professionell für Ihren Umzug. ",
    features: [
      "Professionelle Entrümpelung inkl. besenreine Übergabe",
      "Schnelle und diskrete Abwicklung",
      "Schnelle & diskrete Abwicklung",
      "Transparente Preisgestaltung",
      "Erfahrene Fahrer und Möbelpacker für Ihren Umzug",
      "Für Privat- und Gewerbekunden"
    ],
    image: "/images/services/09_Umzug.webp",
  },
  elektroarbeiten: {
    title: "Kleine Elektroarbeiten",
    description:
      "Wir führen kleine Elektroarbeiten fachgerecht und nach den geltenden Sicherheitsvorschriften aus. Im Rahmen festgelegter Tätigkeiten werden Instandhaltungs- und Austauscharbeiten an bestehenden elektrischen Anlagen vorgenommen – zuverlässig, normgerecht und sicher. Diese Leistungen gewährleisten den sicheren Betrieb elektrischer Installationen und tragen zur Werterhaltung von Gebäuden bei.",
    features: [
      "Anschluss von Leuchten",
      "Herdanschluss (Starkstrom)",
      "Montage von elektrischen Rollläden",
      "Erweiterung von Steckdosen und Schalter",
      "Kabelschlitze herstellen und verlegte Kabel eingipsen",
      "Kabel- und Schalter/Steckdosen-Installationen in unseren Trockenbau-Wänden",
      "Prüfung ortsveränderlicher elektrischer Betriebsmittel bis 230 V gemäß DIN EN 50699 (VDE 0702), nach Reparatur gemäß DIN EN 50678 (VDE 0701), im Rahmen der DGUV Vorschrift 3."
    ],
    image: "/images/services/Elektro.webp",
  },
};

export const craftingServices: ServiceDataMap = {
  trockenbau: {
    title: "Trockenbau",
    description:
      "Wir bieten maßgeschneiderte Trockenbaulösungen für Ihre Bauprojekte. Mit langjähriger Erfahrung und modernster Technik liefern wir Ihnen stets Ergebnisse von höchster Qualität.",
    features: [
      "Wand- und Deckensysteme",
      "Akustiklösungen",
      "Brandschutzverkleidungen",
      "Schallschutzlösungen",
      "Dachgeschossausbau",
      "Raumgestaltung und Raumtrennung",
    ],
    image: "/images/services/03_Trockenbau.webp",
  },
  bodenbelagsarbeiten: {
    title: "Bodenbelagsarbeiten",
    description:
      "Professionelle Verlegung verschiedener Bodenbeläge nach Ihren individuellen Wünschen und Anforderungen.",
    features: [
      "Bemusterung von Bodenbelägen",
      "Nivellierung und Vorbereitung des Untergrunds ",
      "Laminat inkl. Trittschalldämmung",
      "Vinyl-/Designbeläge (click oder verklebt)",
      "Teppichbodenfliesen",
      "Sockelleisten",
    ],
    image: "/images/services/04_Boden.webp",
  },
  tapezier_streicharbeiten: {
    title: "Tapezier- und Streicharbeit",
    description:
      "Wir tapezieren Ihre Räumlichkeiten mit Raufasertapete durch modernste Techniken und Überstreichen diese mit Bindefarbe.",
    features: [
      "Alt-Tapeten entfernen",
      "Vorbereitung des Untergrundes",
      "Tapezieren von Raufasertapete",
      "Überstreichen in Ihrer Wunschfarbe",
    ],
    image: "/images/services/03_Tapezier-und-Streicharbeiten.webp",
  },
  tuer_und_fenstermontage: {
    title: "Tür- und Fenstermontage",
    description:
      "Wir montieren Innentüren und Fensteranlagen aus Kunststoff fachgerecht und optisch ansprechend.",
    features: [
      "Demontage Ihrer alten Innentür und Fenster",
      "Aufmaß und Bemusterung für Ihre neue Tür ",
      "Lieferung und Montage ",
      "Kürzen von Bestandstüren",
    ],
    image: "/images/services/08_Tür.webp",
  },
  kuechenmontage: {
    title: "Küchenmontage",
    description:
      "Wir montieren Ihre Küche professionell und passgenau – von Schränken über Arbeitsplatten bis zum Einbau der Elektrogeräte.",
    features: [
      "Küchenplanung",
      "Präzise Montage Ihrer Küchenzeile und Möbelstücke",
      "Einbau von Elektrogeräten",
      "Vorbereitung für Wasser- und Starkstromanschlüsse",
      "Demontage und Entsorgung Ihrer alten Küche",
      "Transport und Lieferung Ihrer bestellten Küche (auch von Privatverkäufern)",
    ],
    image: "/images/services/07_Küche.webp",
  },
  haushaltsaufloesung_und_kleinumzuege: {
    title: "Haushaltsauflösungen und Kleinumzüge",
    description:
      "Haushaltsauflösungen und Umzüge sind stets mit Stress verbunden – wir nehmen Ihnen diesen Stress gerne ab. Wir entrümpeln Keller, Dachböden und ganze Haushalte schnell, zuverlässig und diskret. Unsere Umzüge sind sicher, seriös und mit einer transparenten Kommunikation verbunden. Ihren Kleiderschrank de- und remontiert unser Tischler-Team professionell für Ihren Umzug. ",
    features: [
      "Professionelle Entrümpelung inkl. besenreine Übergabe",
      "Schnelle und diskrete Abwicklung",
      "Schnelle & diskrete Abwicklung",
      "Transparente Preisgestaltung",
      "Erfahrene Fahrer und Möbelpacker für Ihren Umzug",
      "Für Privat- und Gewerbekunden"
    ],
    image: "/images/services/09_Umzug.webp",
  },
  elektroarbeiten: {
    title: "Kleine Elektroarbeiten",
    description:
      "Wir führen kleine Elektroarbeiten fachgerecht und nach den geltenden Sicherheitsvorschriften aus. Im Rahmen festgelegter Tätigkeiten werden Instandhaltungs- und Austauscharbeiten an bestehenden elektrischen Anlagen vorgenommen – zuverlässig, normgerecht und sicher. Diese Leistungen gewährleisten den sicheren Betrieb elektrischer Installationen und tragen zur Werterhaltung von Gebäuden bei.",
    features: [
      "Anschluss von Leuchten",
      "Herdanschluss (Starkstrom)",
      "Montage von elektrischen Rollläden",
      "Erweiterung von Steckdosen und Schalter",
      "Kabelschlitze herstellen und verlegte Kabel eingipsen",
      "Kabel- und Schalter/Steckdosen-Installationen in unseren Trockenbau-Wänden",
      "Prüfung ortsveränderlicher elektrischer Betriebsmittel bis 230 V gemäß DIN EN 50699 (VDE 0702), nach Reparatur gemäß DIN EN 50678 (VDE 0701), im Rahmen der DGUV Vorschrift 3."
    ],
    image: "/images/services/Elektro.webp",
  },
};

export const professionalServices: ServiceDataMap = {
  bauleitung: {
    title: "Bauleitung",
    description:
      "Von der  und Koordinierung aller Gewerke bis zur termingerechten Ausführung und erfolgreichen Fertigstellung Ihres Projekts – wir stehen Ihnen kompetent zur Seite und sorgen für Qualität, die Ihre Erwartungen übertrifft.",
    features: [
      "Koordination aller Gewerke",
      "Sicherstellung der Bauqualität",
      "Einhaltung von Zeitplänen",
      "Überwachung des Budgets",
      "Unterstützung bei Bauanträgen",
      "Reibungslose Projektabwicklung",
    ],
    image: "/images/services/NEU_Bauleitung.webp",
  },
  SiGeKo: {
    title: "Sicherheits- und Gesundheitsschutzkoor. (SiGeKo)",
    description:
      "Als Ihr SiGeKo stellen wir sicher, dass alle Vorschriften der Baustellenverordnung eingehalten werden. Von der Gefährdungsanalyse bis zur laufenden Überwachung sorgen wir für die Sicherheit und den Gesundheitsschutz aller Beteiligten, um einen reibungslosen und sicheren Ablauf der Bauarbeiten zu gewährleisten.",
    features: [
      "Vorankündigung",
      "SiGe-Plan",
      "Baustellenbegehungen inkl. Protokollführung",
      "Überwachung der Schutzmaßnahmen auf der Baustelle bis zur Fertigstellung",
    ],
    image: "/images/services/NEU_SiGeKo.webp",
  },
}

export const sachverstaendigenServices: ServiceDataMap = {
  sachverstaendigung: {
    title: "Sachverständiger für Schäden an und in Gebäuden",
    description:
      "Wir erstellen unabhängige Gutachten zu Schäden an und in Gebäuden. Nach einer sorgfältigen Ortsbesichtigung bewerten wir Ursachen und Umfang der Schäden und liefern eine fundierte, verständliche Fachexpertise. Unsere Gutachten bieten eine verlässliche Grundlage für Sanierungen, Versicherungsfragen oder rechtliche Entscheidungen.",
    features: [
      "Sorgfältige Ortsbesichtigung",
      "Bestandsaufnahme",
      "Kurze Stellungnahme",
      "Umfangreiches Gutachten",
      "Begleitung bei Sanierungen",
    ],
    image: "/images/services/Bausachverstaendigung.webp",
  }
}
  ;
