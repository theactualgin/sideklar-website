export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image: string;
  images: string[];
  services: string[];
  challenge: string;
  solution: string;
  result: string;
}

export const projects: Project[] = [
  {
    slug: "fredrikfikser",
    title: "FredrikFikser",
    category: "Nettside",
    description: "Håndverkerbedrift i Oslo. Komplett nettside med CMS, tjenesteoversikt og kontaktskjema.",
    year: "2026",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    ],
    services: ["Nettside", "CMS", "SEO-oppsett", "Kontaktskjema"],
    challenge:
      "FredrikFikser hadde kun en enkel landingsside som var vanskelig å navigere og ikke ga et profesjonelt inntrykk. Tjenestene deres — oppussing, bad, snekker, flislegging, gulv, maling og kjøkken — var knapt synlige, og potensielle kunder fant ikke frem.",
    solution:
      "Vi bygde en komplett nettside med tydelig tjenesteoversikt, referanseprosjekter og et enkelt kontaktskjema. Et innebygd CMS gjør at Fredrik selv kan oppdatere innhold, legge til prosjekter og holde siden levende uten teknisk hjelp.",
    result:
      "Bedre konvertering og en enklere kundeopplevelse. Kundene finner raskt frem til riktig tjeneste og kan enkelt ta kontakt direkte fra siden.",
  },
  {
    slug: "hof-il",
    title: "Hof IL",
    category: "Nettside",
    description: "Redesign av nettside for idrettslag med over 125 års historie. Moderne løsning med CMS.",
    year: "2026",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80",
    ],
    services: ["Nettside", "CMS", "Redesign"],
    challenge:
      "Hof IL hadde en svært utdatert nettside som verken reflekterte klubbens stolthet eller fungerte godt for medlemmer og foresatte. Innholdet var vanskelig å holde oppdatert, og siden ga ikke et godt bilde av alt idrettslaget tilbyr.",
    solution:
      "Vi redesignet nettsiden fra bunnen med fokus på oversikt over grupper, nyheter og arrangementer. Et brukervennlig CMS gjør det enkelt for klubben å holde innholdet oppdatert uten teknisk kompetanse — uansett hvem som sitter med ansvaret.",
    result:
      "Bedre konvertering og en enklere brukeropplevelse for medlemmer, foresatte og nye interessenter. Klubben kan nå selv oppdatere innholdet raskt og enkelt.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
