import { GoogleGenAI } from '@google/genai';

export async function generateItinerary(
  destination: string,
  days: number,
  budget: string,
  travelStyle: string
) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'default' });
  const prompt = `
    You are an expert luxury travel planner for YatraVerse. Create a premium, day-by-day itinerary.
    Destination: ${destination}
    Duration: ${days} days
    Budget: ${budget}
    Travel Style: ${travelStyle}
    
    Return a strict JSON object with this exact schema:
    {
      "destination": "string",
      "duration": "string",
      "estimatedCost": "string",
      "overview": "string",
      "tips": ["string", "string"],
      "hotels": [
        { "name": "string", "description": "string", "pricePerNight": "string" }
      ],
      "days": [
        {
          "day": number,
          "title": "string",
          "activities": [
            { "time": "string", "title": "string", "description": "string" }
          ]
        }
      ]
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    if (!response.text) {
      throw new Error("No response text from Gemini");
    }

    const data = JSON.parse(response.text);
    return { success: true, data };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { success: false, error: "Failed to generate itinerary. Please try again later." };
  }
}
