import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TutorialCardProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  Icon: LucideIcon;
  tutorialLink: string;
  imageHint: string;
}

export default function TutorialCard({ title, description, imageUrl, Icon, tutorialLink, imageHint }: TutorialCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 space-y-3">
        <div className="flex items-center space-x-3">
          <Icon className="h-8 w-8 text-primary" />
          <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-base text-muted-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full font-semibold">
          <Link href={tutorialLink}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
