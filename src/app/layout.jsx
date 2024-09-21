import './globals.css';

import { Analytics } from '@vercel/analytics/react';

import NavBar from '@/components/shared/NavBar';
import { Providers } from '@/components/shared/Provider';

export const metadata = {
  title: 'Portfolio | Nishit Batwal',
  description: 'Portfolio of Nishit Batwal',
  openGraph: {
    title: 'Portfolio | Nishit Batwal',
    description: 'Portfolio of Nishit Batwal',
    url: 'https://nishitbatwal.com',
    siteName: 'Your Website',
    images: [
      {
        url: 'https://nishitbatwal.com/logo.png',
        width: 1080,
        height: 1080,
        alt: 'Nishit Batwall',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Nishit Batwal',
    description: 'Portfolio of Nishit Batwal',
    images: ['https://nishitbatwal.com/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon-32x32.png',
    apple: '/icons/apple-touch-icon.png',
  },
  themeColor: '#141d2b',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='bg-backgroundRoot'>
      <body className='dark'>
        <Providers>
          <main className='min-h-screen w-screen flex flex-col items-center'>
            <NavBar />
            {children}
          </main>
        </Providers>

        <Analytics />
      </body>
    </html>
  );
}
