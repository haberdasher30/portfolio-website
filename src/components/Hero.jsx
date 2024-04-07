import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-dvh bg-[url('/background.svg')] bg-contain bg-fixed flex items-center justify-center">
      <div className="container flex flex-row items-center justify-center gap-5 w-full h-full">
        <Image
          width={1988}
          height={3740}
          src="/funko.png"
          className="w-auto h-[70%] bg-transparent"
          priority
        />

        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="relative w-[max-content] text-6xl font-bold before:absolute before:inset-0 before:animate-typewriter before:bg-backgroundRoot after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-whiteColor text-greenColor">
            Hi, I am Nishit Batwal..
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
