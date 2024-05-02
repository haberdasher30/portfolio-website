import Image from 'next/image';
import { db } from '@/firebase/config';
import { Button } from '@nextui-org/react';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';

const Hero = async () => {
  let intro = '';

  const docRef = doc(db, 'hero', '1');

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    intro = docSnap.data().intro;
  } else {
    console.log('Error fetching data from server!');
  }

  return (
    <div className="w-full h-svh bg-[url('/background.svg')] bg-contain bg-fixed flex items-center justify-center">
      <div className='container hidden lg:flex flex-row items-center justify-between w-full h-full p-5'>
        <Image
          width={1988}
          height={3740}
          src='/funko.png'
          alt='Hero Funko'
          className='w-auto h-[600px] bg-transparent select-none'
          priority
        />

        <div className='flex flex-col items-start justify-center gap-10 w-max'>
          <h1 className='code select-none relative w-max tracking-tighter text-6xl font-bold z-10 before:absolute before:inset-0 before:animate-typewriter before:bg-backgroundRoot after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-whiteColor text-greenColor'>
            Hi, I am NISHIT BATWAL.
          </h1>

          <h1 className='text-xl font-semibold text-whiteColor whitespace-break-spaces max-w-screen-md'>
            {intro}
          </h1>

          <Link href='/about'>
            <Button className='bg-backgroundContainer hover:bg-backgroundNavbar text-greenColor cursor-pointer py-4 px-10 h-full font-semibold tracking-[2px] text-sm'>
              ABOUT ME
            </Button>
          </Link>
        </div>
      </div>

      <div className='container flex lg:hidden flex-col items-center justify-center gap-10 w-full h-full p-5 mt-16'>
        <div className='flex flex-col items-center justify-center w-full'>
          <h1 className='code select-none relative w-max tracking-tighter text-2xl font-bold z-10 before:absolute before:inset-0 before:animate-typewriter before:bg-backgroundRoot after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-whiteColor text-greenColor'>
            Hi, I am NISHIT BATWAL.
          </h1>
        </div>

        <Image
          width={1988}
          height={3740}
          src='/funko.png'
          alt='Hero Funko'
          className='w-[45%] h-auto bg-transparent select-none'
          priority
        />

        <div className='flex flex-col items-center justify-center gap-5 w-full text-center'>
          <h1 className='text-sm font-semibold text-whiteColor whitespace-break-spaces w-full px-3'>
            I'm a computer science student skilled in defensive cybersecurity,
            marketing, and management. Passionate about integrating
            sustainability into project leadership.
          </h1>

          <Link href='/about'>
            <Button className='bg-backgroundContainer hover:bg-backgroundNavbar text-greenColor cursor-pointer py-4 px-8 h-full font-semibold tracking-[2px] text-sm'>
              ABOUT ME
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
