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
    slug: "bergstrom-ror",
    title: "Bergstrom Rør",
    category: "Nettside",
    description: "Lokal rørleggerbedrift i Oslo. Ny nettside med booking og kontaktskjema, klar på 3 dager.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
    ],
    services: ["Nettside", "SEO-oppsett", "Kontaktskjema"],
    challenge:
      "Bergstrom Rør hadde vært i bransjen i over 15 år, men hadde ingen digital tilstedeværelse. Nye kunder fant dem kun gjennom muntlige anbefalinger, og de mistet stadig oppdrag til konkurrenter med synlige nettsider.",
    solution:
      "Vi designet og utviklet en enkel, tillitsbyggende nettside som presenterer tjenestene tydelig, viser frem tidligere oppdrag og gjør det lett for kunder å ta kontakt. Siden ble satt opp med et enkelt kontaktskjema og grunnleggende SEO for lokale søk i Oslo.",
    result:
      "Innen to måneder etter lansering rapporterte Bergstrom Rør om tre til fire nye henvendelser per uke direkte fra nettsiden. De rangerer nå på første side for flere lokale søk.",
  },
  {
    slug: "kafe-solberg",
    title: "Kafé Solberg",
    category: "Nettside & Grafisk profil",
    description: "Moderne nettside og grafisk profil for familiedrevet kafé i Bergen.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&q=80",
    ],
    services: ["Nettside", "Logo", "Grafisk profil", "Meny-design"],
    challenge:
      "Kafé Solberg hadde en utdatert logo og ingen nettside. De ønsket å fremstå mer profesjonelt og tiltrekke seg nye gjester, spesielt turister i Bergen sentrum som søker etter kafeer på Google.",
    solution:
      "Vi startet med å lage en ny logo og grafisk profil som fanger den varme, hjemlige atmosfæren til kaféen. Deretter bygde vi en nettside med meny, åpningstider, bilder og en kort historie om familien bak. Siden er optimalisert for lokale søk.",
    result:
      "Kafé Solberg fikk en sammenhengende visuell identitet som de nå bruker overalt — fra nettsiden til menykort og emballasje. De melder om merkbart økt trafikk fra Google og flere nye gjester som sier de fant dem på nett.",
  },
  {
    slug: "nordlys-eiendom",
    title: "Nordlys Eiendom",
    category: "Nettside",
    description: "Profesjonell presentasjonsside for eiendomsmegler med fokus på tillit og lokalkunnskap.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    ],
    services: ["Nettside", "SEO-oppsett", "Innholdsproduksjon"],
    challenge:
      "Nordlys Eiendom er et uavhengig meglerkontor som konkurrerer mot store kjeder. De trengte en nettside som kommuniserte lokal ekspertise og personlig service — noe de store kjedene ikke klarer å formidle like godt.",
    solution:
      "Vi la vekt på å fortelle historien om teamet og lokalkunnSkapen deres. Nettsiden presenterer nylig solgte eiendommer, kundeanmeldelser og en tydelig forklaring av prosessen fra verdivurdering til salg. Innholdet ble skrevet for å rangere på relevante søk.",
    result:
      "Siden lansering bruker Nordlys Eiendom nettsiden aktivt i salgssamtaler. De rapporterer at potensielle selgere er mer forberedt og informerte når de tar kontakt, noe som gjør prosessen raskere og enklere.",
  },
  {
    slug: "studio-voss",
    title: "Studio Voss",
    category: "Logo & Grafisk profil",
    description: "Visuell identitet for interiørdesignstudio. Logo, fargepalett og typografi.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    ],
    services: ["Logo", "Grafisk profil", "Typografi", "Fargepalett"],
    challenge:
      "Studio Voss var et nyoppstartet interiørdesignstudio med stor kompetanse, men ingen visuell identitet. Grunnlegger Anne Voss hadde en klar visjon for studioets estetikk — stilren, nordisk og tidløs — men manglet verktøyene til å kommunisere det.",
    solution:
      "Vi jobbet tett med Anne gjennom en strukturert prosess for å forstå verdiene og målgruppen til studioet. Resultatet ble en minimalistisk logo med en tilhørende grafisk profil — fargepalett, typografi og retningslinjer for bruk — som speiler studioets estetikk perfekt.",
    result:
      "Studio Voss lanserte med en sterk, sammenhengende identitet som umiddelbart ble lagt merke til. Anne forteller at profilen har vært avgjørende for å vinne de første kundeoppdragene, siden den kommuniserer profesjonalitet fra første møte.",
  },
  {
    slug: "havn-advokatfirma",
    title: "Havn Advokatfirma",
    category: "Nettside",
    description: "Tillitsbyggende nettside for advokatfirma med fokus på tydelig kommunikasjon og SEO.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    ],
    services: ["Nettside", "SEO-oppsett", "Innholdsproduksjon"],
    challenge:
      "Havn Advokatfirma hadde en gammel nettside som var vanskelig å navigere og ikke rangerte i søk. Potensielle klienter som søkte etter advokathjelp i området fant dem ikke, og de som fant dem fikk ikke det tillitsfulle inntrykket firmaet fortjente.",
    solution:
      "Vi bygde en ny nettside med tydelig struktur, enkelt språk og sterkt fokus på tillit — teambilder, spesialiseringsområder og en FAQ som svarer på de vanligste spørsmålene folk har før de kontakter en advokat. Teknisk SEO ble satt opp fra bunnen.",
    result:
      "Nettsiden rangerer nå på første side for flere relevante søkeord. Havn rapporterer om en merkbar økning i henvendelser fra nye klienter, og at kvaliteten på henvendelsene er høyere fordi klientene er bedre informerte om hva firmaet tilbyr.",
  },
  {
    slug: "frisk-fysioterapi",
    title: "Frisk Fysioterapi",
    category: "Nettside & Vedlikehold",
    description: "Nettside med online timebooking og løpende vedlikeholdsavtale for klinikk i Stavanger.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    ],
    services: ["Nettside", "Timebooking-integrasjon", "Vedlikeholdsavtale"],
    challenge:
      "Frisk Fysioterapi brukte mye tid på å ta imot bookinger per telefon og e-post. De ønsket en nettside som lot pasienter booke time selv, og som holdt seg oppdatert uten at de måtte tenke på det.",
    solution:
      "Vi bygde en nettside med integrert timebookingsystem, presentasjon av alle terapeutene og tydelig informasjon om de ulike behandlingstilbudene. Etter lansering inngikk vi en vedlikeholdsavtale som sørger for at siden alltid er oppdatert, rask og sikker.",
    result:
      "Over 60 prosent av alle timebookinger skjer nå digitalt, noe som har frigjort betydelig tid for resepsjonen. Vedlikeholdsavtalen gir klinikken trygghet — de vet at noen alltid har øye på nettsiden deres.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
