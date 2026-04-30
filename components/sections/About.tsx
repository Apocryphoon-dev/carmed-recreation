'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Strategy-first approach to every project',
  'Cross-disciplinary team of designers & developers',
  'Transparent process with weekly check-ins',
  'Built for performance and scalability',
];

export default function About() {
  return (
    <section id="about" className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative h-[520px] overflow-hidden rounded-2xl bg-surface-elevated">
              {/* Abstract composition */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-64 w-64 items-center justify-center">
                  {/* Rotating rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border border-accent/20"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-8 rounded-full border border-accent/10"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-16 rounded-full border border-accent/30"
                  />
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-accent">
                    <span className="font-display text-2xl font-black text-black">RS</span>
                  </div>
                </div>
              </div>
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                {[
                  { value: '8+', label: 'Years' },
                  { value: '120+', label: 'Projects' },
                  { value: '98%', label: 'Satisfaction' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex-1 rounded-xl border border-white/10 bg-background/60 p-3 backdrop-blur"
                  >
                    <div className="font-display text-xl font-black text-accent">{s.value}</div>
                    <div className="text-xs text-white/50">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              About Us
            </span>
            <h2 className="font-display mb-6 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              <AnimatedText text="We turn bold ideas into" className="text-white" />
              <br />
              <AnimatedText
                text="digital reality"
                className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent"
                delay={0.3}
              />
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/50">
              Recreate Studio is a premium digital creative agency founded on the belief that great
              design and technology should work hand in hand. We partner with ambitious brands to
              create experiences that are as beautiful as they are functional.
            </p>
            <ul className="mb-10 space-y-4">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-accent" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-black"
              data-cursor-hover
            >
              Learn more about us →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
