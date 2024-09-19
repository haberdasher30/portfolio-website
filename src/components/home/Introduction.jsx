import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/firebase/config';

const Introduction = async () => {
  let intro = '';
  let quote = '';

  const docRef = doc(db, 'hero', '1');

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    intro = docSnap.data().intro;
    quote = docSnap.data().quote;
  } else {
    console.log('Error fetching data from server!');
  }

  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 w-full px-5 md:px-0 py-10 md:py-20'>
      <div className='w-full h-full'>
        <h1 className='code text-6xl md:text-6xl font-bold text-greenColor'>
          "{quote}"
        </h1>
      </div>

      <div className='flex flex-col items-start justify-center gap-10 w-full'>
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
  );
};

export default Introduction;
