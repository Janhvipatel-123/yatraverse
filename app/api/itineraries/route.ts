import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const itineraries = await prisma.itinerary.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ success: true, itineraries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching itineraries:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch itineraries" },
      { status: 500 }
    );
  }
}
