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
  title: 'KareerKonnect | Empowering Your Job Search and Career Development',
  description:
    'Unlock your potential with KareerKonnect. Access diverse job opportunities, internships, and mentorship programs tailored to graduates seeking success in the job market.',
  metadataBase: new URL('https://www.kareerkonnect.vercel.app/'),
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/favicon/favicon.ico',
    shortcut: '/images/favicon/favicon-16x16.png',
    apple: '/images/favicon/apple-touch-icon.png',
  },
  manifest: `/images/favicon/site.webmanifest`,
  openGraph: {
    title: 'KareerKonnect | Empowering Your Job Search and Career Development',
    description:
      'Unlock your potential with KareerKonnect. Access diverse job opportunities, internships, and mentorship programs tailored to graduates seeking success in the job market.',
    url: 'https://www.kareerkonnect.vercel.app/',
    siteName: 'KareerKonnect',
    images: [
      {
        url: 'https://www.kareerkonnect.vercel.app/images/og.png',
        width: 800,
        height: 600,
        alt: 'KareerKonnect',
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
