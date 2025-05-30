import "server-only";
import linkedinLogo from "@public/icons/linkedin.svg";

export const content = {
  title: "# Mejl-hanteringssystem",

  
  subtitle:"Spara tid, energi och pengar",
  paragraph: `
  Med vårt Ai-verktyg automatiseras hela orderflödet från e-post till TMS.
  Administrationen blir smidigare, och du får bättre kontroll över företagets
  orderhantering utan onödiga manuella steg.`,

  subtitles:"Hur mycket tid kan ni spara?",
  paragraph2: `
  Visste du att ett företag med cirka 200 mejl om dagen lägger i genomsnitt 46
  timmar er månad på att manuellt hantera ordrar från mejl till TMS? Testa vårt 
  räkneverktyg för att se hur mycket tid ni kan spara med vårt AI-verktyg.`,



  uspList: [
    {
      title: "Enklare administration",
      description: "Alla inkommande ordrar från e-post samlas och överförs automatiskt till ert TMS med ett klick - så att du och dina kollegor slipper att manuellt registrera ordrar, hantera pappersdokument och lägga tid på dubbelarbete.",
    
    },
    {
      title: "Bättre kontroll och översikt",
      description: "Hantera hela orderflödet i en AI-driven självbetjäningsportal och få full koll på alla ordrar i realtid. Där kan du lägga till eller ta bort användare, sätta regler för orderprioritering, spåra status och fördela ordrar till rätt kund eller kostnadsställe direkt från ett och samma ställe.",
      
    },
    {
      title: "Nöjda medarbetare",
      description: "låt dina kollegor fokusera på själva arbetet istället för att lägga tid på att mata in ordrar från mejl till TMS - ett smidigare flöde som minskar frustrationen och ökar effektiviteten.",
      
    },
    {
      title: "Mindre kostnader",
      description: "Med AI-verktygets automatiska  överföring av ordrar till TMS elimineras tidskrävande manuella steg, vilket minskar risken för fel och förseningar. Verktyget flaggar ofullständiga ordrar i förväg, så att ni slipper kostsamma missar och kan optimera resurserna effektivt.",

    },
  ],

  uspListTwo: [
    {
      title: "Spara tid, energi och pengar",
      description: "Med vårt AI-verktyg automatiseras hela orderflödet från e-post till TMS. Administrationen blir smidigare, och du får bättre kontroll över företagets orderhantering utan onödiga manuella steg.",
    
    },
    {
      title: "Hur mycket tid kan ni spara?",
      description: "Visste du att ett företag med cirka 200 mejl om dagen lägger i genomsnitt 46 timmar per månad på att manuellt hantera ordrar från mejl till TMS? Testa vårt räkneverktyg för att se hur mycket tid ni kan spara med vårt AI-verktyg.",
      
    },

  ],

  uspListReglage: [
    {
      title: "",
      description: "",
    
    },
    {
      title: "",
      description: "",
      
    },

  ],
 
  footer: {
    contact: `## Inspirerad? Hör av dig!
    Har du en idé eller ett projekt i åtanke? <br /> 
    Oavsett om du vill utveckla en ny lösning, förbättra en befintlig eller bara vill diskutera möjligheterna, är vi här för att hjälpa till.
    `,
    contactText: "Hör av dig",
    about: `## Om Bitio
    Med över två decennier av erfarenhet kombinerar vi djup teknisk kompetens 
    med en bred förståelse för både affärsbehov och slutanvändare. 
    Vi levererar lösningar som inte bara adresserar dagens problem, 
    utan också förbereder dig för framtidens utmaningar.`,
    visit: `## Kontakt
    Munkbron 11 <br /> 
    111 28 Stockholm <br />
    info@bitio.se`,
    socials: [
      {
        img: linkedinLogo,
        alt: "LinkedIn logo",
        href: "https://se.linkedin.com/company/bitio-development",
      },
    ],
    links: {
      title: `## Genvägar`,
      links: [
        {
          href: "/",
          text: "Hem",
          active: false,
        },
        {
          href: "/development",
          text: "Tjänster",
          active: false,
        },
        {
           href: "/products",
          text: "**Produkter**",
          active: true,
        },
      ],
    },
  },
};
