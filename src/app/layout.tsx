import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZEETREAT | Premium Herbal Hair Oil',
  description: 'Experience the transformative power of ZEETREAT Herbal Hair Oil. Strengthens roots, nourishes scalp, and promotes healthy hair growth with premium natural ingredients.',
  keywords: 'herbal hair oil, natural hair care, hair growth, scalp treatment, premium hair oil',
  openGraph: {
    title: 'ZEETREAT | Premium Herbal Hair Oil',
    description: 'Discover ZEETREAT Herbal Hair Oil - premium natural ingredients for strong, healthy hair.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#faf9f7" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
