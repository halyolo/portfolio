"use client";

import React, { useRef, useEffect } from "react";
import { animate, stagger } from "animejs";

export default function Header() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      animate(ref.current.children, {
        opacity: [0, 1],
        filter: ["blur(2px)", "blur(0px)"],
        delay: stagger(150),
        duration: 1000,
        easing: "easeOutCubic",
      });
    }
  }, []);

  return (
    <h1
      ref={ref}
      className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-4"
    >
      Halyolo
    </h1>
  );
}
