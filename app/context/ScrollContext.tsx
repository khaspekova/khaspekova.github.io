"use client";

import { createContext, useRef, useState, ReactNode } from "react";

export interface ScrollContextType {
  sectionsRefs: {
    home: React.RefObject<HTMLElement | null>;
    works: React.RefObject<HTMLElement | null>;
    publicity: React.RefObject<HTMLElement | null>;
    about: React.RefObject<HTMLElement | null>;
    contact: React.RefObject<HTMLElement | null>;
  };
  scrollToRef: (refId: keyof ScrollContextType["sectionsRefs"]) => void;
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string | null>("home");

  const sectionsRefs = {
    home: useRef<HTMLElement>(null),
    works: useRef<HTMLElement>(null),
    publicity: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const scrollToRef = (refId: keyof typeof sectionsRefs) => {
    sectionsRefs[refId].current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollCtx: ScrollContextType = {
    sectionsRefs,
    scrollToRef,
    activeSection,
    setActiveSection,
  };

  return (
    <ScrollContext.Provider value={scrollCtx}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollContext };
