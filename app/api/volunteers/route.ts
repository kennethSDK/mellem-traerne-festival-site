import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

interface VolunteerFormData {
  name: string;
  email: string;
  phone: string;
  roles: string[];
  motivation: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: VolunteerFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Alle felter er påkrævet" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Ugyldig email-adresse" },
        { status: 400 }
      );
    }

    // Send email notification to Kenneth
    try {
      await resend.emails.send({
        from: 'Mellem Træerne <onboarding@resend.dev>', // You'll need to verify your domain to use a custom from address
        to: 'Kenneth@slotsengensmusik.dk',
        subject: 'Ny frivillig tilmelding - Mellem Træerne',
        text: generateNotificationEmail(data),
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      // Continue even if email fails - we don't want to block the user
    }
    
    // Log the submission
    console.log("New volunteer signup:", data);

    return NextResponse.json({
      success: true,
      message: "Tak for din tilmelding! Du vil modtage en bekræftelse på email.",
    });
  } catch (error) {
    console.error("Error processing volunteer signup:", error);
    return NextResponse.json(
      { error: "Der opstod en fejl. Prøv venligst igen." },
      { status: 500 }
    );
  }
}

function generateNotificationEmail(data: VolunteerFormData): string {
  return `
Ny frivillig tilmelding til Mellem Træerne!

Navn: ${data.name}
Email: ${data.email}
Telefon: ${data.phone}
Interesseområder: ${data.roles.join(", ")}

Motivation:
${data.motivation}

---
Denne tilmelding blev modtaget via hjemmesiden.
  `.trim();
}
