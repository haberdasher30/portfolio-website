import Hero from '@/components/home/Hero';
import Tools from '@/components/home/Tools';
import Videos from '@/components/home/Videos';
import PortfolioTabs from '@/components/home/PortfolioTabs';
import Introduction from '@/components/home/Introduction';

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
