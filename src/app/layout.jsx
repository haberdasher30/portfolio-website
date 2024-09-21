import './globals.css';

import { Analytics } from '@vercel/analytics/react';

import NavBar from '@/components/shared/NavBar';
import { Providers } from '@/components/shared/Provider';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#141d2b',
};

export const metadata = {
  title: 'Nishit Batwal | Portfolio',
  description: "Nishit Batwal's portfolio",
  image: '/logo.jpeg',
  metadataBase: new URL('https://www.nishitbatwal.com/'),
  openGraph: {
    siteName: 'Nishit | Portfolio',
    type: 'website',
    locale: 'en_US',
    image: '/logo.jpeg',
  },
  applicationName: 'Nishit Batwal | Portfolio',
  appleWebApp: {
    title: 'Nishit Batwal | Portfolio',
    statusBarStyle: 'default',
    capable: true,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    apple: [
      {
        url: '/apple-icon-57x57.png',
        sizes: '57x57',
        type: 'image/png',
      },
      {
        url: '/apple-icon-60x60.png',
        sizes: '60x60',
        type: 'image/png',
      },
    ],
  },
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
