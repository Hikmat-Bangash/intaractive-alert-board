"use client";
import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';
import MarketOverview from './MarketOverview';

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
        }   text-red-500 rounded-[0.937rem]`}
      >
        <MarketOverview/>
      </div>
      {/* Right crypto section */}
      <div
        className={`wrapper w-[35.5rem] h-[37.7rem] p-4 ${
          isLightMode ? "bg-white" : "bg-[#131722]"
        }  text-blue-500 rounded-[0.937rem]`}
      >
        <h1>Right crypto section</h1>
      </div>
    </div>
  );
}

export default CryptoTechnicalView