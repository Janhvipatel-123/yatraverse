import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { sendBookingNotification } from '../../../lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerName, customerEmail, customerPhone, travelDate, travelers, message, packageId, packageTitle } = body;

    if (!customerName || !customerEmail || !travelDate || !travelers) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    let actualPackageId = null;

    if (packageId) {
      // Try to find an existing package by slug
      let pkg = await prisma.package.findUnique({
        where: { slug: packageId }
      });
      
      // If not found, create a stub package so the foreign key works
      if (!pkg) {
        pkg = await prisma.package.create({
          data: {
            title: packageTitle || packageId,
            slug: packageId,
            description: "Custom journey for " + (packageTitle || packageId),
            price: 0,
            duration: "Custom",
            destination: packageId
          }
        });
      }
      actualPackageId = pkg.id;
    }

    // Save booking to DB
    const newBooking = await prisma.booking.create({
      data: {
        customerName,
        customerEmail,
        customerPhone,
        travelDate: new Date(travelDate),
        travelers: Number(travelers),
        packageId: actualPackageId,
        // message isn't in the schema, but we could append it to an existing field or just not save it if schema doesn't have it.
        // Wait, schema does not have `message` in Booking model. 
        // I will just ignore message for DB, but include it in the email!
      },
      include: {
        package: true
      }
    });

    // Send email notification (fire and forget)
    sendBookingNotification({
      ...newBooking,
      message,
      packageTitle: packageTitle || newBooking.package?.title
    }).catch(e => console.error("Email error:", e));

    return NextResponse.json({
      success: true,
      message: "Booking submitted successfully",
      booking: newBooking
    });

  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit booking' },
      { status: 500 }
    );
  }
}
