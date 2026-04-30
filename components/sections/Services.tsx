'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2, Layers, Zap, Globe, BarChart3 } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Comprehensive visual identities that communicate your brand\'s essence and stand the test of time.',
    tags: ['Logo Design', 'Typography', 'Color Systems'],
  },
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'High-performance websites and web apps built with modern frameworks and best practices.',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description:
      'Intuitive interfaces and seamless experiences that delight users and drive conversions.',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    icon: Zap,
    title: 'Motion Design',
    description:
      'Captivating animations and micro-interactions that add personality and polish to your product.',
    tags: ['GSAP', 'Framer Motion', 'After Effects'],
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description:
      'Data-driven strategies that align your digital presence with your business objectives.',
    tags: ['SEO', 'Analytics', 'Growth'],
  },
  {
    icon: BarChart3,
    title: 'Performance',
    description:
      'Optimization services that ensure your site is blazing fast and ranks well on search engines.',
    tags: ['Core Web Vitals', 'Lighthouse', 'CDN'],
  },
];

function TiltCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [gradient, setGradient] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -15;
    const rotateY = ((x / rect.width) - 0.5) * 15;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    );
    const gradX = (x / rect.width) * 100;
    const gradY = (y / rect.height) * 100;
    setGradient(`radial-gradient(circle at ${gradX}% ${gradY}%, rgba(0,255,136,0.08) 0%, transparent 60%)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
    setGradient('');
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: transform ? 'none' : 'transform 0.5s ease',
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-elevated p-8 transition-[border-color] duration-300 hover:border-accent/20"
      data-cursor-hover
    >
      {/* Hover gradient */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: gradient || undefined }}
      />
      {/* Glow border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[inset_0_0_0_1px_rgba(0,255,136,0.2)] transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-black">
          <Icon size={22} />
        </div>
        <h3 className="font-display mb-3 text-lg font-bold text-white">{service.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-white/50">{service.description}</p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-surface py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            What We Do
          </span>
          <h2 className="font-display text-4xl font-black tracking-tight text-white md:text-5xl">
            <AnimatedText text="Services built for" />
            <br />
            <AnimatedText
              text="exceptional outcomes"
              className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent"
              delay={0.2}
            />
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <TiltCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
