import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json({ success: false, message: "Missing ID" }, { status: 400 });
    }

    const itinerary = await prisma.itinerary.findUnique({
      where: { id },
    });

    if (!itinerary) {
      return NextResponse.json({ success: false, message: "Itinerary not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, itinerary }, { status: 200 });
  } catch (error) {
    console.error("Error fetching itinerary:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch itinerary" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json({ success: false, message: "Missing ID" }, { status: 400 });
    }

    await prisma.itinerary.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Itinerary deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting itinerary:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete itinerary" },
      { status: 500 }
    );
  }
}
