"use server";
import { answerDigitalLiteracyQuestions, type AnswerDigitalLiteracyQuestionsInput } from '@/ai/flows/answer-digital-literacy-questions';

export interface ChatResponse {
  success: boolean;
  answer?: string;
  error?: string;
}

export async function getAIChatResponse(query: string): Promise<ChatResponse> {
  if (!query.trim()) {
    return { success: false, error: "Query cannot be empty." };
  }
  try {
    const input: AnswerDigitalLiteracyQuestionsInput = { query };
    // The existing AI flow name is answerDigitalLiteracyQuestions
    const result = await answerDigitalLiteracyQuestions(input);
    return { success: true, answer: result.answer };
  } catch (error) {
    console.error("Error in AI chat flow:", error);
    // Check if error is an instance of Error to access message property
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: `Sorry, I couldn't process your request right now. Details: ${errorMessage}` };
  }
}
