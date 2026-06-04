import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Om Mellem Træerne | Musikfestival i Sønderjylland - Historie & Vision",
  description: "Læs historien bag Mellem Træerne Festival i Løgumkloster, Sønderjylland. Fra Slotsengens Musik til en unik musikfestival i Dronningedalen med live musik, koncerter og kulturarrangementer.",
  keywords: [
    "om Mellem Træerne",
    "festival historie Sønderjylland",
    "Slotsengens Musik",
    "Dronningedalen Løgumkloster",
    "musikfestival baggrund",
    "kulturarrangementer Sønderjylland historie"
  ],
  openGraph: {
    title: "Om Mellem Træerne | Musikfestival i Sønderjylland",
    description: "Læs historien bag Mellem Træerne Festival i Løgumkloster, Sønderjylland. Fra Slotsengens Musik til en unik musikfestival i Dronningedalen.",
    type: "website",
    locale: "da_DK",
    url: "https://mellemtraerne.dk/mellem-traerne",
  },
  alternates: {
    canonical: "https://mellemtraerne.dk/mellem-traerne",
  },
};

export default function MellemTraernePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Om Mellem Træerne - Musikfestival i Sønderjylland
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Historien bag festivalen i Dronningedalen ved Løgumkloster
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">
                  Fra Slotsengens Musik til Mellem Træerne Festival
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I 2025 tog vores musikfestival i Sønderjylland et nyt skridt i sin udvikling. 
                    Koncerten flyttede fra Slotsengen til de mere naturnære omgivelser i Dronningedalen ved Løgumkloster. 
                    Flytningen skabte nye muligheder for at udvikle arrangementet både visuelt, stemningsmæssigt og musikalsk. 
                    Scenen blev pludselig omkranset af skov, træer og natur, hvilket gav koncerten en helt særlig atmosfære, 
                    hvor publikum stod midt i naturen og oplevede live musik tæt på.
                  </p>
                  <p>
                    Den nye ramme ændrede oplevelsen markant. Hvor Slotsengen havde været udgangspunktet for de første år, 
                    begyndte sommerfestivalen i Dronningedalen at få sin egen identitet som en af de mest unikke 
                    kulturarrangementer i Sønderjylland. Publikum stod bogstaveligt talt mellem træerne, 
                    og naturen blev en aktiv del af koncertoplevelsen.
                  </p>
                  <p>
                    Derfor besluttede arrangørgruppen i 2026 at ændre navnet fra Slotsengens Musik til Mellem Træerne. 
                    Navneskiftet skulle afspejle de nye omgivelser, den særlige stemning og visionen om at skabe 
                    en musikoplevelse i Sønderjylland, hvor natur, fællesskab og live musik smelter sammen.
                  </p>
                  <p>
                    Navnet Mellem Træerne beskriver ikke bare stedet, det beskriver også følelsen. 
                    En koncertoplevelse i naturen ved Løgumkloster, hvor publikum samles under trækronerne, 
                    opdager ny musik og deler en særlig sommeraften i fællesskab. Samtidig er ambitionen fortsat den samme 
                    som fra begyndelsen: at skabe et stærkt kulturelt tilbud til Løgumkloster og omegn i Sønderjylland 
                    og give både nye og etablerede danske kunstnere en scene.
                  </p>
                  <p>
                    Selvom navnet har ændret sig, lever ånden fra de første koncerter i 2020 videre. 
                    Mellem Træerne er stadig drevet af frivillighed, lokal opbakning fra Løgumkloster og omegn, 
                    og ønsket om at skabe noget særligt for Sønderjylland - en musikfestival der kombinerer 
                    live musik, natur og fællesskab på en unik måde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-medium mb-6 italic">
                "Det er ikke bare en festival i Sønderjylland. Det er en dag, hvor vi minder hinanden om, 
                hvad der betyder noget. Live musik. Fællesskab. Hinanden."
              </p>
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
