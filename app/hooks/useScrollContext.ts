"use client";

import { useContext } from "react";
import { ScrollContext, type ScrollContextType } from "@/context/ScrollContext";

// Create default refs that match the type structure
const createDefaultRefs = (): React.RefObject<HTMLElement | null> => ({
  current: null,
});

const defaultSectionsRefs: ScrollContextType["sectionsRefs"] = {
  home: createDefaultRefs(),
  works: createDefaultRefs(),
  publicity: createDefaultRefs(),
  about: createDefaultRefs(),
  contact: createDefaultRefs(),
};

const defaultValue: ScrollContextType = {
  sectionsRefs: defaultSectionsRefs,
  scrollToRef: () => {},
  activeSection: "home",
  setActiveSection: () => {},
};

export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  return context ?? defaultValue;
};
