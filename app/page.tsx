"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Trees, Users, Heart, Music } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 tracking-tight">
              Slotsengen er rykket ud<br />mellem træerne
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Velkommen til Mellem Træerne i Dronningedalen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/billetter">Køb billetter</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link href="/mellem-traerne">Læs mere</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Mellem Træerne */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Hvorfor mellem træerne?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Da Slotsengens Musik flyttede fra slotsengen til skoven i Dronningedalen, 
                skete der noget særligt. Og det, der skete mellem koncerterne, blev lige så vigtigt som musikken selv.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mellem Træerne handler om det, der sker mellem koncerterne. Mellem mennesker. 
                Mellem venner og bekendte. Det er her, fællesskabet vokser.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Trees className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Naturen</h3>
                  <p className="text-muted-foreground">
                    Skoven giver ro og rum til at være til stede
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Music className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Musikken</h3>
                  <p className="text-muted-foreground">
                    Kunstnere der skaber oplevelser, ikke bare koncerter
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Fællesskabet</h3>
                  <p className="text-muted-foreground">
                    Lokale mennesker der bygger noget sammen
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Medskabelse</h3>
                  <p className="text-muted-foreground">
                    Alle er velkomne til at være en del af oplevelsen
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vil du være med til at skabe magien?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Hver festival skabes af frivillige, der brænder for musik, fællesskab og naturen. 
              Bliv en del af holdet.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/frivillige">Bliv frivillig</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
