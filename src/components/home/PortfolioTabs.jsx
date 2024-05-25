'use client';

import { useEffect, useState } from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '@/firebase/config';
import PortfolioContent from './PortfolioContent';

export default function PortfolioTabs() {
  const [portfolioData, setPortfolioData] = useState({});

  const portfolioTabs = [
    {
      title: 'PROJECTS',
      key: 'projects',
    },
    {
      title: 'CERTIFICATES',
      key: 'certificates',
    },
    {
      title: 'EXPERIENCE',
      key: 'experience',
    },
    {
      title: 'VLOGS',
      key: 'vlogs',
    },
    {
      title: 'BLOGS',
      key: 'blogs',
    },
    {
      title: 'SOCIAL WORK',
      key: 'socialwork',
    },
  ];

  useEffect(() => {
    const fetchPortfolio = () => {
      portfolioTabs.forEach(async (portfolioName) => {
        try {
          const collectionRef = collection(db, portfolioName.key);
          const collectionSnapshot = await getDocs(collectionRef);
          const localPortfolioData = collectionSnapshot.docs.map((doc) =>
            doc.data()
          );

          setPortfolioData((prevPortfolioData) => ({
            ...prevPortfolioData,
            [portfolioName.key]: localPortfolioData,
          }));
        } catch (error) {
          console.error('Error occurred while fetching data:', error);
        }
      });
    };

    fetchPortfolio();
  }, []);

  return (
    <div className='flex w-full flex-col px-5'>
      <Tabs
        aria-label='Options'
        color='primary'
        variant='underlined'
        classNames={{
          tabList:
            'gap-5 w-full relative rounded-none p-0 border-b border-grayColor border-divider',
          cursor: 'w-full bg-greenColor',
          tab: 'max-w-fit px-0 h-10 md:h-12',
          tabContent:
            'group-data-[selected=true]:text-whiteColor group-data-[selected=false]:text-grayColor text-xs md:text-sm',
        }}
      >
        {portfolioTabs != {} &&
          portfolioTabs?.map(
            (tab) =>
              portfolioData[tab.key]?.length > 0 && (
                <Tab
                  key={tab.key}
                  title={
                    <p className='w-32 md:w-44 text-center tracking-widest'>
                      {tab.title}
                    </p>
                  }
                >
                  <PortfolioContent items={portfolioData[tab.key]} />
                </Tab>
              )
          )}
      </Tabs>
    </div>
  );
}
