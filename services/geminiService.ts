
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generateInnovationResponse = async (prompt: string): Promise<string> => {
  const ai = getAIClient();
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are 'Ine', a high-level creative partner and innovation strategist. Your goal is to help the user brainstorm, solve complex problems, and refine ideas with cutting-edge insights. Be concise, brilliant, and inspiring.",
        temperature: 0.8,
      },
    });
    return response.text || "I'm processing that innovation... one moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The intelligence core is temporarily unavailable. Please try again.";
  }
};

export async function* generateInnovationStream(prompt: string) {
  const ai = getAIClient();
  try {
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are 'Ine', a high-level creative partner and innovation strategist. Be concise and brilliant.",
        temperature: 0.9,
      },
    });

    for await (const chunk of responseStream) {
      yield chunk.text || "";
    }
  } catch (error) {
    console.error("Gemini Stream Error:", error);
    yield "Evolution interrupted. Neural link unstable.";
  }
}

export const brainstormIdeas = async (topic: string): Promise<string> => {
  const ai = getAIClient();
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate 5 unique and disruptive project ideas for the topic: ${topic}. Format as clear bullet points with a catchy name and a one-sentence description for each.`,
    });
    return response.text || "No new ideas generated yet.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error fetching ideas.";
  }
};
