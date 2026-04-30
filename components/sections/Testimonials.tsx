'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, Nexus Tech',
    quote:
      'Recreate Studio transformed our digital presence completely. The attention to detail and creative vision they brought to our project was beyond anything we expected.',
    initials: 'SC',
    color: '#00ff88',
  },
  {
    name: 'Marcus Oliveira',
    role: 'Founder, Bloom Agency',
    quote:
      'Working with this team was an absolute pleasure. They nailed our brand identity on the first round and delivered the website ahead of schedule. Highly recommend.',
    initials: 'MO',
    color: '#6366f1',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Product, Orbit',
    quote:
      'The animations and interactions on our new site have become a talking point with every client. Our conversion rate jumped 40% in the first month after launch.',
    initials: 'PS',
    color: '#f59e0b',
  },
  {
    name: 'James Kowalski',
    role: 'CMO, Vantage Capital',
    quote:
      'We came in with a vague brief and they came back with a concept that was exactly what we didn\'t know we needed. Pure creative magic backed by solid strategy.',
    initials: 'JK',
    color: '#ec4899',
  },
  {
    name: 'Aisha Mensah',
    role: 'Director, Cultura Labs',
    quote:
      'Fast, professional, and genuinely invested in our success. Recreate Studio is now our go-to partner for everything digital.',
    initials: 'AM',
    color: '#14b8a6',
  },
];

export default function Testimonials() {
  const dragRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="overflow-hidden bg-background py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </span>
          <h2 className="font-display text-4xl font-black tracking-tight text-white md:text-5xl">
            <AnimatedText text="Loved by our" className="text-white" />
            <br />
            <AnimatedText
              text="clients worldwide"
              className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent"
              delay={0.2}
            />
          </h2>
          <p className="mt-4 text-sm text-white/40">Drag to explore →</p>
        </div>

        <motion.div
          ref={dragRef}
          drag="x"
          dragConstraints={dragRef}
          className="flex cursor-grab gap-6 active:cursor-grabbing"
          style={{ width: 'max-content' }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="w-[340px] shrink-0 rounded-2xl border border-white/5 bg-surface-elevated p-8 md:w-[400px]"
              whileHover={{ y: -4, borderColor: 'rgba(0,255,136,0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <Quote size={28} className="mb-6 text-accent/30" />
              <p className="mb-8 text-sm leading-relaxed text-white/70">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
