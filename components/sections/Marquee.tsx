'use client';

const items = [
  'Brand Identity',
  'Web Design',
  'Motion Design',
  'Development',
  'UX Strategy',
  'Creative Direction',
  'Digital Marketing',
  'Visual Systems',
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 gap-12 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} whitespace-nowrap`}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-2xl font-bold text-white/20">
            {item}
            <span className="text-accent/60">✦</span>
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 gap-12 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} whitespace-nowrap`}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-2xl font-bold text-white/20">
            {item}
            <span className="text-accent/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-white/5 bg-surface py-8">
      <div className="flex flex-col gap-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
