import Image from "next/image";

const Profile = () => {
  return (
    <div className="basis-0 md:basis-4/6 w-full h-full md:h-[500px] bg-backgroundContainer rounded-lg text-whiteColor p-5">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-greenColor text-center text-2xl md:text-4xl font-bold">
          NISHIT BATWAL
        </h1>
      </div>
    </div>
  );
};

export default Profile;
