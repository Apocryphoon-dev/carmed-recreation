'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';

const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* 3D particle background */}
      <div className="absolute inset-0 opacity-70">
        <ParticleField />
      </div>

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.04)_0%,transparent_70%)]" />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
            Digital Creative Agency
          </span>
        </motion.div>

        <h1 className="font-display mb-6 text-6xl font-black leading-none tracking-tight md:text-8xl lg:text-9xl">
          <span className="block overflow-hidden">
            <AnimatedText text="We Create" className="text-white" />
          </span>
          <span className="block overflow-hidden">
            <AnimatedText
              text="Experiences"
              delay={0.2}
              className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent"
            />
          </span>
          <span className="block overflow-hidden">
            <AnimatedText text="That Matter" className="text-white/40" delay={0.4} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-white/50"
        >
          We are a premium digital studio crafting cutting-edge web experiences, bold brand
          identities, and unforgettable interactions for forward-thinking companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.4)]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Start a Project</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
          </MagneticButton>

          <MagneticButton
            className="rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Work
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-white/30 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
