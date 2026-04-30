import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  Services: ['Brand Identity', 'Web Design', 'Motion Design', 'Development', 'Strategy'],
  Company: ['About', 'Process', 'Careers', 'Blog', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <span className="text-sm font-black text-black">RS</span>
              </span>
              <span className="font-display text-xl font-bold text-white">
                Recreate<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/50">
              We craft premium digital experiences that push the boundaries of what&apos;s possible
              on the web.
            </p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all duration-300 hover:border-accent/50 hover:text-accent"
                  data-cursor-hover
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/30">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-white/30 md:flex-row">
          <p>© {new Date().getFullYear()} Recreate Studio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Crafted with <span className="text-accent">♥</span> for the web
          </p>
        </div>
      </div>
    </footer>
  );
}
