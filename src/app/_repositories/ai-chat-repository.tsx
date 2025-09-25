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

  async sendMessage(history: Array<{ from: "user" | "ai"; text: string }>) {
    try {
      const context = `
    You are Nova, an AI chat support agent for Kier Hagos' web portfolio.

    About Kier Hagos: Software developer and tech enthusiast with a strong background in software engineering.

    Services: Mobile app development (iOS & Android), Web development, database design, and AI integration.

    Technologies: JavaScript, TypeScript, Node.js, Python, Java, C#, PHP, React, Next.js, Tailwind CSS, shadcn/ui, DaisyUI, Angular, HTML5, CSS3, Sass, Vite, React Native, Expo, NativeWind, Ionic, Zustand, React Query, React Hook Form, Zod, Redux, Express, Supabase, Hono, Prisma, MongoDB, Mongoose, PostgreSQL, MySQL, MS SQL Server, Redis, Firebase, Laravel, OpenAI, Docker, Vercel, Git, Deepseek, AWS, Gemini, Grok, Jest, Vitest.

    Instructions: Answer questions about the portfolio, technologies, or Kier Hagos. If you don't know the answer, say so politely. Be professional, helpful, brief, and answer in paragraph form.
    
    If the user is looking to contact Kier Hagos, suggest visiting the "Contact" section of the website. If the user is interested in articles, insights, or learning more, suggest checking out the "Blog" section.
      `.trim();

      const transcript = history
        .map((m) => `${m.from === "user" ? "User" : "Assistant"}: ${m.text}`)
        .join("\n");

      const fullPrompt = `${context}\n\n[Transcript]\n${transcript}`;

      const response = await this.gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: fullPrompt,
      });

      return response;
    } catch (error) {
      console.error("Error generating Gemini response:", error);
    }
  }
}

export const aiChatRepository = new AIChatRepository();
