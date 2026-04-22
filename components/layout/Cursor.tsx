"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setIsHovering(true);
        const text = target.getAttribute("data-cursor");
        if (text) setCursorText(text);
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      id="custom-cursor"
      style={{
        left: x,
        top: y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className={`fixed pointer-events-none z-[9999] rounded-full flex items-center justify-center text-charcoal font-body font-bold text-[10px] uppercase tracking-widest transition-all duration-300 ${
        isHovering ? "w-24 h-24 bg-accent opacity-100 scale-100" : "w-4 h-4 bg-white opacity-50 scale-100"
      }`}
    >
      {cursorText && <span className="opacity-100">{cursorText}</span>}
    </motion.div>
  );
}
