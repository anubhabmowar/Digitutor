import AIChatInterface from "@/components/ai-chat/AIChatInterface";

export default function AiChatPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold text-primary">
          Chat with DigiBuddy
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions about digital tools or online safety? Ask DigiBuddy! Our AI assistant is here to help you.
        </p>
      </section>
      
      <section>
        <AIChatInterface />
      </section>
    </div>
  );
}
