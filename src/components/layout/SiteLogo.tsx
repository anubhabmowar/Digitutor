import Link from 'next/link';
import { GraduationCap } from 'lucide-react'; // Example icon

export default function SiteLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors">
      <GraduationCap className="h-8 w-8" />
      <span className="font-headline text-2xl font-semibold">DigiTutor</span>
    </Link>
  );
}
