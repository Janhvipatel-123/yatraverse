import { NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';

export async function PATCH(req: Request, props: { params: Promise<{ id: string }> }) {
  try {
    const params = await props.params;
    const body = await req.json();
    const { status } = body;

    const validStatuses = ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'];
    
    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: 'Invalid status' },
        { status: 400 }
      );
    }

    const updatedBooking = await prisma.booking.update({
      where: { id: params.id },
      data: { status },
    });

    return NextResponse.json({ success: true, booking: updatedBooking });
  } catch (error) {
    console.error('Failed to update booking status:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update booking status' },
      { status: 500 }
    );
  }
}
