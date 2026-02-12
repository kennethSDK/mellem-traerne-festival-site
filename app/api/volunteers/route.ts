import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

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

    // In a production environment, you would:
    // 1. Store the data in a database
    // 2. Send confirmation email using a service like Resend, SendGrid, or Nodemailer
    
    // For now, we'll simulate the email sending
    const emailContent = generateConfirmationEmail(data);
    
    // Log the submission (in production, this would be saved to database)
    console.log("New volunteer signup:", data);
    console.log("Email content:", emailContent);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500));

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

function generateConfirmationEmail(data: VolunteerFormData): string {
  return `
Kære ${data.name},

Tak for din interesse i at blive frivillig ved Mellem Træerne!

Vi har modtaget din tilmelding med følgende oplysninger:

Navn: ${data.name}
Email: ${data.email}
Telefon: ${data.phone}
Interesseområder: ${data.roles.join(", ")}

Din motivation:
${data.motivation}

Vi glæder os til at have dig med som medskaber af festivaloplevelsen. Du vil høre nærmere fra os inden festivalen.

Hvis du har spørgsmål, er du velkommen til at kontakte os på info@mellemtraerne.dk.

Varme hilsner,
Mellem Træerne-teamet

---
Slotsengens Musik
Dronningedalen, Løgumkloster
  `.trim();
}
