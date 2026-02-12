"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function HistoriePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Historien om Slotsengens Musik
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fra slotsengen til skoven – historien om en festival, der voksede med sit fællesskab
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <h2 className="text-3xl font-bold text-primary">Begyndelsen</h2>
                <p>
                  Slotsengens Musik blev født af en simpel tanke: Hvad nu hvis vi samlede folk 
                  fra Løgumkloster og omegn omkring musik og fællesskab?
                </p>
                <p>
                  Det startede på slotsengen – den åbne græsplæne ved Løgumkloster Slot. 
                  En scene, nogle kunstnere, og en håndfuld frivillige, der troede på idéen.
                </p>
                <p>
                  Fra første år var det tydeligt, at det her handlede om mere end koncerter. 
                  Det handlede om at skabe et sted, hvor alle følte sig velkomne. Hvor man ikke 
                  behøvede at kende kunstnerne for at komme. Hvor man kom for fællesskabet.
                </p>
              </div>

              <Card className="border-2 border-primary/20 bg-muted/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Kerneværdier fra starten</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      <span><strong>Lokalt forankret:</strong> Skabt af og for lokalsamfundet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      <span><strong>Frivilligdrevet:</strong> Bygget af mennesker, der brænder for fællesskabet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      <span><strong>Inkluderende:</strong> Alle er velkomne, uanset baggrund eller musiksmag</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      <span><strong>Autentisk:</strong> Ægte oplevelser frem for kommerciel glans</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
