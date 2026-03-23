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
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Da Slotsengens Musik flyttede fra den åbne slotsengen til skoven i Dronningedalen, 
                  skete der noget uventet og smukt.
                </p>
                <p>
                  Træerne skabte rum. det blev utroligt hyggeligt, mellem koncerterne, mellem naboer, mellem venner, mellem træerne.
                </p>
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
