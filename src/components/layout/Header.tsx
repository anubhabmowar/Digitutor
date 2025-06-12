"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SiteLogo from './SiteLogo';
import AccessibilityControls from '../AccessibilityControls';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/ai-chat', label: 'AI Chat' },
  { href: '/feedback', label: 'Feedback' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const NavItems = ({isMobile = false}: {isMobile?: boolean}) => (
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={isMobile ? () => setIsSheetOpen(false) : undefined}
        className={cn(
          'px-3 py-2 rounded-md text-sm font-medium transition-colors',
          pathname === link.href
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground hover:bg-secondary hover:text-secondary-foreground',
          isMobile && 'block w-full text-left my-1'
        )}
      >
        {link.label}
      </Link>
    ))
  );

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <SiteLogo />
          <nav className="hidden md:flex items-center space-x-4">
            <NavItems />
            <AccessibilityControls />
          </nav>
          <div className="md:hidden flex items-center">
            <AccessibilityControls />
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="ml-2">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="p-4">
                  <SiteLogo />
                  <nav className="mt-8 flex flex-col space-y-2">
                    <NavItems isMobile={true} />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
