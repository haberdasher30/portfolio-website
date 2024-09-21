'use client';

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from '@material-tailwind/react';
import Image from 'next/image';

const timeLineContents = [
  {
    title: `BIRTH - 30/06/2004`,
    content: `From a young age, I was always deeply concerned about the environment. I harbored an inner passion for serving the environment and contributing positively to society. In addition to this, I had a strong interest in puzzles and technology, which allowed me to quickly grasp various technological concepts. This interest naturally developed into a profound enthusiasm for the field of technology.`,
    imgUrl: '/timeline/birth.jpg',
  },
  {
    title: `COLLEGE - 18/09/2022`,
    content: `I embarked on my Bachelor of Engineering in Computer Science at the Birla Institute of Technology and Science (BITS), Pilani - Dubai Campus. This campus presented me with wonderful new opportunities to understand technological concepts and engage with various clubs and associations. These experiences helped me grow and enhance my passions and learning.`,
    imgUrl: '/timeline/college.jpeg',
  },
  {
    title: `GDSC BITS PILANI DUBAI - 17/08/2023`,
    content: `I was accepted into the Google Developer Student Club (GDSC) at BITS Pilani, Dubai Campus, as a Technology Marketing and Events Executive across three departments. I dedicated myself to integrating my passion for sustainability with my love for technology, aiming to make GDSC the best tech association on our campus. I joined the Cybersecurity Network and made significant contributions to that sector.`,
    imgUrl: '/timeline/gdsc.jpeg',
  },
  {
    title: `Hack the Box University Admin - 17/02/2024`,
    content: `As the University Admin for Hack The Box Universities at BITS Pilani, Dubai Campus, I took the initiative to organize a workshop that turned out to be a remarkable success. The event attracted over 40 registrations, demonstrating the strong interest and enthusiasm within our campus community. This workshop not only provided valuable learning opportunities but also fostered a collaborative environment where team members could engage and enhance their skills. The positive response and active participation from students highlighted the vibrant and growing interest in cybersecurity at our university.`,
    imgUrl: '/timeline/university_admin.jpg',
  },
  {
    title: `FUTURE GDSC LEAD - TBD`,
    content: `As the potential future GDSC Lead, it would be my duty and responsibility to foster a passion and love for technology among our students and create a culture that supports their development. Many students, burdened by academic pressures, are not fully developing their skills and enthusiasm for technology. As the next possible GDSC Lead, I plan to expand GDSC and work harder, leveraging my experience to revolutionize the love for technology among students at BITS Pilani, Dubai Campus, by leading the largest tech community on our campus.`,
    imgUrl: '/timeline/gdsc_lead.jpg',
  },
];

export const metadata = {
  title: 'About | Nishit Batwal',
  description: 'About Nishit Batwal',
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
    title: 'About | Nishit Batwal',
    description: 'About Nishit Batwal',
    image: '/logo.jpeg',
  },
};

const About = () => {
  return (
    <div className='container flex flex-col items-center justify-center gap-5 md:gap-8 w-full mt-[100px] md:mt-[120px]'>
      <h1 className='text-2xl md:text-5xl text-whiteColor font-bold'>
        ABOUT ME
      </h1>

      <div className='flex flex-col items-center justify-center gap-10 md:gap-20 w-full'>
        <Timeline className='w-full'>
          {timeLineContents.map((content, index) => (
            <TimelineItem key={index} className='w-full px-5'>
              {index !== timeLineContents.length - 1 && (
                <TimelineConnector className='[&>span]:bg-greenColor pl-8' />
              )}
              <TimelineHeader className='text-greenColor font-extrabold text-lg md:text-3xl -mt-1'>
                <TimelineIcon className='bg-greenColor p-2'>
                  <div className='bg-whiteColor p-1 rounded-full' />
                </TimelineIcon>
                {content.title}
              </TimelineHeader>

              <TimelineBody
                className={`w-full ${
                  index !== timeLineContents.length - 1 && 'pb-10'
                }`}
              >
                <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-5 items-start justify-center'>
                  <p className='col-span-3 text-whiteColor text-md md:text-2xl text-balance mt-2 w-[80%]'>
                    {content.content}
                  </p>

                  <Image
                    src={content.imgUrl}
                    alt={content.title}
                    width={1000}
                    height={1000}
                    className='w-[80%] md:w-full h-auto col-span-1'
                  />
                </div>
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default About;
