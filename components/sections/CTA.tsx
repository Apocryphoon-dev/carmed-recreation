'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-surface py-32">
      {/* Animated gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(0,255,136,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)',
        }}
      />
      <motion.div
        animate={{
          background: [
            'radial-gradient(ellipse at 30% 50%, rgba(0,255,136,0.08) 0%, transparent 60%)',
            'radial-gradient(ellipse at 70% 50%, rgba(0,255,136,0.08) 0%, transparent 60%)',
            'radial-gradient(ellipse at 30% 50%, rgba(0,255,136,0.08) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0"
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block text-xs font-semibold uppercase tracking-widest text-accent"
        >
          Ready to Start?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mb-6 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl"
        >
          Let&apos;s build something{' '}
          <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
            extraordinary
          </span>{' '}
          together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 text-lg leading-relaxed text-white/50"
        >
          We take on a limited number of projects each quarter to ensure every client gets our
          full attention. Let&apos;s talk about your project today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            className="rounded-full bg-accent px-10 py-4 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,255,136,0.5)]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
          </MagneticButton>
          <MagneticButton
            className="rounded-full border border-white/10 px-10 py-4 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white"
            onClick={() => {}}
          >
            View Case Studies
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
