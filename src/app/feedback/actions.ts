"use server";
import { z } from "zod";

export const feedbackSchema = z.object({
  name: z.string().max(100, "Name must be 100 characters or less.").optional(),
  email: z.string().email({ message: "Please enter a valid email address." }).max(100).optional().or(z.literal('')),
  feedback: z.string().min(10, { message: "Feedback must be at least 10 characters long." }).max(1000, "Feedback must be 1000 characters or less."),
});

export type FeedbackFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    feedback?: string[];
    _form?: string[];
  };
  success: boolean;
} | null;


export async function submitFeedback(prevState: FeedbackFormState, formData: FormData) : Promise<FeedbackFormState> {
  const validatedFields = feedbackSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    feedback: formData.get("feedback"),
  });

  if (!validatedFields.success) {
    return {
      message: "Failed to submit feedback. Please check the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    // In a real app, you'd save this to a database or send an email.
    console.log("Feedback received:", validatedFields.data);
    // Example: await saveFeedbackToDatabase(validatedFields.data);

    return {
      message: "Thank you for your feedback! We appreciate you helping us improve.",
      success: true,
    };
  } catch (error) {
    console.error("Error saving feedback:", error);
    return {
      message: "An unexpected error occurred while submitting your feedback. Please try again later.",
      errors: {
        _form: ["Server error. Please try again."]
      },
      success: false,
    }
  }
}
