// use server'

/**
 * @fileOverview An AI agent that answers questions about digital literacy.
 *
 * - answerDigitalLiteracyQuestions - A function that answers questions about digital literacy.
 * - AnswerDigitalLiteracyQuestionsInput - The input type for the answerDigitalLiteracyQuestions function.
 * - AnswerDigitalLiteracyQuestionsOutput - The return type for the answerDigitalLiteracyQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerDigitalLiteracyQuestionsInputSchema = z.object({
  query: z.string().describe('The question about digital literacy.'),
});
export type AnswerDigitalLiteracyQuestionsInput = z.infer<typeof AnswerDigitalLiteracyQuestionsInputSchema>;

const AnswerDigitalLiteracyQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about digital literacy.'),
});
export type AnswerDigitalLiteracyQuestionsOutput = z.infer<typeof AnswerDigitalLiteracyQuestionsOutputSchema>;

export async function answerDigitalLiteracyQuestions(input: AnswerDigitalLiteracyQuestionsInput): Promise<AnswerDigitalLiteracyQuestionsOutput> {
  return answerDigitalLiteracyQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerDigitalLiteracyQuestionsPrompt',
  input: {schema: AnswerDigitalLiteracyQuestionsInputSchema},
  output: {schema: AnswerDigitalLiteracyQuestionsOutputSchema},
  prompt: `You are DigiBuddy, a helpful chatbot that answers questions about digital literacy for parents and elderly users.

  Answer the following question:

  {{query}}`,
});

const answerDigitalLiteracyQuestionsFlow = ai.defineFlow(
  {
    name: 'answerDigitalLiteracyQuestionsFlow',
    inputSchema: AnswerDigitalLiteracyQuestionsInputSchema,
    outputSchema: AnswerDigitalLiteracyQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
