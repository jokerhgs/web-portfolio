import { GoogleGenAI } from "@google/genai";

export class AIChatRepository {
  GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  private gemini: GoogleGenAI;

  constructor() {
    if (!this.GEMINI_API_KEY) {
      throw new Error(
        "GEMINI API key is missing. Set GEMINI_API_KEY in your environment."
      );
    }
    this.gemini = new GoogleGenAI({ apiKey: this.GEMINI_API_KEY });
  }

  async sendMessage(message: string) {
    try {
      const response = await this.gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message,
      });

      return response;
    } catch (error) {
      console.error("Error generating Gemini response:", error);
    }
  }
}

export const aiChatRepository = new AIChatRepository();
