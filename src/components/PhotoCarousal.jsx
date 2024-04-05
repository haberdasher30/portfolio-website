import Image from "next/image";

const PhotoCarousal = () => {
  return (
    <div className="grid place-items-center col-span-2 bg-backgroundContainer rounded-lg">
      <Image
        src="/profile.png"
        alt="Vercel Logo"
        width={100}
        height={0}
        loading="lazy"
        className="w-[300px] h-auto"
      />
    </div>
  );
};

export default PhotoCarousal;
