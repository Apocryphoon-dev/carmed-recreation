'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const wordVariants = {
  hidden: { opacity: 0, y: 60, skewY: 5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i + delay / 0.08}
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
