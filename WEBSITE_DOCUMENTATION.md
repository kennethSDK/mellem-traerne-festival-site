# Mellem Træerne - Website Documentation

## Overview

This website for Mellem Træerne (Slotsengens Musik) is a brand-driven, community-focused festival website that blends the existing Slotsengens Musik identity with the new "Mellem Træerne" experience narrative.

## Design Philosophy

### Visual Identity
- **Forest-inspired color palette**: Greens (primary), warm browns (secondary), soft natural tones
- **Scandinavian aesthetic**: Clean, minimal, breathing spaces
- **Nature-driven**: Large sections, calm transitions, organic feel
- **Photography-first**: Designed to showcase forest imagery, people, and atmosphere

### Tone of Voice
- Human and local
- Honest and reflective
- Non-commercial
- Community-focused

## Site Structure

### Navigation
```
├── Hjem (/)
├── Historie (/historie)
├── Mellem Træerne (/mellem-traerne)
├── Program (/program)
├── Billetter (/billetter)
├── Frivillige (/frivillige)
└── Praktisk (/praktisk)
```

## Page Breakdown

### 1. Home Page (/)
**Purpose**: Welcome visitors and communicate the core experience

**Sections**:
- **Hero**: "Slotsengen er rykket ud mellem træerne" - Immediate emotional connection
- **Why Mellem Træerne**: Explains the move and new atmosphere
- **Values Grid**: 4 core values (Nature, Music, Community, Co-creation)
- **CTA**: Call to action for volunteers

**UX Flow**: 
1. Emotional hook → 2. Context → 3. Values → 4. Action

### 2. Historie (/historie)
**Purpose**: Tell the story of Slotsengens Musik and its evolution

**Sections**:
- **Hero**: Title and subtitle
- **Beginning**: Origin story
- **Core Values**: What hasn't changed
- **Move to Forest**: Why and how the location changed
- **Today**: Current identity
- **Timeline**: Visual milestone markers

**UX Flow**: 
1. Past → 2. Transition → 3. Present → 4. Continuity

### 3. Mellem Træerne (/mellem-traerne)
**Purpose**: Deep dive into the experience philosophy

**Sections**:
- **Hero**: Experience tagline
- **Story**: Poetic explanation of the atmosphere
- **Four Dimensions**: Between concerts, people, moments, hearts
- **Philosophy**: Why the name matters
- **Quote**: Emotional anchor

**UX Flow**: 
1. Introduction → 2. Atmosphere → 3. Meaning → 4. Emotion

### 4. Program (/program)
**Purpose**: Practical schedule with experiential framing

**Sections**:
- **Hero**: Program title
- **Date/Location Info**: Quick reference card
- **Schedule**: Time-based program with descriptions
- **Note**: Reminder about the importance of pauses

**UX Flow**: 
1. Overview → 2. Details → 3. Context → 4. Mindset

### 5. Billetter (/billetter)
**Purpose**: Ticket sales with value communication

**Sections**:
- **Hero**: Ticket title
- **Ticket Types**: 3 options (Standard, Support, Children)
- **Practical Info**: Purchase process, refunds, support
- **CTA**: Final purchase encouragement

**UX Flow**: 
1. Options → 2. Details → 3. Trust signals → 4. Action

### 6. Frivillige (/frivillige) - VOLUNTEER SECTION
**Purpose**: Recruit volunteers as co-creators

**Sections**:
- **Hero**: "Vil du være medskaber af magien mellem træerne?"
- **Story**: What it means to be a volunteer
- **Signup Form**: Interactive role selection + personal info
- **Success State**: Warm confirmation message

**Form Elements**:
- Name (required)
- Email (required)
- Phone (required)
- Roles/Interests (required, multi-select):
  - Opbygning (Construction)
  - Skovbrygget (Forest Café)
  - Scene & lyd (Stage & Sound)
  - Gæstevært (Host)
  - Dekoration (Decoration)
  - Andet (Other)
- Motivation (optional text area): "Hvad driver dig?"

**UX Flow for Volunteer Signup**:
1. **Inspiration Phase**: Read about co-creation and community
2. **Selection Phase**: Choose areas of interest via visual buttons
3. **Personal Phase**: Enter contact details and motivation
4. **Submission**: Single clear action button
5. **Confirmation**: Success state with personalized message
6. **Email**: Automatic confirmation email with summary

**Email Functionality**:
- API endpoint: `/api/volunteers` (POST)
- Validates all required fields
- Generates confirmation email content
- Returns success/error response
- Email includes:
  - Personal greeting
  - Summary of submitted information
  - Welcome message
  - Contact information

### 7. Praktisk (/praktisk)
**Purpose**: All practical information for attendees

**Sections**:
- **Hero**: Practical info title
- **Info Grid**: Location, Parking, Food, What to bring
- **Additional Info**: Facilities, Important rules
- **Contact**: How to reach organizers

