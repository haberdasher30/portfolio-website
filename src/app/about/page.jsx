'use client';

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from '@material-tailwind/react';

const timeLineContents = [
  {
    title: 'School',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur possimus ipsa itaque laboriosam nulla error beatae architecto neque, expedita suscipit, aliquam consequuntur magnam tempora quia cumque aut. Consequuntur, molestiae sapiente.',
  },
  {
    title: 'High School',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur possimus ipsa itaque laboriosam nulla error beatae architecto neque, expedita suscipit, aliquam consequuntur magnam tempora quia cumque aut. Consequuntur, molestiae sapiente.',
  },
  {
    title: 'Undergraduate',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur possimus ipsa itaque laboriosam nulla error beatae architecto neque, expedita suscipit, aliquam consequuntur magnam tempora quia cumque aut. Consequuntur, molestiae sapiente.',
  },
];

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 md:gap-20 w-[50%] h-dvh'>
      <Timeline>
        {timeLineContents.map((content, index) => (
          <TimelineItem key={index}>
            {index !== timeLineContents.length - 1 && (
              <TimelineConnector className='[&>span]:bg-greenColor' />
            )}
            <TimelineHeader className='text-greenColor font-extrabold text-xl md:text-3xl -mt-1.5'>
              <TimelineIcon className='bg-greenColor p-2'>
                <div className='bg-whiteColor p-1 rounded-full' />
              </TimelineIcon>
              {content.title}
            </TimelineHeader>

            <TimelineBody
              className={`text-whiteColor text-sm md:text-lg text-left rounded-2xl w-full ${
                index !== timeLineContents.length - 1 && 'pb-10'
              }`}
            >
              {content.content}
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default About;
