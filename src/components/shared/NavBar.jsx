'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/button';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/firebase/config';

import Drawer from './Drawer';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  let fileUrl = '';

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'cv', '1');

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        fileUrl = docSnap.data().file[0].downloadURL;
      } else {
        console.log('Error fetching data from server!');
      }
    };
    fetchData();
  }, []);

  return (
    <div className='top-0 z-50 fixed w-full flex flex-row items-center justify-between bg-backgroundNavbar px-5 py-3 border-borderColor border-b-2'>
      <div className='flex flex-row items-center gap-5'>
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

        <h1 className='code text-lg md:text-3xl font-bold text-greenColor'>
          NISHIT BATWAL
        </h1>
      </div>

      <div className='flex flex-row items-center justify-center gap-2 md:gap-4'>
        <Link
          href={fileUrl}
          aria-label='Downlod Resume'
          download='Nishit Batwal - CV.pdf'
        >
          <Button className='bg-backgroundGreen hover:bg-backgroundGreenHover text-greenColor rounded-md cursor-pointer py-4 px-4 md:px-8 h-full font-semibold tracking-[2px] text-xs'>
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
