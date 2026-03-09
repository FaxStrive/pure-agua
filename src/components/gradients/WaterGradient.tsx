"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

interface WaterGradientProps {
  className?: string;
  speed?: number;
  strength?: number;
}

export function WaterGradient({
  className = "",
  speed = 0.3,
  strength = 3,
}: WaterGradientProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <ShaderGradientCanvas
        style={{ position: "absolute", inset: 0 }}
        pixelDensity={1.5}
      >
        <ShaderGradient
          color1="#009FE3"
          color2="#3BD6F5"
          color3="#084978"
          animate="on"
          uSpeed={speed}
          uStrength={strength}
          type="waterPlane"
          cDistance={3.6}
          cPolarAngle={115}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
