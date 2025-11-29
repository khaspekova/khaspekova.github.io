"use client";

import { useState } from "react";
import { useCursorContext } from "@/hooks/useCursorContext";
import classes from "./VectorEmail.module.css";
import Image from "next/image";

const EMAIL = "k.khaspekova@gmail.com";

export default function VectorEmail() {
  const [showCopied, setShowCopied] = useState(false);
  const { setCursorText } = useCursorContext();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(EMAIL);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleMouseEnter = () => {
    setCursorText("Copy");
  };

  const handleMouseLeave = () => {
    setCursorText("");
  };

  return (
    <div
      className={classes.container}
      onClick={copyToClipboard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="/assets/icons/email.svg"
        alt="email"
        className={classes.email}
        width={24}
        height={24}
        quality={85}
        sizes="24px"
      />
      {showCopied && <div className={classes.copyStatus}>✨ Copied! ✨</div>}
    </div>
  );
}
