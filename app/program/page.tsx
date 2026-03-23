"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

const schedule = [
  {
    time: "12:00",
    artist: "DJ",
    duration: "30 min",
    description: "Opvarmning med DJ",
  },
  {
    time: "12:30",
    artist: "Surprise",
    duration: "30 min",
    description: "Surprise optræden",
  },
  {
    time: "13:00",
    artist: "MD Duo",
    duration: "75 min",
    description: "MD Duo live",
  },
  {
    time: "14:30",
    artist: "Pauline",
    duration: "60 min",
    description: "Pauline live",
  },
  {
    time: "15:45",
    artist: "Beinir",
    duration: "60 min",
    description: "Beinir live",
  },
  {
    time: "16:45",
    artist: "DJ Battle (DJ Hartkopff vs. Jannick)",
    duration: "45 min",
    description: "DJ Battle mellem DJ Hartkopff og Jannick",
  },
  {
    time: "17:45",
    artist: "Zididada",
    duration: "45 min",
    description: "Zididada live",
  },
  {
    time: "18:45",
    artist: "Zaymie",
    duration: "60 min",
    description: "Zaymie live",
  },
  {
    time: "20:00",
    artist: "Von Quar",
    duration: "60 min",
    description: "Von Quar live",
  },
  {
    time: "21:15",
    artist: "We are the 90's",
    duration: "75 min",
    description: "We are the 90's live",
  },
  {
    time: "22:45",
    artist: "Rasmus Skøtt",
    duration: "90 min",
    description: "Rasmus Skøtt afslutter festivalen",
  },
];

export default function ProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Program
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                En dag Mellem Træerne med musik, fællesskab og tid til at være til stede
              </p>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Dato & Tid</h3>
                        <p className="text-muted-foreground">
                          Lørdag d. 6. juni 2026<br />
                          Kl. 12:00 - 23:59
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Sted</h3>
                        <p className="text-muted-foreground">
                          Dronningedalen<br />
                          Løgumkloster
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                Dagens program
              </h2>
              
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-xl">{item.artist}</CardTitle>
                        <span className="text-lg font-semibold text-primary flex-shrink-0">
                          {item.time}
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Note Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Mellem Træerne er mere end koncerter
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pauserne er ikke tomme mellemrum. De er fyldt med snak, hygge, fællesskab. Det er her, magien sker.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
