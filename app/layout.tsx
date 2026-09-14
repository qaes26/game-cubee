import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'تحدي تقليد الوجوه والتعابير | Face Mimic Challenge',
  description: 'لعبة تفاعلية مرحة لتقليد ومطابقة تعابير الوجوه والصور المضحكة أمام الكاميرا.',
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className="antialiased min-h-screen selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
