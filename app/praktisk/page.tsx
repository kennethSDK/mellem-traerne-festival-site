import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Ticket, Heart, Ban, Flame, Dog, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Praktisk Info | Mellem Træerne Festival 2026 - Musikfestival Løgumkloster",
  description: "Praktisk information om Mellem Træerne Festival 2026 i Løgumkloster, Sønderjylland. Find svar på spørgsmål om parkering, mad, regler, sikkerhed og meget mere til musikfestivalen.",
  keywords: [
    "festival information Sønderjylland",
    "praktisk info musikfestival",
    "Løgumkloster festival guide",
    "festival regler Danmark",
    "parkering Mellem Træerne",
    "mad på festival Sønderjylland"
  ],
  openGraph: {
    title: "Praktisk Info | Mellem Træerne Festival 2026",
    description: "Praktisk information om Mellem Træerne Festival 2026 i Løgumkloster, Sønderjylland. Find svar på alle dine spørgsmål om festivalen.",
    type: "website",
    locale: "da_DK",
    url: "https://mellemtraerne.dk/praktisk",
  },
  alternates: {
    canonical: "https://mellemtraerne.dk/praktisk",
  },
};

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
                Praktisk Information - Musikfestival i Løgumkloster
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Alt du skal vide om Mellem Træerne Festival i Sønderjylland
              </p>
            </div>
          </div>
        </section>

        {/* Sikkerhed Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Sikkerhed på Festivalen i Sønderjylland
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
                Festivalregler for Mellem Træerne
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
                Ofte Stillede Spørgsmål om Festivalen
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-0" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Hvad er Mellem Træerne Festival?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Mellem Træerne er en musikfestival i Sønderjylland, der afholdes i Dronningedalen ved Løgumkloster. 
                    Vi tilbyder en dag fyldt med live musik, koncerter og kulturarrangementer i naturskønne omgivelser. 
                    Festivalen er kendt for sin unikke atmosfære, hvor publikum oplever musik mellem træerne.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-00" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Hvornår afholdes musikfestivalen i Sønderjylland?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Mellem Træerne Festival 2026 afholdes lørdag d. 6. juni 2026 fra kl. 12:00 til 23:59 
                    i Dronningedalen ved Løgumkloster, Sønderjylland.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-000" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Hvor finder jeg festivalen i Løgumkloster?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Festivalen finder sted i Dronningedalen ved Løgumkloster i Sønderjylland. 
                    Det er et naturskønt område med skov og træer, der skaber den perfekte ramme for vores sommerfestival. 
                    Der er parkering ved indgangen til Sparekasseskoven.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Kan jeg parkere i nærheden af festivalpladsen?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Ja, der er parkering ved indgangen til Sparekasseskoven i Løgumkloster, 
                    som ligger tæt på festivalområdet i Dronningedalen.
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
                    Må jeg medbringe mad og drikkevarer til festivalen?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Det er ikke tilladt at medbringe egen mad og drikke på festivalpladsen. 
                    Vi har et stort udvalg af mad og drikkevarer til salg.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Hvilken mad kan jeg købe på musikfestivalen?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Vi har et større udvalg af foodtrucks på festivalpladsen i Sønderjylland. 
                    Du kan få alt fra burger, hotdogs og gyros til asiatisk og mexicanske madretter. 
                    Alle boder er åbne under hele arrangementet, så du kan nyde god mad mellem koncerterne.
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
                    Er der andre oplevelser i Sønderjylland samme weekend?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Mellem Træerne er en af de største kulturarrangementer i Sønderjylland i juni måned. 
                    Området omkring Løgumkloster byder på mange andre oplevelser, herunder historiske seværdigheder, 
                    naturområder og lokale attraktioner. Festivalen er en perfekt anledning til at udforske regionen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Hvad koster billetter til festivalen?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Billetpriser og information om køb af billetter finder du på vores billetside. 
                    Vi tilbyder forskellige billettyper til vores sommerfestival i Sønderjylland.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Er festivalen familievenlig?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Ja, Mellem Træerne er en familievenlig musikfestival i Sønderjylland. 
                    Vi skaber en tryg og hyggelig atmosfære, hvor hele familien kan nyde live musik 
                    og kulturarrangementer i naturskønne omgivelser ved Løgumkloster.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    Pressehenvendelser
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Er du fra pressen og vil i kontakt med os om musikfestivalen i Sønderjylland?
                    <br />
                    Kontakt os på mail: <a href="Kenneth@slotsengensmusik.dk" className="text-primary hover:underline">Kenneth@slotsengensmusik.dk</a>
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
