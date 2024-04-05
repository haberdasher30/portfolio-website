import Image from "next/image";
import { Button } from "@nextui-org/button";

const NavBar = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between bg-backgroundNavbar px-5 py-3 border-borderColor border-b-2">
      <Image
        src="/logo.png"
        alt="Vercel Logo"
        width={50}
        height={0}
        priority
        className="rounded-full"
      />

      <Button className="bg-backgroundRed hover:bg-backgroundRedHover cursor-pointer text-redColor rounded-md py-4 px-8 h-full font-medium tracking-[2px] text-xs">
        CONTACT ME
      </Button>
    </div>
  );
};

export default NavBar;
