"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Add JSON-LD schema for Event
    const schema = {
      "@context": "https://schema.org",
      "@type": "MusicEvent",
      name: "Mellem Træerne Festival 2027",
      description:
        "En unik musikfestival i Dronningedalen ved Løgumkloster, Sønderjylland med live musik, koncerter og fællesskab",
      startDate: "2027-05-29T12:00:00+02:00",
      endDate: "2027-05-29T23:59:00+02:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Dronningedalen",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Løgumkloster",
          addressRegion: "Sønderjylland",
          addressCountry: "DK",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Mellem Træerne",
        url: "https://mellemtraerne.dk",
      },
      offers: {
        "@type": "Offer",
        url: "https://mellemtraerne.dk/billetter",
        price: "349",
        priceCurrency: "DKK",
        availability: "https://schema.org/InStock",
        validFrom: "2026-09-01T00:00:00+02:00",
      },
      performer: [
        { "@type": "MusicGroup", name: "Rasmus Skøtt" },
        { "@type": "MusicGroup", name: "We are the 90's" },
        { "@type": "MusicGroup", name: "Von Quar" },
        { "@type": "MusicGroup", name: "Zaymie" },
        { "@type": "MusicGroup", name: "Zididada" },
        { "@type": "MusicGroup", name: "Beinir" },
        { "@type": "MusicGroup", name: "Pauline" },
        { "@type": "MusicGroup", name: "MD Duo" },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/6062464.jpg"
              alt="Mellem Træerne Festival live koncert"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              Tak for 2026!
              <br />
              Glæd jer til{" "}
              <span className="text-yellow-400">29. maj 2027</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Billetter til 349 kr. • Køb nu
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <Link href="/billetter">Køb billetter</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg"
              >
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
                Sommerfestival i Sønderjylland med unik atmosfære
              </h2>

              <p className="text-lg leading-relaxed opacity-90">
                Tak for en fantastisk festival i 2026! Vi glæder os til at se
                jer igen til Mellem Træerne 2027. Køb dine billetter nu til kun
                349 kr. Oplev igen live musik og fællesskab i de smukke
                omgivelser i Dronningedalen ved Løgumkloster.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Bliv frivillig til Sønderjyllands hyggeligste festival
            </h3>

            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Vores musikfestival i Løgumkloster skabes af frivillige, der
              brænder for live musik, kulturarrangementer og fællesskab i
              Sønderjylland. Bliv en del af holdet bag festivalen.
            </p>

            <Button
              asChild
              size="lg"
              className="text-lg bg-foreground text-background hover:bg-foreground/90"
            >
              <Link href="/frivillige">Bliv frivillig</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
