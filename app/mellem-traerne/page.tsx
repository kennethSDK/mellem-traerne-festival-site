"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Trees, Clock, Users, Heart } from "lucide-react";

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
                Mellem Træerne
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                En oplevelse mellem koncerter, mellem mennesker, mellem venner og bekendte
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
                  Navneskiftet: Fra Slotsengens Musik til Mellem Træerne
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I 2025 tog arrangementet et nyt skridt i sin udvikling. Koncerten flyttede fra Slotsengen 
                    til de mere naturnære omgivelser i Dronningedalen ved Løgumkloster. Flytningen skabte nye 
                    muligheder for at udvikle arrangementet både visuelt, stemningsmæssigt og musikalsk. Scenen 
                    blev pludselig omkranset af skov, træer og natur, hvilket gav koncerten en helt særlig 
                    atmosfære, hvor publikum stod midt i naturen og oplevede musikken tæt på.
                  </p>
                  <p>
                    Den nye ramme ændrede oplevelsen markant. Hvor Slotsengen havde været udgangspunktet for de 
                    første år, begyndte arrangementet i Dronningedalen at få sin egen identitet. Publikum stod 
                    bogstaveligt talt mellem træerne, og naturen blev en aktiv del af koncertoplevelsen.
                  </p>
                  <p>
                    Derfor besluttede arrangørgruppen i 2026 at ændre navnet fra Slotsengens Musik til Mellem 
                    Træerne. Navneskiftet skulle afspejle de nye omgivelser, den særlige stemning og visionen om 
                    at skabe en musikoplevelse, hvor natur, fællesskab og musik smelter sammen.
                  </p>
                  <p>
                    Navnet Mellem Træerne beskriver ikke bare stedet, det beskriver også følelsen. En 
                    koncertoplevelse i naturen, hvor publikum samles under trækronerne, opdager ny musik og deler 
                    en særlig sommeraften i fællesskab. Samtidig er ambitionen fortsat den samme som fra 
                    begyndelsen at skabe et stærkt kulturelt tilbud til Løgumkloster og omegn og give både nye og 
                    etablerede danske kunstnere en scene.
                  </p>
                  <p>
                    Selvom navnet har ændret sig, lever ånden fra de første koncerter i 2020 videre drevet af 
                    frivillighed, lokal opbakning og ønsket om at skabe noget særligt for byen.
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
                "Det er ikke bare en festival. Det er en dag, hvor vi minder hinanden om, 
                hvad der betyder noget. Musik. Fællesskab. Hinanden."
              </p>
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
