'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';

const stats = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 8, suffix: '+', label: 'Years of Experience' },
  { value: 40, suffix: '+', label: 'Industry Awards' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display text-5xl font-black text-accent md:text-6xl">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            By the Numbers
          </span>
          <h2 className="font-display text-3xl font-black text-white md:text-4xl">
            <AnimatedText text="Results that speak" />
            <br />
            <AnimatedText
              text="for themselves"
              className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent"
              delay={0.2}
            />
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-px bg-white/5 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center gap-2 bg-surface-elevated px-6 py-12 text-center"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <span className="text-sm text-white/50">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
