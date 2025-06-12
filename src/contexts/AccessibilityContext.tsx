"use client";
import type { ReactNode } from 'react';
import { createContext, useContext, useState, useMemo, useEffect } from 'react';

export type FontSize = 'small' | 'medium' | 'large';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  // Placeholders for future features
  isMultiLanguageEnabled: boolean;
  toggleMultiLanguage: () => void;
  isVoiceCommandsEnabled: boolean;
  toggleVoiceCommands: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  // Placeholder states
  const [isMultiLanguageEnabled, setIsMultiLanguageEnabled] = useState(false);
  const [isVoiceCommandsEnabled, setIsVoiceCommandsEnabled] = useState(false);

  useEffect(() => {
    const classesToRemove = ['font-size-small', 'font-size-medium', 'font-size-large'];
    document.body.classList.remove(...classesToRemove);
    document.body.classList.add(`font-size-${fontSize}`);
  }, [fontSize]);

  const toggleMultiLanguage = () => setIsMultiLanguageEnabled(prev => !prev); // Placeholder logic
  const toggleVoiceCommands = () => setIsVoiceCommandsEnabled(prev => !prev); // Placeholder logic

  const value = useMemo(() => ({
    fontSize,
    setFontSize,
    isMultiLanguageEnabled,
    toggleMultiLanguage,
    isVoiceCommandsEnabled,
    toggleVoiceCommands,
  }), [fontSize, isMultiLanguageEnabled, isVoiceCommandsEnabled]);

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