**UX Flow**: 
1. Essential info → 2. Details → 3. Rules → 4. Support

## Technical Implementation

### Framework
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components

### Key Features

#### 1. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Collapsible mobile navigation

#### 2. Theme System
Custom color palette in `app/globals.css`:
- Primary: Forest green (145° hue)
- Secondary: Warm brown (35° hue)
- Background: Soft cream (42° hue)
- Supports dark mode

#### 3. Component Architecture
```
components/
├── Header.tsx (Navigation)
├── Footer.tsx (Site footer)
└── ui/ (shadcn/ui components)
```

#### 4. API Routes
```
app/api/
└── volunteers/
    └── route.ts (POST endpoint for form submission)
```

#### 5. Form Handling
- Client-side validation
- Server-side validation
- Toast notifications for feedback
- Success state management
- Email confirmation simulation

### Email Integration (Production Ready)

The volunteer signup includes email confirmation functionality. Currently simulated, but ready for production integration:

**To implement real email sending**:

1. **Install email service** (choose one):
   ```bash
   npm install resend
   # or
   npm install @sendgrid/mail
   # or
   npm install nodemailer
   ```

2. **Add environment variables** to `.env.local`:
   ```
   RESEND_API_KEY=your_key_here
   # or
   SENDGRID_API_KEY=your_key_here
   # or
   SMTP_HOST=smtp.example.com
   SMTP_USER=your_email
   SMTP_PASS=your_password
   ```

3. **Update** `app/api/volunteers/route.ts`:
   - Import email service
   - Replace simulation with actual email sending
   - Add error handling for email failures

4. **Optional: Add database storage**:
   - Store volunteer signups in Supabase or similar
   - Track signup status
   - Enable admin dashboard

## Content Strategy

### Storytelling Layers
1. **Emotional**: Connection to nature, community, shared experiences
2. **Practical**: Clear information about logistics
3. **Philosophical**: Deeper meaning of "Mellem Træerne"

### Content Principles
- **Show, don't tell**: Use imagery and atmosphere over marketing speak
- **Breathing room**: Large sections, generous whitespace
- **Hierarchy**: Clear visual hierarchy guides the eye
- **Authenticity**: Real stories, honest communication

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Responsive text sizing
- Focus indicators on interactive elements

## Performance Considerations

- Next.js automatic code splitting
- Image optimization (when images added)
- Minimal JavaScript for core functionality
- CSS-in-JS via Tailwind (optimized)
- Static generation where possible

## Future Enhancements

### Phase 2 Additions
1. **Image Gallery**: Photos from previous festivals
2. **Artist Profiles**: Detailed artist information
3. **Blog/News**: Updates and stories
4. **Social Media Integration**: Instagram feed, etc.
5. **Newsletter Signup**: Email list building
6. **Map Integration**: Interactive location map
7. **Weather Widget**: Real-time weather for festival day

### Technical Improvements
1. **Database Integration**: Store volunteer signups
2. **Admin Dashboard**: Manage volunteers and content
3. **Email Service**: Real email sending (Resend/SendGrid)
4. **Analytics**: Track visitor behavior
5. **SEO Optimization**: Meta tags, structured data
6. **Internationalization**: English version if needed

## Maintenance

### Content Updates
- Program: Update schedule in `app/program/page.tsx`
- Tickets: Update prices in `app/billetter/page.tsx`
- Practical: Update info in `app/praktisk/page.tsx`

### Design Updates
- Theme: Modify `app/globals.css`
- Components: Update in `components/` directory

### Adding New Pages
1. Create new file in `app/[page-name]/page.tsx`
2. Add to navigation in `components/Header.tsx`
3. Add to footer if relevant in `components/Footer.tsx`

## Brand Guidelines

### Typography
- Headings: Bold, large, breathing space
- Body: Readable, generous line-height
- Hierarchy: Clear size differences

### Spacing
- Sections: py-20 (80px vertical padding)
- Cards: Generous internal padding
- Containers: max-w-3xl to max-w-6xl depending on content

### Interactions
- Hover states: Subtle color transitions
- Buttons: Clear, accessible
- Forms: Inline validation, helpful errors
- Feedback: Toast notifications for actions

## Deployment

### Environment Variables
Create `.env.local` for local development:
```
# Add when implementing real email
RESEND_API_KEY=your_key_here
# or other email service credentials
```

### Build Command
```bash
npm run build
```

### Deployment Platforms
- Vercel (recommended for Next.js)
- Netlify
- Custom server with Node.js

## Support & Contact

For technical questions about this implementation:
- Review this documentation
- Check Next.js documentation
- Review shadcn/ui component docs

For content/design questions:
- Refer to brand guidelines above
- Maintain tone of voice consistency
- Keep community focus central

---

**Built with care for the Mellem Træerne community** 🌲
