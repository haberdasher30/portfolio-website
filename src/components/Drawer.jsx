import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import Image from "next/image";

import socials from "@/data/socials";
import Link from "next/link";

const Drawer = ({ isOpen, setOpen }) => {
  return (
    <Modal
      scrollBehavior="inside"
      isOpen={isOpen}
      onOpenChange={setOpen}
      placement="center"
      backdrop="blur"
      size="full"
      hideCloseButton={true}
      classNames={{
        wrapper: "flex justify-end w-screen h-screen max-h-screen",
      }}
      motionProps={{
        variants: {
          enter: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            x: 50,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      className="rounded-md max-w-sm w-full h-screen max-h-screen bg-backgroundNavbar"
    >
      <ModalContent className="w-[80%] py-5 gap-5">
        {(onClose) => (
          <>
            <ModalHeader>
              <p className="text-greenColor text-center w-full text-2xl">
                CONNECT WITH ME
              </p>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-center gap-5">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    className="flex flex-row items-center gap-5 bg-backgroundContainer border-backgroundContainer hover:scale-105 transition-all rounded-lg p-5 w-full h-full"
                  >
                    <Image
                      src={social.src}
                      alt={social.alt}
                      width={100}
                      height={0}
                      loading="lazy"
                      className="w-[40px] md:w-[60px] h-auto invert"
                    />

                    <p className="text-grayColor text-center text-lg md:text-xl font-bold">
                      {social.alt}
                    </p>
                  </Link>
                ))}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default Drawer;
