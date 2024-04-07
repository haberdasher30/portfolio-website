import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-dvh bg-[url('/background.svg')] bg-contain bg-fixed flex items-center justify-center">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-5 w-full h-full">
        <Image
          width={1988}
          height={3740}
          src="/funko.png"
          className="w-auto h-[400px] md:h-[600px] bg-transparent"
          priority
        />

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="code relative w-[max-content] tracking-tighter text-2xl md:text-6xl font-bold z-10 before:absolute before:inset-0 before:animate-typewriter before:bg-backgroundRoot after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-whiteColor text-greenColor">
            Hi, I am Nishit Batwal.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
