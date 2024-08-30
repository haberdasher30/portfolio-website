import Hero from '@/components/home/Hero';
import Tools from '@/components/home/Tools';
import PortfolioTabs from '@/components/home/PortfolioTabs';
import GDSC from '@/components/home/GDSC';
import Video from '@/components/home/Video';

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-10 md:gap-20 w-full h-full'>
      <Hero />

      {/* <Video /> */}

      <Tools />

      <PortfolioTabs />

      {/* <GDSC /> */}
    </div>
  );
}
