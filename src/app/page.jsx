import Hero from '@/components/home/Hero';
import Tools from '@/components/home/Tools';
import Videos from '@/components/home/Videos';
import PortfolioTabs from '@/components/home/PortfolioTabs';
import Introduction from '@/components/home/Introduction';

export const metadata = {
  title: 'Home | Nishit Batwal',
  description: 'Home Nishit Batwal',
  keywords: [
    'portfolio',
    'nishit batwal',
    'cybersecurity',
    'gdsc',
    'gdg',
    'developer student clubs',
    'google developer groups',
    'google',
    'developer',
    'student',
    'clubs',
    'groups',
    'hack the box',
    'hackthebox',
  ],
  openGraph: {
    url: 'https://www.nishitbatwal.com/',
    type: 'website',
    title: 'Home | Nishit Batwal',
    description: 'Home Nishit Batwal',
    image: '/logo.jpeg',
  },
};

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-10 md:gap-20 mb-10 md:mb-20 w-full h-full'>
      <Hero />
      <Introduction />
      <Tools />
      <PortfolioTabs />
      <Videos />
    </div>
  );
}
