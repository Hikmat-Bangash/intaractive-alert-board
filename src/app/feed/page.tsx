"use client";
import CryptoTicker from "@/components/Alert/CryptoTicker";
import EconomicalCalendar from "@/components/FeedPage/EconoicalCalendar";
import TrendingSnaps from "@/components/FeedPage/TrendingSnaps";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Page = (props: Props) => {
   const { isLightMode }: any = useSelector(
     (state: RootState) => state?.ThemeMode
   );
   return (
     <main className="flex min-h-screen mt-[9rem]">
       <div
         className={`wrapper w-[98%] h-auto ${
           isLightMode ? " text-black" : " text-white"
         }  rounded-[0.9rem] flex justify-between overflow-hidden py-4  gap-4`}
       >
         <div className="leftSection w-[38rem] h-full bg-white flex p-8 rounded-[0.9rem]">
           {/* ------ Trending Snaps ----- */}
           <div className="wrapper w-[30rem] h-[35rem]">
             <TrendingSnaps width={520} height={660} />
           </div>
         </div>

         <div className="RightSection w-[36rem] h-full bg-white flex p-8 rounded-[0.9rem]">
           {/* economical component calling */}
           <div className="wrapper w-[26rem] h-[31.2rem]">
             <EconomicalCalendar />
           </div>
         </div>
       </div>
     </main>
   );
};

export default Page;
