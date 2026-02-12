
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key missing. Intelligence features will be limited.");
  }
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

export const generateInnovationResponse = async (prompt: string): Promise<string> => {
  const ai = getAIClient();
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the AI representative for NOSH AI Automation. You are professional, knowledgeable about automation (Voice AI, Chatbots, CRM workflows), and helpful. Your goal is to explain how AI can save businesses time and money, using the 'Body Utopia' case study as a prime example of success.",
        temperature: 0.7,
      },
    });
    return response.text || "Analyzing request...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI systems are currently at maximum capacity. Please try again shortly.";
  }
};

export async function* generateInnovationStream(prompt: string) {
  const ai = getAIClient();
  try {
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the AI Sales Engineer for NOSH AI. You specialize in explaining technical automation concepts to business owners. Be concise, persuasive, and focus on ROI (Return on Investment).",
        temperature: 0.7,
      },
    });

    for await (const chunk of responseStream) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini Stream Error:", error);
    yield "Connection to NOSH Mainframe interrupted.";
  }
}

export const brainstormIdeas = async (industry: string): Promise<string> => {
  const ai = getAIClient();
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user works in the ${industry} industry. Generate 3 specific, high-impact AI automation solutions NOSH AI could build for them. Format as bullet points. Include "Potential ROI" for each.`,
    });
    return response.text || "No solutions generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating solutions.";
  }
};
