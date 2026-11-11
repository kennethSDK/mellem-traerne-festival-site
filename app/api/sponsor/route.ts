import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

interface SponsorFormData {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string; // honeypot
}

const clean = (value: unknown, max = 2000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: NextRequest) {
  try {
    const raw: SponsorFormData = await request.json();

    // Spam-bots udfylder typisk det skjulte felt – lad som om alt gik godt.
    if (clean(raw.website)) {
      return NextResponse.json({ success: true });
    }

    const data = {
      company: clean(raw.company, 200),
      name: clean(raw.name, 200),
      email: clean(raw.email, 200),
      phone: clean(raw.phone, 50),
      message: clean(raw.message, 5000),
    };

    if (!data.company || !data.name || !data.email) {
      return NextResponse.json(
        { error: "Udfyld venligst virksomhed, navn og e-mail." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ error: "Ugyldig e-mailadresse." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Vi kunne ikke sende jeres henvendelse lige nu. Skriv venligst direkte til martin@slotsengensmusik.dk." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Mellem Træerne <onboarding@resend.dev>",
      to: "martin@slotsengensmusik.dk",
      replyTo: data.email,
      subject: `Ny sponsorhenvendelse: ${data.company}`,
      text: `Ny sponsorhenvendelse via mellemtræerne.dk/sponsor

Virksomhed: ${data.company}
Kontaktperson: ${data.name}
E-mail: ${data.email}
Telefon: ${data.phone || "Ikke oplyst"}

Besked:
${data.message || "(ingen besked)"}
`,
    });

    if (error) {
      console.error("Error sending sponsor email:", error);
      return NextResponse.json(
        { error: "Vi kunne ikke sende jeres henvendelse lige nu. Prøv igen, eller skriv direkte til martin@slotsengensmusik.dk." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Vi har modtaget jeres henvendelse og vender tilbage hurtigst muligt.",
    });
  } catch (error) {
    console.error("Error processing sponsor enquiry:", error);
    return NextResponse.json(
      { error: "Der opstod en fejl. Prøv venligst igen." },
      { status: 500 }
    );
  }
}
