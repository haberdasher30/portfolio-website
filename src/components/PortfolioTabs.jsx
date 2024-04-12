"use client";

import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "@/firebase/config";
import PortfolioContent from "./PortfolioContent";

export default function PortfolioTabs() {
  const [portfolioData, setPortfolioData] = useState({});
  const portfolioCollections = [
    "projects",
    "certificates",
    "experience",
    "blogs",
    "socialwork",
  ];

  useEffect(() => {
    const fetchPortfolio = () => {
      portfolioCollections.forEach(async (portfolioName) => {
        try {
          const collectionRef = collection(db, "projects");
          const collectionSnapshot = await getDocs(collectionRef);
          const localPortfolioData = collectionSnapshot.docs.map((doc) =>
            doc.data()
          );

          setPortfolioData((prevPortfolioData) => ({
            ...prevPortfolioData,
            [portfolioName]: localPortfolioData,
          }));
        } catch (error) {
          console.error("Error occurred while fetching data:", error);
        }
      });
    };

    fetchPortfolio();
  }, []);

  return (
    <div className="flex w-full flex-col px-5">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        classNames={{
          tabList:
            "gap-5 w-full relative rounded-none p-0 border-b border-grayColor border-divider",
          cursor: "w-full bg-greenColor",
          tab: "max-w-fit px-0 h-10 md:h-12",
          tabContent:
            "group-data-[selected=true]:text-whiteColor group-data-[selected=false]:text-grayColor text-xs md:text-sm",
        }}
      >
        <Tab
          key="projects"
          title={
            <p className="w-32 md:w-44 text-center tracking-widest">PROJECTS</p>
          }
        >
          <PortfolioContent items={portfolioData?.projects} />
        </Tab>

        <Tab
          key="certificates"
          title={
            <p className="w-32 md:w-44 text-center tracking-widest">
              CERTIFICATES
            </p>
          }
        >
          <PortfolioContent items={portfolioData?.certificates} />
        </Tab>
        <Tab
          key="experience"
          title={
            <p className="w-32 md:w-44 text-center tracking-widest">
              EXPERIENCE
            </p>
          }
        >
          <PortfolioContent items={portfolioData?.experience} />
        </Tab>
        <Tab
          key="blogs"
          title={
            <p className="w-32 md:w-44 text-center tracking-widest">BLOGS</p>
          }
        >
          <PortfolioContent items={portfolioData?.blogs} />
        </Tab>
        <Tab
          key="socialwork"
          title={
            <p className="w-32 md:w-44 text-center tracking-widest">
              SOCIAL WORK
            </p>
          }
        >
          <PortfolioContent items={portfolioData?.socialwork} />
        </Tab>
      </Tabs>
    </div>
  );
}
