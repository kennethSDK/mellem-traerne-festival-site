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
                Vil du være medskaber af magien mellem træerne?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mellem træerne er en festival der bygges af frivillige, der brænder for musik, fællesskab og det særlige, der opstår, når mennesker mødes i skoven.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tilmeld dig som frivillig</CardTitle>
                  <CardDescription>
                    Udfyld formularen nedenfor, så vender vi tilbage til dig med mere information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Navn *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dit fulde navn"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="din@email.dk"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefonnummer *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+45 12 34 56 78"
                          required
                        />
                      </div>
                    </div>

                    {/* Roles Selection */}
                    <div className="space-y-4">
                      <Label>Hvad interesserer dig? *</Label>
                      <p className="text-sm text-muted-foreground">
                        Vælg de områder, hvor du kunne tænke dig at bidrage
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {roles.map((role) => {
                          const Icon = role.icon;
                          const isSelected = formData.roles.includes(role.id);
                          return (
                            <button
                              key={role.id}
                              type="button"
                              onClick={() => handleRoleToggle(role.id)}
                              className={`p-4 rounded-lg border-2 transition-all text-center ${
                                isSelected
                                  ? "border-primary bg-primary/10"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <Icon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                              <span className={`text-sm font-medium ${isSelected ? "text-primary" : "text-foreground"}`}>
                                {role.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Motivation */}
                    <div className="space-y-4">
                      <Label htmlFor="motivation">Hvad driver dig?</Label>
                      <p className="text-sm text-muted-foreground">
                        Fortæl os kort, hvorfor du gerne vil være frivillig ved Mellem Træerne
                      </p>
                      <Textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                        placeholder="Jeg vil gerne være frivillig fordi..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sender..." : "Send tilmelding"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
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
                </p>
                <p>
                  Og så er du en del af et fællesskab. Du møder andre, der brænder for det samme. 
                  Vi bygger noget sammen. Vi deler måltider, historier og øjeblikke mellem træerne.
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
