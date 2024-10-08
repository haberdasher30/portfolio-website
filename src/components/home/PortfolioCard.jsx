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
} from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';

const PortfolioCard = ({ content }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div onClick={onOpen}>
        <Card className='w-[250px] md:w-[300px] h-[300px] md:h-[400px] bg-backgroundContainer border-backgroundContainer text-whiteColor hover:scale-105 transition-all cursor-pointer'>
          <CardBody className='flex flex-col items-center justify-center gap-10 text-center px-1 md:px-3 py-6 md:py-10'>
            <div className='w-full h-[120px] md:h-[200px] flex items-center justify-center'>
              <Image
                src={content.logo && content.logo[0].downloadURL}
                alt={content.title}
                width={1000}
                height={1000}
                className='w-[100px] md:w-[150px] h-auto'
              />
            </div>

            <h1 className='text-lg md:text-xl font-medium'>{content.title}</h1>

            {content.status ? (
              <div className='flex flex-row gap-2 items-center justify-center bg-backgroundGreen py-2 px-4 rounded-md tracking-[2px]'>
                <Check className='text-greenColor' />
                <p className='text-greenColor text-xs'>Completed</p>
              </div>
            ) : (
              <div className='flex flex-row gap-2 items-center justify-center bg-backgroundYellow py-2 px-4 rounded-md tracking-[2px]'>
                <div className='w-2 h-2 bg-yellowColor rounded-full' />
                <p className='text-yellowColor text-xs'>Active</p>
              </div>
            )}
          </CardBody>
        </Card>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement='center'
        backdrop='blur'
        closeButton={<></>}
        size='3xl'
      >
        <ModalContent className='gap-5 bg-backgroundContainer p-2 md:p-5 mx-5 md:mx-0'>
          {(onClose) => (
            <>
              <ModalHeader>
                <p className='text-greenColor text-center w-full text-xl md:text-3xl'>
                  {content.title}
                </p>
              </ModalHeader>
              <ModalBody>
                <div
                  className='text-whiteColor text-center w-full text-sm md:text-base'
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
              </ModalBody>
              <ModalFooter className='flex flex-row items-center justify-center gap-5'>
                <Button
                  onPress={onClose}
                  className='bg-backgroundRed hover:bg-backgroundRedHover cursor-pointer text-redColor rounded-md py-4 px-4 md:px-8 h-full font-medium tracking-[2px] text-xs'
                >
                  CLOSE
                </Button>

                <Link href={content.verify ?? ''} target='_blank'>
                  <Button
                    onPress={onClose}
                    className='bg-backgroundNavbar hover:bg-backgroundRoot cursor-pointer text-whiteColor rounded-md py-4 px-4 md:px-8 h-full font-medium tracking-[2px] text-xs'
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
