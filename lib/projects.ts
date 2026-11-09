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
    category: "Konsept",
    description:
      "Konseptdesign for en håndverkerbedrift i Oslo: tydelig tjenesteoversikt, referanser og enkel kontakt.",
    year: "2026",
    image: "/projects/ffse.jpg",
    images: ["/projects/ffse.jpg"],
    services: ["Nettside", "Webdesign", "SEO-oppsett", "Kontaktskjema"],
    challenge:
      "Mange håndverkerbedrifter har en enkel landingsside der tjenestene knapt synes og det er vanskelig å ta kontakt. Utgangspunktet for konseptet var en bedrift som tilbyr oppussing, bad, snekkerarbeid, flislegging, gulv, maling og kjøkken, uten at besøkende raskt ser hva som tilbys.",
    solution:
      "Vi tegnet og bygde en komplett nettside som et konsept: tydelig tjenesteoversikt, plass til referanseprosjekter, tillitssignaler og et enkelt kontaktskjema, med innhold som kan oppdateres uten teknisk hjelp.",
    result:
      "Dette er et konsept vi har laget for å vise hva vi kan levere, ikke en levert kundeløsning. Ønsker du noe lignende for din bedrift, bygger vi det på 1–3 dager.",
  },
  {
    slug: "hof-il",
    title: "Hof IL",
    category: "Konsept",
    description:
      "Konseptdesign for et idrettslag med over 125 års historie: moderne forside, kampoversikt og nyhetsløsning.",
    year: "2026",
    image: "/projects/hofil.jpg",
    images: ["/projects/hofil.jpg"],
    services: ["Nettside", "Redesign", "CMS"],
    challenge:
      "Idrettslag har ofte nettsider som er vanskelige å holde oppdatert og som ikke gjenspeiler alt klubben tilbyr. Utgangspunktet var en klubb med mange grupper, kamper og nyheter som skal være lett å finne for medlemmer og foresatte.",
    solution:
      "Vi laget et redesign-konsept med oversikt over grupper, kamper og nyheter, og et enkelt innholdssystem slik at klubben selv kan publisere uten teknisk kompetanse.",
    result:
      "Dette er et konsept vi har laget for å vise hva vi kan levere, ikke en levert kundeløsning. Ønsker du noe lignende for din forening eller bedrift, tar vi gjerne en uforpliktende prat.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
