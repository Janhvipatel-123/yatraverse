import { NextResponse } from 'next/server';
import { generateItinerary } from '@/lib/ai/gemini';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { destination, days, budget, travelStyle } = body;

    // Validate input
    if (!destination || !days || !budget || !travelStyle) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (destination, days, budget, travelStyle)" },
        { status: 400 }
      );
    }

    // Call Gemini
    const result = await generateItinerary(destination, days, budget, travelStyle);

    if (!result.success || !result.data) {
      return NextResponse.json(
        { success: false, message: result.error || "Failed to generate itinerary" },
        { status: 500 }
      );
    }

    // Save generated result in Itinerary table
    const savedItinerary = await prisma.itinerary.create({
      data: {
        destination,
        days: Number(days),
        budget,
        travelStyle,
        generatedPlan: result.data,
      }
    });

    // Return structured JSON to frontend
    return NextResponse.json(
      { success: true, itinerary: savedItinerary },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error in AI itinerary generation:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while generating the itinerary" },
      { status: 500 }
    );
  }
}
