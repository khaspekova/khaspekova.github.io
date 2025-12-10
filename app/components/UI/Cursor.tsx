"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCursorContext } from "@/hooks/useCursorContext";

export default function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { cursorText } = useCursorContext();
  const pathname = usePathname();

  useEffect(() => {
    setIsHovering(false);
  }, [pathname]);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        (target && (target.tagName === "A" || target.tagName === "BUTTON")) ||
        (target.closest && (target.closest("a") || target.closest("button")))
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseEnterViewport = () => {
      setIsVisible(true);
    };

    const handleMouseLeaveViewport = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseenter", handleMouseEnterViewport);
    document.addEventListener("mouseleave", handleMouseLeaveViewport);

    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseenter", handleMouseEnterViewport);
      document.removeEventListener("mouseleave", handleMouseLeaveViewport);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  const toCenter = 12;

  const hasText = cursorText.length > 0;
  const longText = cursorText.length > 8;
  const shouldShowHover = isHovering || hasText;

  return (
    <div
      className={`custom-cursor ${shouldShowHover ? "hover" : ""} ${
        isVisible ? "" : "hidden"
      } ${hasText ? "has-text" : ""} ${longText ? "long-text" : ""}`}
      style={{
        left: `${cursorPosition.x - toCenter}px`,
        top: `${cursorPosition.y - toCenter}px`,
      }}
    >
      <p>{cursorText.toUpperCase()}</p>
    </div>
  );
}
