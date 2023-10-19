"use client"
import React, { useState } from "react";
import { cryptoBtnsTabs } from "@/constant/contents";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import MarketData from "@/components/HomePage/CryptoMarketView";
import CryptoTechnicalView from "@/components/HomePage/CryptoTechnicalView/TechnicalView";


export default function Home() {
  const [activeTab, setActiveTab] = useState<number>(1);
  // global variable for theme Mode
 const { isLightMode }: any = useSelector(
   (state: RootState) => state.ThemeMode
 );
  return (
    <main className="flex  mt-[9rem] w-full ">
      <div className="wrapper w-[98%] flex flex-col justify-between gap-[1rem]">
        {/* Market view and Technical Tabs */}
        <div className="Tabs relative w-full h-[3rem] capitalize">
          <div className="wrapper w-full flex gap-[4rem] ml-6 text-[0.875rem] font-bold capitalize">
            {/* active Tabs */}
            {cryptoBtnsTabs.map((btn) => (
              <button
                key={btn.index}
                onClick={(e) => setActiveTab(btn.index)}
                className={`tracking-[0.22rem] h-[3rem] relative z-10 rounded-md ${
                  activeTab === btn.index
                    ? "border-b-[0.4rem] border-[#467DCE] "
                    : `border-b-[0.4rem] ${
                        isLightMode ? "border-[#D3E2F9]" : "border-[#131722]"
                      } `
                }`}
              >
                {btn.name}
              </button>
            ))}
          </div>

          {/* bottom line */}
          <div
            className={`bottomLine w-full h-[0.4rem] ${
              isLightMode ? "bg-[#D3E2F9]" : "bg-[#131722]"
            }  absolute bottom-0 rounded-full`}
          ></div>
        </div>
        {/*MarketShare Trading Component */}
        {activeTab == 1 ? (
          <div
            className={`MarketShare w-full h-[35rem] p-4 ${
              isLightMode ? "bg-white" : "bg-[#131722]"
            }  rounded-[0.9rem]`}
          >
            <MarketData />
          </div>
        ) : (
          <CryptoTechnicalView />
        )}
      </div>
    </main>
  );
}
