import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendInquiryNotification } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields based on frontend payload
    const { fullName, email, phone, destination, message } = body;
    
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Save to the database
    const newInquiry = await prisma.inquiry.create({
      data: {
        name: fullName,
        email,
        message,
        phone: phone || null,
        destination: destination || null,
        status: 'NEW',
      }
    });

    // Attempt to send email notifications (errors are caught inside the function)
    await sendInquiryNotification(newInquiry);
    
    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully" },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Error processing inquiry:", error);
    // Do not expose sensitive database errors to the frontend
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
