import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';

import { content } from '@/data/gdsc';

const GDSC = () => {
  return (
    <div className='container flex flex-col items-center justify-center gap-5 w-full p-5'>
      <h1 className='text-2xl md:text-4xl text-greenColor font-bold text-center'>
        Google Developer Student Club
      </h1>

      {/* <div className='flex flex-col md:flex-row items-start justify-center gap-5 w-full h-full'> */}
      <div className='flex flex-col md:grid lg:grid md:grid-cols-2 lg:grid-cols-4 items-start justify-center gap-5 w-full h-full'>
        {content.map((item, index) => (
          <Card
            key={index}
            className={`w-full h-max border-backgroundContainer text-whiteColor`}
            style={{ backgroundColor: `var(--${item.color})` }}
          >
            <CardBody className='w-full h-full flex flex-col items-center justify-start gap-5 md:gap-10 text-center px-5 py-5 md:py-10'>
              <h1 className='text-xl md:text-xl font-semibold'>{item.title}</h1>

              <div className='w-full flex items-center justify-center'>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className='w-[80%] h-auto rounded-lg'
                />
              </div>

              <div className='px-4 md:p-1'>
                <ul className='list-disc text-base font-medium text-left'>
                  {item.content.map((i, index) => (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GDSC;
