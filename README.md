# Mellem Træerne - Festival Website

En brand-drevet, community-fokuseret festivalhjemmeside for Slotsengens Musik / Mellem Træerne i Dronningedalen.

## 🌲 Om projektet

Dette website blander den eksisterende Slotsengens Musik identitet med den nye "Mellem Træerne" oplevelsesfortælling. Festivalen har flyttet fra slotsengen til skoven i Dronningedalen, og hjemmesiden afspejler denne transformation.

## ✨ Funktioner

- **Responsivt design** - Fungerer perfekt på mobil, tablet og desktop
- **Skovsinspireret tema** - Grønne, brune og naturlige farvetoner
- **Frivillig tilmelding** - Komplet formular med email-bekræftelse
- **7 hovedsider** - Hjem, Historie, Mellem Træerne, Program, Billetter, Frivillige, Praktisk
- **Moderne teknologi** - Next.js 14, React 18, TypeScript, Tailwind CSS

## 🚀 Kom i gang

### Forudsætninger

- Node.js 18+ installeret
- npm eller yarn

### Installation

```bash
# Klon projektet
git clone [repository-url]

# Naviger til projektmappen
cd mellem-traerne-festival-site

# Installer dependencies
npm install

# Start development server
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000) i din browser.

## 📁 Projektstruktur

```
mellem-traerne-festival-site/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Forside
│   ├── historie/                 # Historie side
│   ├── mellem-traerne/           # Mellem Træerne side
│   ├── program/                  # Program side
│   ├── billetter/                # Billetter side
│   ├── frivillige/               # Frivillige side (med formular)
│   ├── praktisk/                 # Praktisk info side
│   ├── api/                      # API routes
│   │   └── volunteers/           # Frivillig tilmeldings-endpoint
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles & tema
├── components/                   # React komponenter
│   ├── Header.tsx                # Navigation
│   ├── Footer.tsx                # Footer
│   └── ui/                       # shadcn/ui komponenter
├── lib/                          # Utility funktioner
├── public/                       # Statiske filer
└── WEBSITE_DOCUMENTATION.md      # Detaljeret dokumentation
```

## 🎨 Design System

### Farver

- **Primary (Skovgrøn)**: `hsl(145, 25%, 35%)`
- **Secondary (Varm brun)**: `hsl(35, 30%, 75%)`
- **Background (Blød creme)**: `hsl(42, 15%, 97%)`

### Typografi

- Font: Inter (Google Fonts)
- Overskrifter: Bold, store, med god luft
- Brødtekst: Læsbar, generøs linjehøjde

## 📧 Email Funktionalitet

Frivillig-formularen inkluderer email-bekræftelse. Aktuelt simuleret, men klar til produktion.

### Implementer rigtig email-sending:

1. Installer email service:
```bash
npm install resend
# eller
npm install @sendgrid/mail
```

2. Tilføj environment variables til `.env.local`:
```
RESEND_API_KEY=your_key_here
```

3. Opdater `app/api/volunteers/route.ts` med rigtig email-sending

Se `WEBSITE_DOCUMENTATION.md` for detaljeret guide.

## 🛠️ Teknologi Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Icons**: Lucide React

## 📱 Sider

1. **Hjem** (`/`) - Hero, værdier, call-to-action
2. **Historie** (`/historie`) - Slotsengens Musik's historie og udvikling
3. **Mellem Træerne** (`/mellem-traerne`) - Oplevelsesfilosofi
4. **Program** (`/program`) - Dagens program og tidsplan
5. **Billetter** (`/billetter`) - Billettyper og køb
6. **Frivillige** (`/frivillige`) - Tilmeldingsformular for frivillige
7. **Praktisk** (`/praktisk`) - Praktisk information for gæster

## 🎯 Frivillig Tilmelding - UX Flow

1. **Inspiration** - Læs om medskabelse og fællesskab
2. **Valg** - Vælg interesseområder via visuelle knapper
3. **Personligt** - Indtast kontaktinfo og motivation
4. **Indsendelse** - Klar handlingsknap
5. **Bekræftelse** - Success-state med personlig besked
6. **Email** - Automatisk bekræftelses-email

## 🚢 Deployment

### Vercel (Anbefalet)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build til produktion

```bash
npm run build
npm start
```

## 📝 Indhold Opdateringer

### Opdater program
Rediger `app/program/page.tsx` - opdater `schedule` array

### Opdater billetpriser
Rediger `app/billetter/page.tsx` - opdater `ticketTypes` array

### Opdater praktisk info
Rediger `app/praktisk/page.tsx` - opdater kort-indhold

## 🎨 Design Opdateringer

### Ændre farver
Rediger `app/globals.css` - opdater CSS custom properties

### Tilføj nye komponenter
Tilføj i `components/` mappen

## 📚 Dokumentation

Se `WEBSITE_DOCUMENTATION.md` for:
- Detaljeret side-breakdown
- UX flows
- Teknisk implementation
- Content strategi
- Brand guidelines
- Fremtidige forbedringer

## 🤝 Bidrag

Dette er et community-drevet projekt. Bidrag er velkomne!

## 📄 Licens

[Tilføj licens information]

## 📞 Kontakt

For spørgsmål om festivalen:
- Email: info@mellemtraerne.dk
- Website: [tilføj URL når deployed]

---

**Bygget med omhu for Mellem Træerne fællesskabet** 🌲
