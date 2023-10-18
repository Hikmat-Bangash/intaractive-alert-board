"use client";
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
         className={`"wrapper w-[97.5%] h-[46rem] ${
           isLightMode ? "bg-white text-black" : "bg-[#131722] text-white"
         } rounded-[0.9rem] flex justify-center"`}
       >
         <h1 className=" font-bold">This is Feed section</h1>
       </div>
     </main>
   );
};

export default Page;
