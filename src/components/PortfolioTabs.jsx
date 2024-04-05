"use client";

import { Tabs, Tab } from "@nextui-org/react";

import data from "@/data/data.json";
import PortfolioContent from "./PortfolioContent";

export default function PortfolioTabs() {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        classNames={{
          tabList:
            "gap-5 w-full relative rounded-none p-0 border-b border-grayColor border-divider",
          cursor: "w-full bg-greenColor",
          tab: "max-w-fit px-0 h-12",
          tabContent:
            "group-data-[selected=true]:text-whiteColor group-data-[selected=false]:text-grayColor",
        }}
      >
        <Tab
          key="projects"
          title={<p className="w-44 text-center tracking-widest">PROJECTS</p>}
        >
          <PortfolioContent items={data.projects} />
        </Tab>
        <Tab
          key="certificates"
          title={
            <p className="w-44 text-center tracking-widest">CERTIFICATES</p>
          }
        >
          <PortfolioContent items={data.certificates} />
        </Tab>
        <Tab
          key="evs"
          title={<p className="w-44 text-center tracking-widest">EVS</p>}
        >
          <PortfolioContent items={data.evs} />
        </Tab>
      </Tabs>
    </div>
  );
}
