'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function RotateWords({ text, words }: { text: string; words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 text-4xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-tight">
      <span className="text-[#0F0F0F] dark:text-white">{text}</span>
      <AnimatePresence mode="wait">
        <motion.span key={words[index]} className="text-[#2BC48A] inline-flex">
          {words[index].split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block whitespace-pre"
              initial={{ opacity: 0, filter: 'blur(8px)', y: 12 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0, transition: { delay: i * 0.03, duration: 0.35 } }}
              exit={{ opacity: 0, filter: 'blur(6px)', y: -12, transition: { duration: 0.2 } }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
