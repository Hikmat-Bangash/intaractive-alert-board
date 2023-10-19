"use client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import plan_rewnewIcon from "../../../public/assets/icons/planrenewIcon.svg";
import active from "../../../public/assets/icons/pricingPlan/active.svg";
import non_active from "../../../public/assets/icons/pricingPlan/non_active.svg";
import { PricingPlan } from "@/constant/contents";
type Props = {};

const Page = (props: Props) => {
  const { isLightMode }: any = useSelector(
    (state: RootState) => state?.ThemeMode
  );
  
  return (
    <main
      className={` ${
        isLightMode ? "text-black" : "text-white"
      } mt-[9rem] w-full`}
    >
      <div className="wrapper flex flex-col gap-6  w-[98%] ">
        {/* PLAN OVERVIEW SECTION */}
        <div
          className={`wrapper w-full  h-[8.8125rem] p-4 ${
            isLightMode ? "bg-white " : "bg-[#131722]"
          } flex gap-5 items-center rounded-[0.93rem]`}
        >
          {/*-------- PLAN OVERVIEW -----------   */}
          <div
            className={`plan overview  w-[20rem] h-full border-r-2 ${
              isLightMode ? "border-[#E7E7E7]" : "border-[#252D43]"
            }  flex justify-center items-center`}
          >
            <h1 className="text-[1.25rem] font-bold">Plan Overview</h1>
          </div>

          {/*------------ Right Section / PLAN DETAIL -------------*/}
          <div className="planDetail flex justify-between items-center w-[75rem] h-full px-4">
            {/* current plan */}
            <div className="currentPlan flex flex-col gap-1 justify-center items-center">
              <p className="text-[0.625rem] text-[#B8B8B8] font-bold tracking-[0.1625rem]">
                CURRENT PLAN
              </p>
              {/* plan name */}
              <h1 className="text-[#467DCE] text-[1.25rem] font-bold">
                Premium
              </h1>
            </div>

            {/* expire date */}
            <div className="currentPlan flex flex-col gap-1 justify-center items-center">
              <p className="text-[0.625rem] text-[#B8B8B8] font-bold tracking-[0.1625rem]">
                EXPIRATION DATE
              </p>
              {/* date */}
              <h1 className="text-[#467DCE] text-[1.25rem] font-bold">
                August 21, 2024
              </h1>
            </div>
            {/* RE-NEW PLAN */}

            <div className="renewPlan flex gap-4 justify-center items-center">
              <p className="text-[#467DCE] text-[0.625rem] font-bold tracking-[0.1625rem]">
                RENEW
              </p>
              {/* renew icon */}
              <div className="renewIcon w-[3.125rem] h-[3.125rem] rounded-full bg-blue-600 cursor-pointer flex justify-center items-center">
                <Image
                  src={plan_rewnewIcon}
                  className="w-[1.93rem] h-[1.93rem]"
                  alt="plan renew icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/*----------- PRICING PLAN TABLE --------------*/}
        <div className="pricingPlan w-full">
          <table className="w-full flex flex-col gap-3">
            <thead className="rounded-[0.9375rem] h-[4.68rem]  text-white bg-[#31507E]">
              <tr className=" text-white h-full flex justify-around items-center ">
                <th className="w-[30rem] text-start">DESCRIPTION</th>
                <th className="w-[10rem]  ">FREE/BASIC</th>
                <th className="w-[10rem] ">PREMIUM</th>
              </tr>
            </thead>

            <tbody className="w-full flex gap-3 flex-col">
              {PricingPlan.map((item, index) => (
                <tr
                  key={index}
                  className={`"w-full flex justify-around items-center rounded-[0.9375rem] h-[4.68rem] ${
                    isLightMode ? "bg-white " : "bg-[#131722]"
                  } "`}
                >
                  <td className=" w-[30rem] text-[0.875rem] text-start">
                    {item.description}
                  </td>
                  <td className=" w-[10rem] flex justify-center items-center  ">
                    <Image
                      src={item.free ? active : non_active}
                      className="w-[2.375rem] h-[2.375rem]"
                      alt="active/non-active"
                    />
                  </td>
                  <td className=" w-[10rem] flex justify-center items-center ">
                    <Image
                      src={active}
                      className="w-[2.375rem] h-[2.375rem]"
                      alt="active/non-active"
                    />
                  </td>
                </tr>
              ))}
            </tbody>

            {/* last free and premium amount plan */}
            <thead
              className={`"rounded-[0.9375rem] h-[4.68rem] ${
                isLightMode ? "bg-white text-black" : "bg-[#131722] text-white"
              }"`}
            >
              <tr className="h-full flex justify-around items-center ">
                <th className="w-[30rem] text-start">Pricing</th>
                <th className="w-[10rem] text-[#467DCE] ">Free</th>
                <th className="w-[10rem] text-[#467DCE] ">$42.99/Month</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Page;
