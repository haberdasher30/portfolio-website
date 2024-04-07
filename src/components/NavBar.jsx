"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@nextui-org/button";

import Drawer from "./Drawer";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="top-0 fixed w-full flex flex-row items-center justify-between bg-backgroundNavbar px-5 py-3 border-borderColor border-b-2">
      <Image
        src="/logo.png"
        alt="Vercel Logo"
        width={100}
        height={0}
        priority
        className="rounded-full w-[50px] h-auto"
      />
      <Button
        onClick={() => setOpen(true)}
        className="bg-backgroundRed hover:bg-backgroundRedHover cursor-pointer text-redColor rounded-md py-4 px-4 md:px-8 h-full font-medium tracking-[2px] text-xs"
      >
        CONNECT WITH ME
      </Button>

      <Drawer isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default NavBar;
