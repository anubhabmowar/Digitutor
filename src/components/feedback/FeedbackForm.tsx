"use client";
import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { feedbackSchema, submitFeedback, type FeedbackFormState } from '@/app/feedback/actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

type FeedbackFormData = z.infer<typeof feedbackSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-semibold">
      {pending ? 'Submitting...' : 'Submit Feedback'}
    </Button>
  );
}

export default function FeedbackForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState<FeedbackFormState, FormData>(submitFeedback, null);

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: '',
      email: '',
      feedback: '',
    },
  });

  useEffect(() => {
    if (state) {
      if (state.success) {
        toast({
          title: "Feedback Submitted!",
          description: state.message,
          variant: "default",
          action: <CheckCircle2 className="text-green-500" />,
        });
        form.reset(); // Reset form fields on successful submission
      } else if (state.message && state.errors) {
         // Display field errors using react-hook-form's setError
        if (state.errors.name) form.setError("name", { type: "server", message: state.errors.name.join(', ') });
        if (state.errors.email) form.setError("email", { type: "server", message: state.errors.email.join(', ') });
        if (state.errors.feedback) form.setError("feedback", { type: "server", message: state.errors.feedback.join(', ') });
        
        // Display a general error toast if there are form-level errors or just a general message
        if (state.errors._form || (!state.errors.name && !state.errors.email && !state.errors.feedback)) {
           toast({
            title: "Submission Error",
            description: state.message || state.errors._form?.join(', ') || "Please correct the errors and try again.",
            variant: "destructive",
            action: <AlertCircle className="text-red-500" />,
          });
        }
      }
    }
  }, [state, toast, form]);
  
  const onFormSubmit = (data: FeedbackFormData) => {
    const formData = new FormData();
    formData.append('name', data.name || '');
    formData.append('email', data.email || '');
    formData.append('feedback', data.feedback);
    formAction(formData);
  };


  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl rounded-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary">Share Your Thoughts</CardTitle>
        <CardDescription className="text-base">
          We value your input! Please let us know how we can improve DigiTutor.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-semibold">Name (Optional)</Label>
            <Input
              id="name"
              {...form.register('name')}
              placeholder="Your Name"
              className="text-base"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-semibold">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              {...form.register('email')}
              placeholder="your.email@example.com"
              className="text-base"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="feedback" className="font-semibold">Feedback</Label>
            <Textarea
              id="feedback"
              {...form.register('feedback')}
              placeholder="Tell us what you think..."
              rows={5}
              className="text-base"
              required
            />
            {form.formState.errors.feedback && (
              <p className="text-sm text-destructive">{form.formState.errors.feedback.message}</p>
            )}
          </div>
          
          {state?.errors?._form && (
            <div className="text-sm text-destructive p-2 bg-destructive/10 rounded-md">
              {state.errors._form.join(', ')}
            </div>
          )}

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
