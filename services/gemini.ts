
import { GoogleGenAI } from "@google/genai";
import { Watch } from "../types";

export const getExpertInsight = async (watch: Watch): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "Expert advice currently unavailable.";

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a world-class horological expert. Provide a poetic and insightful 2-sentence description/critique of the ${watch.brand} ${watch.name}. Highlight its craftsmanship and prestige for a luxury buyer.`,
    });
    return response.text || "A timepiece of exceptional character and heritage.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "This timepiece represents the zenith of contemporary horology.";
  }
};
