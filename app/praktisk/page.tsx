"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Ticket, Heart, MapPin, Utensils, AlertTriangle, Ban, Flame, Dog, Mail } from "lucide-react";

export default function PraktiskPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                FAQ
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ofte stillede spørgsmål
              </p>
            </div>
          </div>
        </section>

        {/* Sikkerhed Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Sikkerhed
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <Ticket className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Billetten</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      Det er vigtig at du medbringer din billet på mobil eller udprintet da billetten skal scannes i døren.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <Heart className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Førstehjælp</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      Der er et veluddannet førstehjælpskorps til stede under hele arrangementet. Har du brug for hjælp, kan du henvende dig til vagterne.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <Shield className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Vagter</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      Vagterne står klar til at hjælpe og de er her for at passe på dig – sker der noget, eller er der nogen, der har akut brug for hjælp, bedes du henvende dig hurtigst muligt til vores vagter eller sikkerhedsansvarlige.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-destructive">
                  <CardHeader>
                    <Heart className="w-8 h-8 text-destructive mb-2" />
                    <CardTitle>Moshpit</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      Moshpit samt alt andet skubben og masen foran scenen er forbudt og kan medføre bortvisning. Vi skal passe på hinanden.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Regler Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Regler
              </h2>
              <div className="space-y-6">
                <Card className="border-2 border-destructive">
                  <CardHeader>
                    <Ban className="w-8 h-8 text-destructive mb-2" />
                    <CardTitle>Borde, pavilloner m.m.</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      Det er ikke tilladt at medbringe borde, pavilloner eller lignende. Du må ej heller ikke medbringe flag, vimpler, bannere eller lignende.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-destructive">
                  <CardHeader>
                    <Flame className="w-8 h-8 text-destructive mb-2" />
                    <CardTitle>Grill & brug af åben ild</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      Der må ikke medbringes grill eller lignende på koncertpladsen. Brug af åben ild er ikke tilladt.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-destructive">
                  <CardHeader>
                    <AlertTriangle className="w-8 h-8 text-destructive mb-2" />
                    <CardTitle>Narkotika</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      Der er nultolerance over for narkotika af enhver art. Handel med og besiddelse af narkotika medfører omgående bortvisning samt politianmeldelse.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-destructive">
                  <CardHeader>
                    <AlertTriangle className="w-8 h-8 text-destructive mb-2" />
                    <CardTitle>Våben</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      Det er ikke tilladt at medbringe nogen form for våben på pladsen. Overtrædelse af dette vil medføre omgående bortvisning samt politianmeldelse.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-destructive">
                  <CardHeader>
                    <Dog className="w-8 h-8 text-destructive mb-2" />
                    <CardTitle>Dyr</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      Det er ikke tilladt at medbringe dyr på koncertpladsen.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Ofte stillede spørgsmål
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Kan jeg parkere i nærheden af Slotsengen?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Der er parkering ved indgangen til Sparekasseskoven.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Må jeg tage en festivalstol med?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Vi har borde + bænke til ca. 700 mennesker, men vi kan ikke love der er siddepladser til alle. I er derfor velkommen til at medbringe festivalstole eller tæpper til at sidde på.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Må jeg medbringe mad og drikkevarer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Det er ikke tilladt at medbringe egen mad og drikke på pladsen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Kan jeg få noget at spise?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Vi har et større udvalg af foodtrucks på pladsen, så der er god mulighed for at få stillet sulten. Alt lige fra burger, hotdogs, gyros til asiatisk og mexicanske madretter vil være at finde på pladsen. Det vil være muligt at benytte disse boder under hele arrangementet.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Hvilke betalingsformer er gyldige?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Vi modtager betalingskort i alle boder samt indgang. Det gælder Dankort, Visa og Mastercard. Det gælder også betalingskort på mobilen eller smartwatch. Vi modtager naturligvis også kontanter.
                    <br /><br />
                    Vi har desværre ikke mulighed for at tilbyde mobilepay betalingsløsning.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Er der en garderobe?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Der er ingen garderobe, du er derfor selv ansvarlig for opbevaring af dine medbragte ting.
                    <br /><br />
                    Ved forsvundet genstande, bedes der tages kontakt til vagterne på dagen, hvorefter vi vil forsøge at finde disse.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Glemte sager?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Glemte sager kan afhentes hos Klosterbiler i Løgumkloster ugen efter arrangement. Glemte sager doneres til genbrug, hvis det ikke er afhentet indenfor 7 dage efter arrangement dato.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Pressehenvendelser
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Er du fra pressen og vil i kontakt med os?
                    <br />
                    Kontakt os på mail: <a href="mailto:slotsengensmusik@gmail.com" className="text-primary hover:underline">slotsengensmusik@gmail.com</a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
