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
import Link from "next/link";
import Image from "next/image";

const PortfolioCard = ({ content }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div onClick={onOpen}>
        <Card className="w-[200px] md:w-[300px] bg-backgroundContainer border-backgroundContainer text-whiteColor hover:scale-105 transition-all cursor-pointer">
          <CardBody className="flex flex-col items-center justify-center gap-5 text-center px-3 py-6 md:py-10">
            <Image
              src={content.image[0].downloadURL}
              alt={content.title}
              width={100}
              height={0}
              className="w-[70%] md:w-[80%] h-auto"
            />

            <h1 className="text-lg mdtext-xl font-medium">{content.title}</h1>

            <p className="text-xs md:text-sm font-light">
              {content.shortDescription}
            </p>
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
        <ModalContent className="gap-5 bg-backgroundContainer p-5 mx-5 md:mx-0">
          {(onClose) => (
            <>
              <ModalHeader>
                <p className="text-greenColor text-center w-full text-xl md:text-3xl">
                  {content.title}
                </p>
              </ModalHeader>
              <ModalBody>
                <p className="text-whiteColor text-center w-full text-sm md:text-base">
                  {content.longDescription}
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-row items-center justify-center gap-5">
                <Button
                  onPress={onClose}
                  className="bg-backgroundRed hover:bg-backgroundRedHover cursor-pointer text-redColor rounded-md py-4 px-4 md:px-8 h-full font-medium tracking-[2px] text-xs"
                >
                  CLOSE
                </Button>

                <Link href={content.verify} target="_blank">
                  <Button
                    onPress={onClose}
                    className="bg-backgroundNavbar hover:bg-backgroundRoot cursor-pointer text-whiteColor rounded-md py-4 px-4 md:px-8 h-full font-medium tracking-[2px] text-xs"
                  >
                    VERIFY
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PortfolioCard;
