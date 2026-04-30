'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const fields = [
    { key: 'name', label: 'Your Name', type: 'text', icon: User, placeholder: 'John Doe' },
    { key: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'john@example.com' },
  ];

  return (
    <section id="contact" className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Contact Us
            </span>
            <h2 className="font-display mb-6 text-4xl font-black tracking-tight text-white md:text-5xl">
              <AnimatedText text="Got a project" className="text-white" />
              <br />
              <AnimatedText
                text="in mind?"
                className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent"
                delay={0.2}
              />
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/50">
              Tell us about your project and we&apos;ll get back to you within 24 hours. No
              commitment required.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@recreatestudio.com' },
                { icon: MessageSquare, label: 'Response Time', value: 'Within 24 hours' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">{label}</div>
                    <div className="text-sm font-medium text-white">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-accent/20 bg-accent/5 py-20 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-black">
                  <Send size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Message Sent!</h3>
                <p className="max-w-sm text-sm text-white/50">
                  Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {fields.map(({ key, label, type, icon: Icon, placeholder }) => (
                  <div key={key} className="relative">
                    <label className="mb-2 block text-xs font-medium text-white/50">{label}</label>
                    <div className="relative">
                      <Icon
                        size={16}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          focused === key ? 'text-accent' : 'text-white/20'
                        }`}
                      />
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[key as keyof FormState]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        onFocus={() => setFocused(key)}
                        onBlur={() => setFocused(null)}
                        className={`w-full rounded-xl border bg-surface-elevated py-4 pl-11 pr-4 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 ${
                          focused === key
                            ? 'border-accent/40 shadow-[0_0_0_3px_rgba(0,255,136,0.08)]'
                            : 'border-white/5 hover:border-white/10'
                        }`}
                      />
                    </div>
                  </div>
                ))}

                <div>
                  <label className="mb-2 block text-xs font-medium text-white/50">Message</label>
                  <div className="relative">
                    <MessageSquare
                      size={16}
                      className={`absolute left-4 top-4 transition-colors duration-300 ${
                        focused === 'message' ? 'text-accent' : 'text-white/20'
                      }`}
                    />
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className={`w-full resize-none rounded-xl border bg-surface-elevated py-4 pl-11 pr-4 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 ${
                        focused === 'message'
                          ? 'border-accent/40 shadow-[0_0_0_3px_rgba(0,255,136,0.08)]'
                          : 'border-white/5 hover:border-white/10'
                      }`}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] disabled:opacity-70"
                  data-cursor-hover
                >
                  {loading ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
