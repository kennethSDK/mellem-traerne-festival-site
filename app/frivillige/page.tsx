"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Hammer, Coffee, Music2, Users2, Sparkles, Heart, CheckCircle2 } from "lucide-react";

const roles = [
  { id: "opsaetning-torsdag", label: "Opsætning Torsdag 4 juni", icon: Hammer },
  { id: "opsaetning-fredag", label: "Opsætning Fredag 5 juni", icon: Hammer },
  { id: "bar", label: "Bar 6 juni", icon: Coffee },
  { id: "oprydning", label: "Oprydning 7 juni", icon: Sparkles },
];

export default function VolunteersPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roles: [] as string[],
    motivation: "",
  });

  const handleRoleToggle = (roleId: string) => {
    setFormData((prev) => ({
      ...prev,
      roles: prev.roles.includes(roleId)
        ? prev.roles.filter((r) => r !== roleId)
        : [...prev.roles, roleId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Manglende information",
        description: "Udfyld venligst alle felter",
        variant: "destructive",
      });
      return;
    }

    if (formData.roles.length === 0) {
      toast({
        title: "Vælg mindst ét område",
        description: "Vælg venligst mindst ét interesseområde",
        variant: "destructive",
      });
      return;
    }

    // Create email body
    const selectedRoles = formData.roles
      .map(roleId => roles.find(r => r.id === roleId)?.label)
      .filter(Boolean)
      .join(", ");

    const emailBody = `Navn: ${formData.name}%0D%0A` +
      `Email: ${formData.email}%0D%0A` +
      `Telefon: ${formData.phone}%0D%0A` +
      `Interesseområder: ${selectedRoles}%0D%0A%0D%0A` +
      `Motivation:%0D%0A${formData.motivation || "Ikke angivet"}`;

    const mailtoLink = `mailto:info@slotsengensmusik.dk?subject=Frivillig tilmelding - ${formData.name}&body=${emailBody}`;
    
    window.location.href = mailtoLink;
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center border-2 border-primary">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl">Velkommen i familien!</CardTitle>
                <CardDescription className="text-lg mt-4">
                  Tak for din tilmelding, {formData.name}. Vi har sendt en bekræftelse til {formData.email}.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Du vil høre nærmere fra os inden festivalen med praktiske informationer 
                  og detaljer om dit frivillige arbejde.
                </p>
                <Button asChild>
                  <a href="/">Tilbage til forsiden</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Vil du være medskaber af magien Mellem Træerne?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mellem Træerne er en festival der bygges af frivillige, der brænder for musik, fællesskab og det særlige, der opstår, når mennesker mødes i skoven.
              </p>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="text-center border-2 border-primary mb-12">
                <CardHeader>
                  <CardTitle className="text-3xl">Tilmeld dig som frivillig</CardTitle>
                  <CardDescription className="text-lg mt-4">
                    Klik på knappen nedenfor for at udfylde tilmeldingsformularen
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Button asChild size="lg" className="text-lg px-8">
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeFucXcykcpeUqAjwK84BDHMYtcRsCmgwdnPWBMLqRfyr4luQ/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tilmeld dig nu
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Frivillige roller
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Vi har brug for hjælp til forskellige opgaver før, under og efter festivalen
              </p>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <Hammer className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Opstilling</CardTitle>
                    <CardDescription className="mt-2">
                      Deltag i vores opstillingsteam, der sætter hegn, borde og bænke op, så alt er klar til den store dag.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Medhjælper opstilling - 4. juni (12.00-18.00)</li>
                      <li>• Medhjælper opstilling - 5. juni (16.00-21.00)</li>
                      <li>• Opstilling af scene - 5. juni (08.00-12.00)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Coffee className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Bar</CardTitle>
                    <CardDescription className="mt-2">
                      Vær en del af vores fantastiske barcrew, der serverer lækre drikkevarer og skaber en god stemning for vores gæster.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Bartender - 6. juni (11.00-18.00)</li>
                      <li>• Bartender - 6. juni (hele dagen)</li>
                      <li>• Bartender - 6. juni (17.30-00.30)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Sparkles className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Nedpakning</CardTitle>
                    <CardDescription className="mt-2">
                      Hjælp med at pakke alt ned, der har været stillet op, så vi kan afslutte arrangementet på en god måde.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Nedpakning af scene - 6. juni (00.00-03.00)</li>
                      <li>• Nedpakning - 7. juni (12.00-17.00)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Hvad betyder det at være frivillig?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At være frivillig ved Mellem Træerne handler ikke om at "hjælpe til".
                  Det handler om at være medskaber af den oplevelse, som gæsterne møder.
                  Og så er du en del af et fællesskab. Du møder andre, der brænder for det samme.
                </p>
                <p>
                  Vi bygger noget sammen. Vi deler måltider, historier og øjeblikke Mellem Træerne.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
