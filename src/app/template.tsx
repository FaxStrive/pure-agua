"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        opacity: mounted ? 1 : 0,
        filter: mounted ? "blur(0px)" : "blur(8px)",
        transform: mounted ? "scale(1)" : "scale(0.98)",
        transition: [
          "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          "filter 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        ].join(", "),
      }}
    >
      {children}
    </div>
  );
}
