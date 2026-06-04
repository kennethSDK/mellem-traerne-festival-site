import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Om Os | Mellem Træerne Festival - Holdet bag Musikfestivalen",
  description: "Mød holdet bag Mellem Træerne Festival i Løgumkloster, Sønderjylland. Læs om vores mission, værdier og de dedikerede arrangører der skaber musikfestivalen.",
  keywords: [
    "om Mellem Træerne team",
    "festival arrangører Sønderjylland",
    "Løgumkloster festival holdet",
    "musikfestival organisatorer",
    "frivillige arrangører Sønderjylland"
  ],
  openGraph: {
    title: "Om Os | Mellem Træerne Festival",
    description: "Mød holdet bag Mellem Træerne Festival i Løgumkloster, Sønderjylland. Læs om vores mission og værdier.",
    type: "website",
    locale: "da_DK",
    url: "https://mellemtraerne.dk/om-os",
  },
  alternates: {
    canonical: "https://mellemtraerne.dk/om-os",
  },
};

const teamMembers = [
  {
    name: "Jannick",
    email: "jannick@example.com",
    responsibility: "",
    image: "/avatars/shadcn.jpg"
  },
  {
    name: "Jens",
    email: "jens@example.com",
    responsibility: "Hegn og Mad Ansvarlig",
    image: "/avatars/shadcn.jpg"
  },
  {
    name: "Kenneth",
    email: "kenneth@example.com",
    responsibility: "Program Ansvarlig",
    image: "/avatars/shadcn.jpg"
  },
  {
    name: "Martin",
    email: "martin@example.com",
    responsibility: "Sponsorer",
    image: "/avatars/shadcn.jpg"
  },
  {
    name: "Kristoffer",
    email: "kristoffer@example.com",
    responsibility: "Marketing",
    image: "/avatars/shadcn.jpg"
  },
  {
    name: "Jonas",
    email: "jonas@example.com",
    responsibility: "Teknik - Alt uden strøm",
    image: "/avatars/shadcn.jpg"
  },
  {
    name: "Michael",
    email: "michael@example.com",
    responsibility: "Teknik - Alt med strøm",
    image: "/avatars/shadcn.jpg"
  }
];

export default function OmOsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Om Os - Holdet bag Musikfestivalen i Sønderjylland
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mød holdet bag Mellem Træerne Festival i Løgumkloster
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4">Vores Team</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Vi er en gruppe dedikerede arrangører, der arbejder sammen om at skabe 
                  en uforglemmelig festivaloplevelse for alle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                  <Card key={member.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      {/* Image Container */}
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <span className="text-6xl font-bold text-muted-foreground/20">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Info Container */}
                      <div className="p-6 space-y-3">
                        <h3 className="text-2xl font-bold text-primary">
                          {member.name}
                        </h3>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <a 
                              href={`mailto:${member.email}`}
                              className="text-sm text-primary hover:underline"
                            >
                              {member.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-primary text-center">
                Vores Mission
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Mellem Træerne Festival er skabt af og for lokalsamfundet i Løgumkloster 
                  og omegn. Vi tror på, at musik og fællesskab har magten til at bringe 
                  mennesker sammen på tværs af alder, baggrund og interesser.
                </p>
                <p>
                  Vores team består af dedikerede arrangører, der hver især bidrager med 
                  deres unikke kompetencer og passion for at skabe en festival, der er 
                  autentisk, inkluderende og uforglemmelig.
                </p>
              </div>

              <Card className="border-2 border-primary/20 bg-background">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Vores Værdier</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      <span><strong>Fællesskab:</strong> Vi skaber et rum, hvor alle føler sig velkomne</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      <span><strong>Frivillighed:</strong> Drevet af passion og engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      <span><strong>Autenticitet:</strong> Ægte oplevelser i naturskønne omgivelser</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      <span><strong>Bæredygtighed:</strong> Respekt for naturen og vores omgivelser</span>
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
