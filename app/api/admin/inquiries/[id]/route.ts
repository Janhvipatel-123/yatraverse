import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { InquiryStatus } from '@prisma/client';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // TODO: Add authentication check here before allowing access

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ success: false, message: "Missing ID" }, { status: 400 });
    }

    const body = await request.json();
    const { status } = body;

    if (!status || !Object.values(InquiryStatus).includes(status as InquiryStatus)) {
      return NextResponse.json({ success: false, message: "Invalid or missing status" }, { status: 400 });
    }

    const updatedInquiry = await prisma.inquiry.update({
      where: { id },
      data: { status: status as InquiryStatus },
    });

    return NextResponse.json({ success: true, inquiry: updatedInquiry }, { status: 200 });
  } catch (error) {
    console.error("Error updating inquiry:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update inquiry" },
      { status: 500 }
    );
  }
}
