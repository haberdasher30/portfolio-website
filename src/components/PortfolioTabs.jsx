"use client";

import { Tabs, Tab } from "@nextui-org/react";

import {
  projects,
  certificates,
  experience,
  achievements,
  blogs,
  socialwork,
} from "@/data/portfolioTabs";
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
          <PortfolioContent items={projects} />
        </Tab>

        <Tab
          key="certificates"
          title={
            <p className="w-44 text-center tracking-widest">CERTIFICATES</p>
          }
        >
          <PortfolioContent items={certificates} />
        </Tab>
        <Tab
          key="experience"
          title={<p className="w-44 text-center tracking-widest">EXPERIENCE</p>}
        >
          <PortfolioContent items={experience} />
        </Tab>
        <Tab
          key="achievements"
          title={
            <p className="w-44 text-center tracking-widest">ACHIEVEMENTS</p>
          }
        >
          <PortfolioContent items={achievements} />
        </Tab>
        <Tab
          key="blogs"
          title={<p className="w-44 text-center tracking-widest">BLOGS</p>}
        >
          <PortfolioContent items={blogs} />
        </Tab>
        <Tab
          key="socialwork"
          title={
            <p className="w-44 text-center tracking-widest">SOCIAL WORK</p>
          }
        >
          <PortfolioContent items={socialwork} />
        </Tab>
      </Tabs>
    </div>
  );
}
