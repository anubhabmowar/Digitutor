tsx
import TutorialCard from "@/components/tutorials/TutorialCard";
import { Smartphone, IndianRupee, MapPin, Mail, Camera, Video } from "lucide-react"; // More icons

const tutorials = [
  {
    title: "WhatsApp Basics",
    description: "Learn how to send messages, make calls, and share media with friends and family on WhatsApp.",
    imageUrl: "https://placehold.co/600x400.png",
    Icon: Smartphone,
    tutorialLink: "/tutorials/whatsapp", // Placeholder link
    imageHint: "whatsapp logo"
  },
  {
    title: "Paytm for Beginners",
    description: "Discover how to make secure online payments, pay bills, and recharge your mobile using Paytm.",
    imageUrl: "https://placehold.co/600x400.png",
    Icon: IndianRupee,
    tutorialLink: "/tutorials/paytm",
    imageHint: "paytm logo"
  },
  {
    title: "Google Maps Navigation",
    description: "Find your way around with Google Maps. Learn to search for locations, get directions, and explore areas.",
    imageUrl: "https://placehold.co/600x400.png",
    Icon: MapPin,
    tutorialLink: "/tutorials/google-maps",
    imageHint: "maps logo"
  },
  {
    title: "Email Essentials",
    description: "Master the basics of sending and receiving emails, organizing your inbox, and staying safe online.",
    imageUrl: "https://placehold.co/600x400.png",
    Icon: Mail,
    tutorialLink: "/tutorials/email",
    imageHint: "email app"
  },
  {
    title: "Smartphone Photography",
    description: "Learn to take great photos and videos with your smartphone camera and share your memories.",
    imageUrl: "https://placehold.co/600x400.png",
    Icon: Camera,
    tutorialLink: "/tutorials/photography",
    imageHint: "phone camera"
  },
  {
    title: "Video Calling Guide",
    description: "Connect with loved ones face-to-face using video calling apps like Google Meet or WhatsApp Video.",
    imageUrl: "https://placehold.co/600x400.png",
    Icon: Video,
    tutorialLink: "/tutorials/video-calling",
    imageHint: "video app"
  },
];

export default function TutorialsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold text-primary">
          Digital Tool Tutorials
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of easy-to-follow tutorials designed to help you master essential digital tools. Click on a card to start learning!
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.title}
            title={tutorial.title}
            description={tutorial.description}
            imageUrl={tutorial.imageUrl}
            Icon={tutorial.Icon}
            tutorialLink={tutorial.tutorialLink}
            imageHint={tutorial.imageHint}
          />
        ))}
      </section>
    </div>
  );
}
