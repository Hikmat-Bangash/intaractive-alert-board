"use client";
import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';
import MarketOverview from './MarketOverview';
import AnalysisWidget from './AnalysisWidget';
import Image from 'next/image';
import searchIcon from "../../../../public/assets/icons/search.svg";


const CryptoTechnicalView = () => {
    
  const { isLightMode }: any = useSelector(
    (state: RootState) => state.ThemeMode
  );
  return (
    <div className=" container w-full flex justify-between px-4">
      {/* Left crypto section */}
      <div
        className={`wrapper w-[28.75rem] h-[42.75rem] p-4 ${
          isLightMode ? "bg-white" : "bg-[#131722]"
        }   text-red-500 rounded-[0.937rem] px-8`}
      >
        <MarketOverview />
      </div>

      {/* Right crypto section */}
      <div
        className={`wrapper w-[35.5rem] h-[37.7rem] p-4 ${
          isLightMode ? "bg-white" : "bg-[#131722]"
        }  text-blue-500 rounded-[0.937rem] px-12 flex flex-col gap-6`}
      >
        {/* SEARCH BAR */}
        <div className="searchbar w-[30rem] h-[3.5rem] rounded-[0.93rem] bg-[#F0F6FF] flex gap-4 items-center px-6">
          {/* search input */}
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Find symbols, bonds, indices, etc..."
            className="text-[1rem] text-black w-[24rem] outline-none bg-transparent"
          />
          {/* icon */}
          <Image
            src={searchIcon}
            className="w-[1.5rem] h-[1.5rem]"
            alt="searchIcon"
          />
        </div>
        {/* WIDGET COMPONENT CALLED */}
        <AnalysisWidget />
      </div>
    </div>
  );
}

export default CryptoTechnicalView