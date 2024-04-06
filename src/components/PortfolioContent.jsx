import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";

const PortfolioCard = ({ content }) => {
  return (
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
