import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { SponsorForm } from "@/components/sponsor/SponsorForm";
import { cn } from "@/lib/utils";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const SITE_URL = "https://xn--mellemtrerne-edb.dk";
const PAGE_URL = `${SITE_URL}/sponsor`;
const DESCRIPTION =
  "Støt Mellem Træerne – en 100 % frivilligdrevet musikfestival i Løgumkloster. Vær med til at skabe musikoplevelser, fællesskab og muligheder for unge i Tønder Kommune. Tag en uforpligtende snak om sponsorat.";

export const metadata: Metadata = {
  title: "Bliv sponsor | Mellem Træerne i Løgumkloster",
  description: DESCRIPTION,
  keywords: [
    "sponsor festival Sønderjylland",
    "sponsorat Løgumkloster",
    "lokal sponsor Tønder Kommune",
    "Mellem Træerne sponsor",
    "støt frivillig festival",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Bliv sponsor | Mellem Træerne i Løgumkloster",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "da_DK",
    siteName: "Mellem Træerne Festival",
    images: [
      {
        url: `${SITE_URL}/images/sponsor/og-sponsor.jpg`,
        width: 1200,
        height: 630,
        alt: "Band på scenen ved Mellem Træerne med konfetti og publikum foran scenen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bliv sponsor | Mellem Træerne i Løgumkloster",
    description: DESCRIPTION,
    images: [`${SITE_URL}/images/sponsor/og-sponsor.jpg`],
  },
};

/* ------------------------------------------------------------------ */
/* Indhold                                                             */
/* ------------------------------------------------------------------ */

const BENEFITS = [
  {
    title: "En konkret fortælling om jeres lokale engagement",
    text: "Vis medarbejdere, kunder og samarbejdspartnere, hvad jeres virksomhed bakker op om: frivillighed, unge og musik i lokalområdet.",
  },
  {
    title: "Synlighed med lokal relevans",
    text: "Vi kan tale om, hvordan jeres virksomhed bliver synlig i vores markedsføring af festivalen, og hvilke muligheder der passer til jer.",
  },
  {
    title: "En fælles oplevelse",
    text: "Festivalen kan være en anledning til at samle medarbejdere eller invitere kunder til en lokal musikoplevelse. Muligheder og eventuelle billetter aftaler vi sammen.",
  },
];

const INITIATIVES: { title: string; text: string; extra?: { lead: string; text: string } }[] = [
  {
    title: "En hjertestarter – et konkret bidrag til tryghed",
    text: "Vi har opsat en hjertestarter. Et konkret eksempel på, at engagementet omkring festivalen også kan føre til noget, der rækker ud over musikken.",
  },
  {
    title: "Eventmanagement i samarbejde med højskolen",
    text: "Sammen med Løgumkloster Højskole har vi opstartet en eventmanagementlinje. Samarbejdet forbinder undervisning med festivalen og bidrager til at gøre Løgumkloster kendt blandt eleverne og deres venner, når de deltager.",
  },
  {
    title: "Unge får ansvar og en plads i fællesskabet",
    text: "Vi engagerer unge som frivillige og giver dem mulighed for at tage ansvar, få erfaring og være med til at skabe noget sammen med andre.",
  },
  {
    title: "Plads til etablerede musikere og nye talenter",
    text: "Vi tiltrækker etablerede musikere og skaber samtidig en platform for talentudvikling. Publikum får mulighed for både at opleve kendte navne og opdage nye.",
  },
  {
    title: "En festival, der samler på tværs af kommunen",
    text: "Tønder Kommune støtter Mellem Træerne i arbejdet med at styrke sammenhængskraften i kommunen. Blandt tiltagene er busruter på tværs af kommunen, der skal gøre det lettere at mødes om festivalen i Løgumkloster.",
    extra: {
      lead: "Formålet med busserne",
      text: "Det skal være let at komme til Mellem Træerne fra hele Tønder Kommune – også uden egen bil. Målet er, at festivalen bliver et sted, hvor folk fra forskellige dele af kommunen mødes.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Små byggeklodser                                                    */
/* ------------------------------------------------------------------ */

const NBSP_100 = "100\u00A0%";

const amberButton =
  "inline-flex h-14 w-full items-center justify-center rounded-md bg-secondary px-8 text-base font-semibold text-forest-deep transition-colors hover:bg-[hsl(38_91%_62%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto";

/** Sæt decorative, når navnet "Mellem Træerne" allerede står ved siden af logoet. */
function Logo({ className, decorative = false }: { className?: string; decorative?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/sponsor/logo-240.webp"
      alt={decorative ? "" : "Mellem Træerne Festival"}
      width={240}
      height={265}
      className={cn("h-10 w-auto", className)}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Side                                                                */
/* ------------------------------------------------------------------ */

export default function SponsorPage() {
  return (
    <div
      className={cn(
        display.variable,
        "flex min-h-screen flex-col bg-cream text-forest-deep antialiased",
      )}
    >
      <a
        href="#indhold"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-forest focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-forest"
      >
        Spring til indhold
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-forest-deep/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            href="/"
            className="-m-1 flex items-center gap-3 rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <Logo decorative />
            <span className="font-display text-xl font-semibold tracking-tight">Mellem Træerne</span>
            <span className="sr-only">– til festivalens forside</span>
          </Link>
          <a
            href="#kontakt"
            className="inline-flex h-11 items-center rounded-md bg-forest px-4 text-sm font-semibold text-white transition-colors hover:bg-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:px-5"
          >
            <span className="sm:hidden">Kontakt</span>
            <span className="hidden sm:inline">Tag en snak om sponsorat</span>
          </a>
        </div>
      </header>

      <main id="indhold" className="flex-1">
        {/* 1. Hero */}
        <section
          aria-labelledby="hero-titel"
          className="relative isolate overflow-hidden bg-forest-deep text-white"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
              src="/images/sponsor/hero-1280.webp"
              srcSet="/images/sponsor/hero-800.webp 800w, /images/sponsor/hero-1280.webp 1280w, /images/sponsor/hero-1920.webp 1920w"
              sizes="100vw"
              alt="Et band i røde trøjer spiller på scenen ved Mellem Træerne, mens konfetti og flammer fylder luften og publikum rækker hænderne i vejret."
              width={1280}
              height={960}
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-[55%_40%]"
            />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(8,16,9,0.94)_0%,rgba(8,16,9,0.7)_45%,rgba(8,16,9,0.15)_100%)]"
          />

          <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-end px-5 pb-8 pt-40 sm:px-8 md:min-h-[min(calc(100svh-4rem),820px)] md:pb-12">
            <p className="text-sm font-semibold text-secondary sm:text-base">
              Bliv sponsor for Mellem Træerne
            </p>
            <h1
              id="hero-titel"
              className="mt-3 max-w-4xl text-balance font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.015em] sm:text-6xl lg:text-[5.25rem]"
            >
              Giv Løgumkloster noget at samles om.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
              Som sponsor for Mellem Træerne er din virksomhed med til at skabe musikoplevelser,
              fællesskab og muligheder for unge. Vi er {NBSP_100} frivilligdrevne og arbejder for at
              samle mennesker i Løgumkloster og på tværs af Tønder Kommune.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="#kontakt"
                className={cn(
                  amberButton,
                  "focus-visible:ring-white focus-visible:ring-offset-forest-deep",
                )}
              >
                Tag en snak om sponsorat
              </a>
              <a
                href="#initiativer"
                className="inline-flex h-12 items-center justify-center rounded-md px-1 text-base font-semibold text-white underline decoration-white/40 underline-offset-[6px] hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:justify-start"
              >
                Se, hvad vi har skabt
              </a>
            </div>

            <div className="mt-12 flex flex-col gap-1 border-t border-white/20 pt-5 text-sm text-white/75 sm:flex-row sm:justify-between sm:text-base">
              <span>{NBSP_100} frivilligdrevet</span>
              <span>
                Løgumkloster · <time dateTime="2027-05-29">29. maj 2027</time>
              </span>
            </div>
          </div>
        </section>

        {/* 2. Samarbejde */}
        <section aria-labelledby="samarbejde-titel" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-primary">Samarbejde</p>
              <h2
                id="samarbejde-titel"
                className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.01em] sm:text-5xl"
              >
                Lad os finde jeres måde at være med på.
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-forest-deep/75">
                Vi vil gerne tale med virksomheder, der har lyst til at støtte Mellem Træerne.
                Sammen kan vi undersøge, hvordan et samarbejde kan give mening for begge parter.
              </p>
              <div className="mt-8">
                <a
                  href="#kontakt"
                  className={cn(amberButton, "focus-visible:ring-forest focus-visible:ring-offset-cream")}
                >
                  Tag en snak om sponsorat
                </a>
                <p className="mt-3 text-sm text-forest-deep/65">
                  Indhold og en eventuel synlighed aftaler vi sammen.
                </p>
              </div>
            </div>

            <ul className="border-t border-forest-deep/15 lg:col-span-7" role="list">
              {BENEFITS.map((benefit) => (
                <li key={benefit.title} className="border-b border-forest-deep/15 py-7 sm:py-9">
                  <h3 className="text-balance font-display text-2xl font-semibold leading-snug sm:text-[1.75rem]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-pretty text-lg leading-relaxed text-forest-deep/75">
                    {benefit.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Initiativer */}
        <section
          id="initiativer"
          aria-labelledby="initiativer-titel"
          className="scroll-mt-16 bg-white py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary">Det, vi har sat i gang</p>
              <h2
                id="initiativer-titel"
                className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.01em] sm:text-5xl"
              >
                Det begynder med musik. Det vokser med fællesskabet.
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-forest-deep/75">
                Mellem Træerne handler også om det, vi kan skabe sammen omkring festivalen. Her er
                nogle af de initiativer, vores engagement allerede har ført til.
              </p>
            </div>

            {/* Festen – med foto og tal */}
            <article className="mt-14 grid gap-8 sm:mt-16 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/sponsor/publikum-1100.webp"
                  alt="Publikum rækker armene i vejret foran scenen, hvor et band i røde trøjer spiller under konfetti og flammer."
                  width={1100}
                  height={756}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                />
              </div>
              <div className="lg:col-span-5 lg:pb-2">
                <p className="text-forest">
                  <span className="block text-base font-semibold">Op til</span>
                  <span className="block font-display text-7xl font-semibold leading-none tracking-[-0.03em] sm:text-8xl">
                    1.000
                  </span>
                  <span className="mt-1 block text-xl font-semibold">lokale gæster</span>
                </p>
                <h3 className="mt-8 text-balance font-display text-2xl font-semibold leading-snug sm:text-[1.75rem]">
                  En fest med store musikoplevelser
                </h3>
                <p className="mt-3 text-pretty text-lg leading-relaxed text-forest-deep/75">
                  Vi har skabt en fest med store musikoplevelser for op til 1.000 lokale gæster.
                </p>
              </div>
            </article>

            <ul className="mt-16 border-t border-forest-deep/15 sm:mt-20" role="list">
              {INITIATIVES.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-3 border-b border-forest-deep/15 py-8 md:grid-cols-12 md:gap-10 md:py-10"
                >
                  <h3 className="text-balance font-display text-2xl font-semibold leading-snug md:col-span-5">
                    {item.title}
                  </h3>
                  <div className="md:col-span-7">
                    <p className="text-pretty text-lg leading-relaxed text-forest-deep/75">
                      {item.text}
                    </p>
                    {item.extra && (
                      <p className="mt-4 text-pretty text-lg leading-relaxed text-forest-deep/75">
                        <strong className="font-semibold text-forest-deep">
                          {item.extra.lead}:
                        </strong>{" "}
                        {item.extra.text}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Kontakt */}
        <section
          id="kontakt"
          aria-labelledby="kontakt-titel"
          className="scroll-mt-16 bg-forest py-20 text-white sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2
                id="kontakt-titel"
                className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-[-0.01em] sm:text-5xl"
              >
                Skal jeres virksomhed være med mellem træerne?
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
                Skriv til os og fortæl lidt om jeres virksomhed. Så tager vi en uforpligtende snak om
                mulighederne.
              </p>
            </div>
            <div className="lg:col-span-7">
              <SponsorForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-forest-deep text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <Logo decorative />
            <div className="text-sm">
              <p className="font-display text-lg font-semibold text-white">Mellem Træerne</p>
              <p>Dronningedalen, Løgumkloster</p>
            </div>
          </div>
          <Link
            href="/"
            className="self-start rounded text-sm underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:self-auto"
          >
            Til festivalens forside
          </Link>
        </div>
      </footer>
    </div>
  );
}
