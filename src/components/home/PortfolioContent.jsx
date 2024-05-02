import PortfolioCard from "./PortfolioCard";

const PortfolioContent = ({ items }) => {
  return (
    <div
      className="scroll-smooth overflow-x-scroll w-full portfolioContent"
      style={{
        scrollbarWidth: "thin",
        scrollBehavior: "smooth",
        scrollbarColor: "#9fef00 #1a2332",
      }}
    >
      <div className="flex flex-row items-center justify-center gap-5 m-2 md:m-5 w-max h-full">
        {items?.map((item, index) => (
          <PortfolioCard key={index} content={item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioContent;
