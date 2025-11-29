"use client";

import { useContext } from "react";
import { CursorContext } from "@/context/CursorContext";

export const useCursorContext = () => {
  try {
    const context = useContext(CursorContext);

    if (!context) {
      return {
        cursorText: "",
        setCursorText: () => {},
      };
    }

    return context;
  } catch (error) {
    return {
      cursorText: "",
      setCursorText: () => {},
    };
  }
};

