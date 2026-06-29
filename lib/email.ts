import { Resend } from 'resend';

export async function sendInquiryNotification(inquiry: InquiryType) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (!apiKey || !adminEmail || !fromEmail) {
      console.warn("Email configuration missing (API Key, Admin Email, or From Email). Skipping email notifications.");
      return;
    }

    const resend = new Resend(apiKey);

    // Send notification to Admin
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #d97706; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Luxury Travel Inquiry</h2>
        <p><strong>Name:</strong> ${inquiry.name}</p>
        <p><strong>Email:</strong> ${inquiry.email}</p>
        <p><strong>Phone:</strong> ${inquiry.phone || 'Not provided'}</p>
        <p><strong>Destination:</strong> ${inquiry.destination || 'Not specified'}</p>
        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #d97706;">
          <p style="margin: 0;"><strong>Message:</strong></p>
          <p style="margin-top: 10px; white-space: pre-wrap;">${inquiry.message}</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: `YatraVerse <${fromEmail}>`,
      to: adminEmail,
      subject: `New Inquiry from ${inquiry.name} | YatraVerse`,
      html: adminHtml,
    });

    // Send confirmation to User
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #d97706; margin-bottom: 5px;">YatraVerse</h1>
          <p style="color: #666; font-size: 14px; margin-top: 0;">Journeys of Distinction</p>
        </div>
        <p>Dear ${inquiry.name},</p>
        <p>Thank you for reaching out to YatraVerse. We have successfully received your inquiry regarding a potential journey.</p>
        <p>Our luxury travel advisors are currently reviewing your request and will contact you shortly to begin curating your exclusive experience.</p>
        <p>For your records, here is a summary of your inquiry:</p>
        <div style="margin: 20px 0; padding: 15px; background: #fdfbf7; border: 1px solid #f3e8d6; border-radius: 5px;">
          <p style="margin: 0; color: #555;"><em>"${inquiry.message}"</em></p>
        </div>
        <p>If you have any immediate questions, feel free to reply directly to this email.</p>
        <br/>
        <p>Warm regards,</p>
        <p><strong>The YatraVerse Team</strong></p>
      </div>
    `;

    await resend.emails.send({
      from: `YatraVerse <${fromEmail}>`,
      to: inquiry.email,
      subject: "We've Received Your YatraVerse Inquiry",
      html: userHtml,
    });

  } catch (error) {
    // Log safely on the server
    console.error("Failed to send email notifications:", error);
    // Note: Error is caught and not re-thrown to avoid breaking the inquiry submission process
  }
}

type InquiryType = {
  name: string;
  email: string;
  phone?: string | null;
  destination?: string | null;
  message: string;
};

type BookingType = {
  packageTitle: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string | null;
  travelDate?: Date | string | null;
  travelers: number;
  message?: string | null;
};

export async function sendBookingNotification(booking: BookingType) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (!apiKey || !adminEmail || !fromEmail) {
      console.warn("Email configuration missing. Skipping booking email notification.");
      return;
    }

    const resend = new Resend(apiKey);

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #d97706; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Journey Booking Request</h2>
        <p><strong>Package:</strong> ${booking.packageTitle}</p>
        <p><strong>Name:</strong> ${booking.customerName}</p>
        <p><strong>Email:</strong> ${booking.customerEmail}</p>
        <p><strong>Phone:</strong> ${booking.customerPhone || 'Not provided'}</p>
        <p><strong>Travel Date:</strong> ${booking.travelDate ? new Date(booking.travelDate).toLocaleDateString() : 'Not specified'}</p>
        <p><strong>Travelers:</strong> ${booking.travelers}</p>
        ${booking.message ? `<div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #d97706;">
          <p style="margin: 0;"><strong>Special Requests:</strong></p>
          <p style="margin-top: 10px; white-space: pre-wrap;">${booking.message}</p>
        </div>` : ''}
      </div>
    `;

    await resend.emails.send({
      from: `YatraVerse <${fromEmail}>`,
      to: adminEmail,
      subject: `New Booking Request: ${booking.packageTitle}`,
      html: adminHtml,
    });

    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #d97706; margin-bottom: 5px;">YatraVerse</h1>
          <p style="color: #666; font-size: 14px; margin-top: 0;">Journeys of Distinction</p>
        </div>
        <p>Dear ${booking.customerName},</p>
        <p>Thank you for choosing YatraVerse. We have successfully received your booking request for the <strong>${booking.packageTitle}</strong>.</p>
        <p>Our luxury travel advisors will review your request and contact you shortly to confirm availability and discuss the finer details of your journey.</p>
        <br/>
        <p>Warm regards,</p>
        <p><strong>The YatraVerse Team</strong></p>
      </div>
    `;

    await resend.emails.send({
      from: `YatraVerse <${fromEmail}>`,
      to: booking.customerEmail,
      subject: `Booking Request Received - ${booking.packageTitle}`,
      html: userHtml,
    });

  } catch (error) {
    console.error("Failed to send booking notification:", error);
  }
}
