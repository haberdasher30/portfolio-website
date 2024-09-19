import Image from 'next/image';

import IntroVideo from './IntroVideo';

const Hero = async () => {
  return (
    <div className="w-full h-svh bg-[url('/background.svg')] bg-contain bg-fixed flex items-center justify-center">
      <div className='container flex flex-col md:flex-row items-center justify-center md:justify-between w-full h-full p-5 gap-20 mt-16 md:mt-0'>
        <Image
          priority
          width={1988}
          height={3740}
          src='/funko.png'
          alt='Hero Funko'
          className='w-auto h-[45%] lg:h-[50%] bg-transparent select-none'
        />

        <IntroVideo />
      </div>
    </div>
  );
};

export default Hero;
