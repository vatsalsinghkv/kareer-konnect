import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import '@/styles/globals.css';

import { cn } from '@/lib/utils';

import { Footer, Navbar } from '@/components/layout';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  style: ['normal', 'italic'],
  weight: ['100', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'GetLifeGard | Defend, Protect & Survive',
  description:
    'Protect You & Your Loved Ones with The Safekey. Strengthen Your Personal Safety with a rechargeable, loud, and compact SOS Alarm.',
  metadataBase: new URL('https://www.getlifegard.com/'),
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/favicon/favicon.ico',
    shortcut: '/images/favicon/favicon-16x16.png',
    apple: '/images/favicon/apple-touch-icon.png',
  },
  manifest: `/images/favicon/site.webmanifest`,
  openGraph: {
    title: 'GetLifeGard | Defend, Protect & Survive',
    description:
      'Protect You & Your Loved Ones with The Safekey. Strengthen Your Personal Safety with a rechargeable, loud, and compact SOS Alarm',
    url: 'https://www.getlifegard.com/',
    siteName: 'GetLifeGard',
    images: [
      {
        url: 'https://www.getlifegard.com/images/og.png',
        width: 800,
        height: 600,
        alt: 'GetLifeGard',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn('min-h-screen font-sans antialiased', poppins.className)}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
