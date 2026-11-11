import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Køb Billetter | Mellem Træerne Festival 2027 - Musikfestival Sønderjylland",
  description: "Køb billetter til Mellem Træerne Festival 2027 i Løgumkloster. Sikr dig en plads til Sønderjyllands hyggeligste musikfestival d. 29. maj 2027.",
  keywords: [
    "køb billetter Mellem Træerne",
    "festival billetter Sønderjylland",
    "Løgumkloster festival billetter",
    "musikfestival billetter Danmark",
    "koncert billetter Sønderjylland",
    "festival 2027 billetter"
  ],
  openGraph: {
    title: "Køb Billetter | Mellem Træerne Festival 2027",
    description: "Køb billetter til Mellem Træerne Festival 2027 i Løgumkloster. Sikr dig en plads til Sønderjyllands hyggeligste musikfestival d. 29. maj 2027.",
    type: "website",
    locale: "da_DK",
    url: "https://mellemtraerne.dk/billetter",
  },
  alternates: {
    canonical: "https://mellemtraerne.dk/billetter",
  },
};

type TicketFeature = {
  text: string;
  icon: boolean;
};

type TicketType = {
  name: string;
  price: string;
  description: string;
  features: TicketFeature[];
  // Price benefits that belong to another ticket, shown under that ticket's name
  otherTicketBenefits?: {
    ticketName: string;
    features: TicketFeature[];
  };
  highlighted: boolean;
  expired: boolean;
  comingSoon: boolean;
};

const ticketTypes: TicketType[] = [
  {
    name: "Early Bird",
    price: "249 kr.",
    description: "Udsolgt - tilbuddet er udløbet",
    features: [
      { text: "Adgang til hele festivalen", icon: true },
      { text: "Alle koncerter", icon: true },
      { text: "Billigste pris", icon: true },
      { text: "Spar over 100 kr.", icon: true },
    ],
    highlighted: false,
    expired: true,
    comingSoon: false,
  },
  {
    name: "Normal pris",
    price: "349 kr.",
    description: "Tilgængelig nu",
    features: [
      { text: "Adgang til hele festivalen", icon: false },
      { text: "Alle koncerter", icon: true },
    ],
    otherTicketBenefits: {
      ticketName: "Early Bird",
      features: [
        { text: "Billigste pris", icon: true },
        { text: "Spar over 100 kr.", icon: true },
      ],
    },
    highlighted: true,
    expired: false,
    comingSoon: false,
  },
];

function FeatureItem({ feature }: { feature: TicketFeature }) {
  return (
    <li className="flex items-start gap-2">
      {feature.icon ? (
        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
      ) : (
        <span className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
      )}
      <span className="text-sm text-muted-foreground">{feature.text}</span>
    </li>
  );
}

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
                Billetter til 2027
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Køb dine billetter til Mellem Træerne Festival 2027 - kun 349 kr.
              </p>
            </div>
          </div>
        </section>

        {/* Ticket Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ticketTypes.map((ticket, index) => (
                <Card 
                  key={index} 
                  className={`relative ${
                    ticket.highlighted 
                      ? "border-2 border-primary shadow-lg scale-105" 
                      : ticket.expired
                      ? "border-2 opacity-60"
                      : ticket.comingSoon
                      ? "border-2 opacity-75"
                      : "border-2"
                  }`}
                >
                  {ticket.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Tilgængelig nu!
                    </div>
                  )}
                  {ticket.expired && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-muted text-muted-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Udsolgt
                    </div>
                  )}
                  {ticket.comingSoon && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-muted text-muted-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Kommer snart
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
                        <FeatureItem key={featureIndex} feature={feature} />
                      ))}
                    </ul>
                    {ticket.otherTicketBenefits && (
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-foreground mb-3">
                          {ticket.otherTicketBenefits.ticketName}
                        </p>
                        <ul className="space-y-3">
                          {ticket.otherTicketBenefits.features.map((feature, featureIndex) => (
                            <FeatureItem key={featureIndex} feature={feature} />
                          ))}
                        </ul>
                      </div>
                    )}
                    <Button 
                      className="w-full" 
                      variant={ticket.highlighted ? "default" : "outline"}
                      disabled={ticket.expired || ticket.comingSoon}
                      asChild={!ticket.expired && !ticket.comingSoon}
                    >
                      {ticket.expired ? (
                        "Udsolgt"
                      ) : ticket.comingSoon ? (
                        "Kommer snart"
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
              Glæd jer til Mellem Træerne 2027
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tak for en fantastisk festival i 2026! Køb dine billetter til 2027 nu 
              til kun 349 kr. Vi ses 29. maj 2027!
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
