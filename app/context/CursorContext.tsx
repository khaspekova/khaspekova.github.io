"use client";

import { createContext, useState, ReactNode } from "react";

interface CursorContextType {
  cursorText: string;
  setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorText, setCursorText] = useState("");

  const cursorCtx: CursorContextType = {
    cursorText,
    setCursorText,
  };

  return (
    <CursorContext.Provider value={cursorCtx}>
      {children}
    </CursorContext.Provider>
  );
};

export { CursorContext };

