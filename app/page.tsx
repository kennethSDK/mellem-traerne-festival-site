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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Slotsengen er rykket ud<br />Mellem <span className="text-primary">Træerne</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Velkommen til Mellem Træerne i Dronningedalen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/billetter">Køb billetter</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link href="/mellem-traerne">Læs mere</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Mellem Træerne */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hvorfor Mellem Træerne?
              </h2>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                Da Slotsengens Musik flyttede fra slotsengen til skoven i Dronningedalen, 
                skete der noget særligt. Og det, der skete mellem koncerterne, blev lige så vigtigt som musikken selv.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Mellem Træerne handler om det, der sker mellem koncerterne. Mellem mennesker. 
                Mellem venner og bekendte. Det er her, fællesskabet vokser.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vil du være med til at skabe magien?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Hver festival skabes af frivillige, der brænder for musik, fællesskab og naturen. 
              Bliv en del af holdet.
            </p>
            <Button asChild size="lg" className="text-lg bg-foreground text-background hover:bg-foreground/90">
              <Link href="/frivillige">Bliv frivillig</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
