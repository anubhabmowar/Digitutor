"use client";
import { useAccessibility, type FontSize } from '@/contexts/AccessibilityContext';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon, LanguagesIcon, MicIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings } from 'lucide-react';

export default function AccessibilityControls() {
  const { fontSize, setFontSize } = useAccessibility();

  const fontSizes: { label: string; value: FontSize }[] = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Accessibility Settings">
          <Settings className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>Accessibility</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel className="text-xs text-muted-foreground px-2 pt-2">Font Size</DropdownMenuLabel>
        <div className="flex items-center justify-between px-2 py-1 space-x-1">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setFontSize('small')}
            disabled={fontSize === 'small'}
            aria-label="Decrease font size"
            className="h-8 w-8"
          >
            <MinusIcon className="h-4 w-4" />
          </Button>
          <span className="text-sm capitalize w-16 text-center">{fontSize}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setFontSize('large')}
            disabled={fontSize === 'large'}
            aria-label="Increase font size"
            className="h-8 w-8"
          >
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
         <div className="px-2 py-1">
         {fontSizes.map(sizeOption => (
            <Button 
              key={sizeOption.value}
              variant={fontSize === sizeOption.value ? "default" : "ghost"}
              className="w-full justify-start my-0.5"
              onClick={() => setFontSize(sizeOption.value)}
            >
              {sizeOption.label}
            </Button>
          ))}
        </div>


        <DropdownMenuSeparator />
        <DropdownMenuItem disabled className="text-muted-foreground">
          <LanguagesIcon className="mr-2 h-4 w-4" />
          <span>Multi-language (Coming Soon)</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled className="text-muted-foreground">
          <MicIcon className="mr-2 h-4 w-4" />
          <span>Voice Commands (Coming Soon)</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
