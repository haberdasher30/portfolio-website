"use client";

import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";

const PhotoCarousal = () => {
  return (
    <div className="basis-0 md:basis-2/6 w-full h-[300px] md:h-[500px] bg-backgroundContainer rounded-lg">
      <Carousel
        loop
        autoplay
        autoplayDelay={2000}
        className="rounded-lg w-full h-full"
        transition={{ ease: "easeInOut", duration: 0.5 }}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-2 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-2 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-whiteColor" : "w-4 bg-grayColor"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <Image
          width={3000}
          height={3000}
          src="/carousal/image1.jpg"
          alt="image1"
          className="h-full w-full object-fit object-contain"
        />
        <Image
          width={3000}
          height={3000}
          src="/carousal/image2.jpg"
          alt="image2"
          className="h-full w-full object-fit object-contain"
        />
        <Image
          width={3000}
          height={3000}
          src="/carousal/image3.jpg"
          alt="image3"
          className="h-full w-full object-fit object-contain"
        />
        <Image
          width={3000}
          height={3000}
          src="/carousal/image4.jpg"
          alt="image4"
          className="h-full w-full object-fit object-contain"
        />
      </Carousel>
    </div>
  );
};

export default PhotoCarousal;
