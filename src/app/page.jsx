import Hero from '@/components/home/Hero';
import GDSC from '@/components/home/GDSC';
import Tools from '@/components/home/Tools';
import Video from '@/components/home/Video';
import PortfolioTabs from '@/components/home/PortfolioTabs';

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-10 md:gap-20 w-full h-full'>
      <Hero />

      <Video />

      <Tools />

      <PortfolioTabs />

      <GDSC />
    </div>
  );
}
