"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  start: number;
  end: number;
  duration: number;
  label: string;
  isPlus?: boolean;
}

const Counter = ({
  start,
  end,
  duration,
  label,
  isPlus = false,
}: CounterProps) => {
  const [count, setCount] = useState(start);

  const animateCount = () => {
    setCount(start);
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1
      );
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <motion.div
      id={`counter-${label}`}
      className="text-center my-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onViewportEnter={animateCount}
    >
      <motion.div
        className="text-5xl font-bold text-white"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {isPlus && end > 0 ? "+" : ""}
        {count}
      </motion.div>
      <p className="text-lg text-white">{label}</p>
    </motion.div>
  );
};

export default Counter;
