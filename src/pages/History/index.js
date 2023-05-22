import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Items from "./Items";
import data from "../../constants/HistoryItems";

const History = () => {
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div className="font-second">
      <Header />
      <div className="relative top-75">
        <div className="max-h-80 flex justify-center bg-primary">
          <h1 className="border-2 snap-center border-light font-third text-light text-5xl stroke-text uppercase py-2 px-64 m-4">
            History
          </h1>
        </div>
        <div className="container mx-auto mt-10">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-b-2 border-primary bg-transparent"
              indicatorProps={{
                className:
                  "bg-transparent border-b-3 border-second shadow-none rounded-none",
              }}
            >
              {data.map(({ id, value }) => (
                <Tab
                  key={id}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? "text-blue-500" : ""}
                >
                  {value}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ id, value }) => (
                <TabPanel key={id} value={value}>
                  <Items status={id} />
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default History;
