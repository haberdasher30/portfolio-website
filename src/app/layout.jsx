import './globals.css';

import { Analytics } from '@vercel/analytics/react';

import NavBar from '@/components/shared/NavBar';
import { Providers } from '@/components/shared/Provider';

export const metadata = {
  title: 'Portfolio | Nishit Batwal',
  description: "Nishit Batwal's portfolio",
  image: '/logo.jpeg',
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
