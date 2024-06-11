'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@nextui-org/button';

import Drawer from './Drawer';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='top-0 z-50 fixed w-full flex flex-row items-center justify-between bg-backgroundNavbar px-5 py-3 border-borderColor border-b-2'>
      <Link href='/'>
        <Image
          src='/logo.jpeg'
          alt='Vercel Logo'
          width={100}
          height={100}
          priority
          className='rounded-full w-[50px] md:w-[60px] h-auto'
        />
      </Link>

      <div className='flex flex-row items-center justify-center gap-2 md:gap-4'>
        <Link
          href='https://drive.google.com/file/d/1ZEsJF9K_PhEh5bPa_rQDm2C9Zjk1-2cA/view?usp=sharing'
          target='_blank'
        >
          <Button className='bg-backgroundContainer hover:bg-backgroundNavbar text-greenColor rounded-md cursor-pointer py-4 px-4 md:px-8 h-full font-semibold tracking-[2px] text-xs'>
            CV
          </Button>
        </Link>

        <Button
          onClick={() => setOpen(true)}
          className='bg-backgroundRed hover:bg-backgroundRedHover cursor-pointer text-redColor rounded-md py-4 px-4 md:px-8 h-full font-semibold tracking-[2px] text-xs'
        >
          <p className='hidden md:block'>CONNECT WITH ME</p>
          <p className='block md:hidden'>CONNECT</p>
        </Button>
      </div>

      <Drawer isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default NavBar;
