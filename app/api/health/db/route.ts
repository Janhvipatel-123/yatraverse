import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Attempt a simple query to verify database connection
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json(
      { success: true, message: "Database connected" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { success: false, message: "Database connection failed" },
      { status: 500 }
    );
  }
}
