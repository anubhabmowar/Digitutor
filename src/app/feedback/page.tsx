import FeedbackForm from "@/components/feedback/FeedbackForm";

export default function FeedbackPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold text-primary">
          Feedback & Suggestions
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your opinions and ideas are important to us. Help us make DigiTutor better by sharing your feedback.
        </p>
      </section>
      
      <section>
        <FeedbackForm />
      </section>
    </div>
  );
}
