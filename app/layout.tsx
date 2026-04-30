import type { Metadata, Viewport } from 'next';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import LenisProvider from '@/components/ui/LenisProvider';

export const metadata: Metadata = {
  title: 'Recreate Studio — Digital Creative Agency',
  description:
    'Premium digital creative agency crafting cutting-edge web experiences, bold brand identities, and unforgettable interactions for forward-thinking companies.',
  keywords: ['digital agency', 'web design', 'brand identity', 'motion design', 'development'],
  authors: [{ name: 'Recreate Studio' }],
  openGraph: {
    title: 'Recreate Studio — Digital Creative Agency',
    description: 'Premium digital creative agency crafting cutting-edge web experiences.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-white antialiased">
        <LenisProvider />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
