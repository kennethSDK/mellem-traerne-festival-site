import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Køb Billetter | Mellem Træerne Festival 2026 - Musikfestival Sønderjylland",
  description: "Køb billetter til Mellem Træerne Festival 2026 i Løgumkloster. Sikr dig en plads til Sønderjyllands hyggeligste musikfestival d. 6. juni. Billetter fra 375 kr.",
  keywords: [
    "køb billetter Mellem Træerne",
    "festival billetter Sønderjylland",
    "Løgumkloster festival billetter",
    "musikfestival billetter Danmark",
    "koncert billetter Sønderjylland",
    "festival 2026 billetter"
  ],
  openGraph: {
    title: "Køb Billetter | Mellem Træerne Festival 2026",
    description: "Køb billetter til Mellem Træerne Festival 2026 i Løgumkloster. Sikr dig en plads til Sønderjyllands hyggeligste musikfestival d. 6. juni.",
    type: "website",
    locale: "da_DK",
    url: "https://mellemtraerne.dk/billetter",
  },
  alternates: {
    canonical: "https://mellemtraerne.dk/billetter",
  },
};

const ticketTypes = [
  {
    name: "Early Bird 1",
    price: "225 kr.",
    description: "Sluttede 1. december",
    features: [
      "Adgang til hele festivalen",
      "Alle koncerter",
      "Billigste pris",
    ],
    expired: true,
  },
  {
    name: "Early Bird 2",
    price: "275 kr.",
    description: "Sluttede 1. februar",
    features: [
      "Adgang til hele festivalen",
      "Alle koncerter",
      "Spar 100 kr.",
    ],
    expired: true,
  },
  {
    name: "Early Bird 3",
    price: "325 kr.",
    description: "Sluttede 1. april",
    features: [
      "Adgang til hele festivalen",
      "Alle koncerter",
      "Spar 50 kr.",
    ],
    expired: true,
  },
  {
    name: "Normal pris",
    price: "375 kr.",
    description: "Fra 1. april",
    features: [
      "Adgang til hele festivalen",
      "Alle koncerter",
    ],
    highlighted: true,
  },
];

export default function BilletterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Køb Billetter til Musikfestival i Sønderjylland
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sikr dig en plads til Mellem Træerne Festival 2026 i Løgumkloster
              </p>
            </div>
          </div>
        </section>

        {/* Ticket Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {ticketTypes.map((ticket, index) => (
                <Card 
                  key={index} 
                  className={`relative ${
                    ticket.highlighted 
                      ? "border-2 border-primary shadow-lg scale-105" 
                      : ticket.expired
                      ? "border-2 opacity-60"
                      : "border-2"
                  }`}
                >
                  {ticket.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Aktuel pris
                    </div>
                  )}
                  {ticket.expired && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-muted text-muted-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Udsolgt
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{ticket.name}</CardTitle>
                    <CardDescription>{ticket.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-4xl font-bold text-primary">{ticket.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {ticket.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={ticket.highlighted ? "default" : "outline"}
                      disabled={ticket.expired}
                      asChild={!ticket.expired}
                    >
                      {ticket.expired ? (
                        "Udsolgt"
                      ) : (
                        <a href="https://secure.tickster.com/da/3ym95ng6rjttxaf/products" target="_blank" rel="noopener noreferrer">
                          Køb billet
                        </a>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Praktisk Information om Billetkøb
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Billetkøb</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p>
                      Billetter købes online via vores billetportal. Du modtager din billet på email 
                      umiddelbart efter købet.
                    </p>
                    <p>
                      Medbring enten printet billet eller vis billetten på din telefon ved indgangen.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Begrænsede pladser</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      For at bevare den intime atmosfære Mellem Træerne, er der et begrænset antal billetter. 
                      Vi anbefaler, at du køber din billet i god tid.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Oplev Live Musik i Sønderjylland
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Køb din billet til sommerfestivalen i Løgumkloster nu og vær med til at skabe 
              en uforglemmelig dag med koncerter og kulturarrangementer Mellem Træerne
            </p>
            <Button size="lg" className="text-lg" asChild>
              <a href="https://secure.tickster.com/da/3ym95ng6rjttxaf/products" target="_blank" rel="noopener noreferrer">
                Køb billetter nu
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
