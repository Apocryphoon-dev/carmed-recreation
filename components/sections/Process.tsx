'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We start by deeply understanding your business, audience, and goals. This foundational phase shapes every decision that follows.',
    duration: '1–2 weeks',
  },
  {
    number: '02',
    title: 'Research & Concept',
    description:
      'Competitive analysis, moodboards, and wireframes. We explore ideas widely before committing to a creative direction.',
    duration: '1–2 weeks',
  },
  {
    number: '03',
    title: 'Design & Prototype',
    description:
      'High-fidelity designs with interactive prototypes. You see exactly how the final product will look and feel before we write a line of code.',
    duration: '2–3 weeks',
  },
  {
    number: '04',
    title: 'Development',
    description:
      'We build with clean, performant code using modern frameworks. Daily updates keep you in the loop throughout the build.',
    duration: '3–5 weeks',
  },
  {
    number: '05',
    title: 'Testing & Refinement',
    description:
      'Thorough QA across devices and browsers. We fine-tune every interaction until the experience feels just right.',
    duration: '1 week',
  },
  {
    number: '06',
    title: 'Launch & Support',
    description:
      'We handle deployment, monitor performance, and provide ongoing support to ensure long-term success.',
    duration: 'Ongoing',
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsapCtx: { revert: () => void } | null = null;

    const initGsap = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsapCtx = gsap.context(() => {
        const items = containerRef.current?.querySelectorAll('.process-item');
        const line = containerRef.current?.querySelector('.timeline-line-fill');

        if (items && line) {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
                end: 'bottom 30%',
                scrub: true,
              },
            }
          );

          items.forEach((item, i) => {
            gsap.fromTo(
              item,
              { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
              {
                opacity: 1,
                x: 0,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          });
        }
      }, containerRef);
    };

    initGsap();
    return () => gsapCtx?.revert();
  }, []);

  return (
    <section id="process" className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            How We Work
          </span>
          <h2 className="font-display text-4xl font-black tracking-tight text-white md:text-5xl">
            <AnimatedText text="Our proven" className="text-white" />
            <br />
            <AnimatedText
              text="creative process"
              className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent"
              delay={0.2}
            />
          </h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/5 lg:block">
            <div
              className="timeline-line-fill h-full w-full origin-top bg-gradient-to-b from-accent/60 to-transparent"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`process-item relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2'
                }`}
              >
                {/* Content */}
                <div className={`${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <div
                    className={`mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 ${
                      i % 2 === 0 ? 'lg:ml-auto' : ''
                    }`}
                  >
                    <span className="font-display text-xs font-bold text-accent">{step.number}</span>
                    <span className="text-xs text-white/50">{step.duration}</span>
                  </div>
                  <h3 className="font-display mb-3 text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{step.description}</p>
                </div>

                {/* Center dot — hidden on mobile, shown on lg */}
                <div className="absolute left-1/2 top-2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-background lg:block" />

                {/* Empty space for the other column */}
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
