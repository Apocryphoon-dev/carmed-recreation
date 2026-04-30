# Recreate Studio

A premium digital creative agency website built with Next.js 15, featuring dark theme, advanced animations, 3D particle effects, and a polished UI/UX.

## ✨ Features

- **3D Hero** — React Three Fiber particle field background
- **Custom Cursor** — Smooth magnetic cursor with spring physics
- **Smooth Scroll** — Lenis for buttery-smooth scrolling
- **Animations** — Framer Motion + GSAP ScrollTrigger
- **Tilt Cards** — Mouse-tracked 3D perspective on service cards
- **Animated Counter** — Stats that count up on viewport entry
- **Drag Carousel** — Testimonials with Framer Motion drag
- **Contact Form** — Styled form with animated focus states
- **Responsive** — Mobile-first, works on all screen sizes

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Animations | Framer Motion + GSAP + ScrollTrigger |
| 3D / WebGL | React Three Fiber + @react-three/drei |
| Smooth Scroll | @studio-freight/lenis |
| Icons | Lucide React |
| Fonts | Next/font — Inter + Syne |

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/Apocryphoon-dev/carmed-recreation.git
cd carmed-recreation
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint & Format

```bash
npm run lint
npm run format
```

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx        # Root layout — fonts, metadata, global providers
│   ├── page.tsx          # Home page — assembles all sections
│   └── globals.css       # Tailwind base + global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Fixed navbar with blur-on-scroll
│   │   └── Footer.tsx    # Site footer with links and social icons
│   ├── ui/
│   │   ├── CustomCursor.tsx    # Dot + ring cursor with spring physics
│   │   ├── MagneticButton.tsx  # Button with magnetic hover effect
│   │   ├── AnimatedText.tsx    # Word-stagger reveal animation
│   │   └── LenisProvider.tsx   # Client component that initializes Lenis
│   ├── sections/
│   │   ├── Hero.tsx         # Full-screen hero with 3D particles
│   │   ├── Marquee.tsx      # Infinite horizontal marquee
│   │   ├── About.tsx        # Two-column about section
│   │   ├── Services.tsx     # 3D tilt service cards grid
│   │   ├── Process.tsx      # GSAP ScrollTrigger timeline
│   │   ├── Stats.tsx        # Animated counter stats grid
│   │   ├── Testimonials.tsx # Draggable testimonials carousel
│   │   ├── CTA.tsx          # Call-to-action with animated background
│   │   └── Contact.tsx      # Styled contact form
│   └── three/
│       └── ParticleField.tsx  # R3F rotating particle system
├── hooks/
│   ├── useLenis.ts          # Smooth scroll hook
│   ├── useMousePosition.ts  # Mouse position tracker
│   └── useInView.ts         # IntersectionObserver hook
├── lib/
│   └── utils.ts             # cn(), lerp(), clamp(), mapRange()
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Background | `#0a0a0a` |
| Surface | `#111111` |
| Surface Elevated | `#1a1a1a` |
| Accent | `#00ff88` |
| Text Primary | `#ffffff` |
| Text Secondary | `#a1a1aa` |
| Border | `rgba(255,255,255,0.08)` |

## 🌐 Deploy

This project is ready to deploy to Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Apocryphoon-dev/carmed-recreation)

Or manually:

```bash
npm install -g vercel
vercel
```

## ♿ Accessibility

- `prefers-reduced-motion` respected — all animations disabled for users who prefer reduced motion
- `aria-label` attributes on icon-only buttons and links
- Semantic HTML structure throughout
- Keyboard navigable navigation

## 📄 License

MIT