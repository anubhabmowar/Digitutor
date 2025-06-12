import { Button } from "@/components/ui/button";
import { ArrowRight, BotMessageSquareIcon, BookOpenCheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dlc from "@/assets/dlc22.webp";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 md:py-16 rounded-xl bg-gradient-to-br from-primary/10 via-background to-accent/10 shadow-lg">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
          DigiTutor
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-foreground font-headline">
          Empowering Digital Literacy!
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Welcome to DigiTutor, your friendly guide to navigating the digital world. We offer easy-to-follow tutorials and AI assistance designed specifically for parents and elderly users.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button asChild size="lg" className="font-semibold">
            <Link href="/tutorials">
              Explore Tutorials <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link href="/ai-chat">
              Ask DigiBuddy <BotMessageSquareIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-headline text-3xl font-semibold text-foreground mb-4">
            Learn at Your Own Pace
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our tutorials cover essential digital tools like WhatsApp, online payments, and Google Maps. Each lesson is crafted with clarity and simplicity in mind.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center">
              <BookOpenCheckIcon className="h-6 w-6 mr-3 text-primary" />
              Step-by-step visual guides
            </li>
            <li className="flex items-center">
              <BookOpenCheckIcon className="h-6 w-6 mr-3 text-primary" />
              Practical examples and tips
            </li>
            <li className="flex items-center">
              <BookOpenCheckIcon className="h-6 w-6 mr-3 text-primary" />
              Accessible from any device
            </li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
           <Image
            src={dlc}
            alt="Happy learners using digital devices"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            data-ai-hint="digital learning"
          />
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="font-headline text-3xl font-semibold text-foreground mb-4">
          Ready to Start Your Digital Journey?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          It's never too late to learn. Join thousands of users who are becoming more confident online with DigiTutor.
        </p>
        <Button asChild size="lg" className="font-semibold">
          <Link href="/tutorials">
            View All Tutorials
          </Link>
        </Button>
      </section>
    </div>
  );
}
