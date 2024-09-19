'use client';

import { Spinner } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Carousel } from '@material-tailwind/react';
import { getDocs, collection } from 'firebase/firestore';

import { db } from '@/firebase/config';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const videosCollection = await getDocs(collection(db, 'videos'));

      setVideos(videosCollection.docs.map((doc) => doc.data()));
    };

    getVideos();
  }, []);

  return (
    <div className='container flex flex-col items-center justify-center gap-5 md:gap-10 w-full px-5 md:px-0'>
      <h1 className='text-2xl md:text-4xl text-greenColor font-bold'>VIDEOS</h1>

      {videos.length === 0 ? (
        <Spinner size='lg' color='success' />
      ) : (
        <Carousel
          loop
          autoplay
          autoplayDelay={1000}
          className='rounded-xl'
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {videos.map((video, index) => {
            return (
              <iframe
                key={index}
                allowFullScreen
                frameBorder='0'
                title={video.title}
                src={video.videoUrl}
                className='w-full aspect-video'
                referrerPolicy='strict-origin-when-cross-origin'
                allow='accelerometer; autoplay; encrypted-media'
              />
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default Videos;
