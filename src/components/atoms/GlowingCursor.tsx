import { useEffect, useRef } from "react";

export default function GlowingCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      el.style.background = `radial-gradient(500px at ${x}px ${y}px, rgba(37, 99, 235, 0.1), transparent 75%)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-10"
    />
  );
}
