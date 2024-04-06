import Image from "next/image";
import {
  Card,
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const PortfolioCard = ({ content }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div onClick={onOpen}>
        <Card className="w-[300px] bg-backgroundContainer border-backgroundContainer text-whiteColor hover:scale-105 transition-all">
          <CardBody className="flex flex-col items-center justify-center gap-5 text-center px-3 py-10">
            <Image
              src={content.src}
              alt={content.title}
              width={100}
              height={0}
              loading="lazy"
              className="w-[80%] h-auto"
            />

            <h1 className="text-xl font-medium">{content.title}</h1>

            <p className="text-sm font-light">{content.description}</p>
          </CardBody>
        </Card>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        closeButton={<></>}
      >
        <ModalContent className="gap-5 bg-backgroundNavbar p-5 mx-5 md:mx-0">
          {(onClose) => (
            <>
              <ModalHeader>
                <p className="text-greenColor text-center w-full text-xl md:text-2xl">
                  {content.title}
                </p>
              </ModalHeader>
              <ModalBody>
                <p className="text-whiteColor text-center w-full">
                  {content.description}
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-row items-center justify-center">
                <Button
                  onPress={onClose}
                  className="bg-backgroundRed hover:bg-backgroundRedHover cursor-pointer text-redColor rounded-md py-4 px-4 md:px-8 h-full font-medium tracking-[2px] text-xs"
                >
                  CLOSE
                </Button>

                <Button
                  onPress={onClose}
                  className="bg-backgroundContainer hover:bg-backgroundRoot cursor-pointer text-whiteColor rounded-md py-4 px-4 md:px-8 h-full font-medium tracking-[2px] text-xs"
                >
                  VERIFY
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const PortfolioContent = ({ items }) => {
  return (
    <div
      className="scroll-smooth overflow-x-scroll w-full"
      style={{
        scrollbarWidth: "thin",
        scrollBehavior: "smooth",
        scrollbarColor: "#9fef00 #1a2332",
      }}
    >
      <div className="flex flex-row items-center justify-center gap-5 pt-2 pb-4 w-max">
        {items.map((item, index) => (
          <PortfolioCard key={index} content={item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioContent;
