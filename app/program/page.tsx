import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Program 2027 | Mellem Træerne Festival - Koncerter i Sønderjylland",
  description: "Programmet for Mellem Træerne Festival 2027 i Løgumkloster offentliggøres her på siden. Glæd dig til live musik i Dronningedalen.",
  keywords: [
    "festival program Sønderjylland",
    "koncerter Løgumkloster 2027",
    "live musik program",
    "Mellem Træerne program",
    "musikfestival 2027",
  ],
  openGraph: {
    title: "Program 2027 | Mellem Træerne Festival - Koncerter i Sønderjylland",
    description: "Programmet for Mellem Træerne Festival 2027 i Løgumkloster offentliggøres her på siden.",
    type: "website",
    locale: "da_DK",
    url: "https://mellemtraerne.dk/program",
  },
  alternates: {
    canonical: "https://mellemtraerne.dk/program",
  },
};

export default function ProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Program
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Glæd dig til programmet for Mellem Træerne 2027. Vi offentliggør det her på siden.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
