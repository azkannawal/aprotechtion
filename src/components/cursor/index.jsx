import { useEffect, useState } from "react";

const GlowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main
      className="!transition-none absolute pointer-events-none z-[99]"
      style={{ left: position.x, top: position.y }}
    >
      <div className="glow-effect"></div>
    </main>
  );
};

export default GlowCursor;
