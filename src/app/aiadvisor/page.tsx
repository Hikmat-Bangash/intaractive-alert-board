"use client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import AIAssistant from "../../../public/assets/icons/aiassistant.svg";
import sentIcon from "../../../public/assets/icons/send.svg";
import userpic from "../../../public/userpic.jpg";
import { chatMessages } from "@/constant/contents";

const Page = () => {
  const { isLightMode }: any = useSelector(
    (state: RootState) => state?.ThemeMode
  );
  
  // JSX SECTION
  return (
    <main className="w-full mt-[9rem]">
      <div
        className={`wrapper w-[98%] h-[46rem] ${
          isLightMode ? " text-black" : " text-white"
        } rounded-[0.9rem] flex flex-col gap-6`}
      >
        {/* chatwindow */}
        <div
          className={`chatwindow custom-scrollbar w-full h-[38rem] px-[3rem] py-[1rem] flex flex-col gap-3 overflow-y-scroll ${
            isLightMode
              ? "bg-white text-black "
              : "bg-[#131722] text-white"
          } rounded-[0.9rem]`}
        >
          {/* message box */}
          {chatMessages.map((message, index) =>
            message.name === "user" ? (
              <div key={index} className={`wrapper flex justify-end mr-[8rem]`}>
                <div
                  className={`message w-[38rem] h-auto px-4 py-3 flex justify-between items-center gap-4 bg-[#31507E] rounded-[0.9rem]`}
                >
                  {/* message textNode */}
                  <p className="text-[1rem] text-white w-[30rem] break-words">
                    {message.message}
                  </p>

                  {/* user avatar */}
                  <div className=" avatar w-[4.625rem] h-[4.625rem] flex justify-center items-center rounded-full ">
                    <Image
                      src={userpic}
                      className={`w-full h-full object-cover rounded-full      
                      `}
                      alt="avatar"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className={`wrapper flex justify-start`}>
                <div
                  className={`message w-[38rem] h-auto px-4 py-3 flex items-center gap-4 ${
                    isLightMode
                      ? "bg-[#F3F3F3] text-black"
                      : "bg-[#1E222D] text-white"
                  } rounded-[0.9rem]`}
                >
                  {/* user avatar */}
                  <div className="avatar min-w-[4.625rem] min-h-[4.625rem] flex justify-center items-center rounded-full bg-[#467DCE]        ">
                    <Image
                      src={AIAssistant}
                      className={`w-[2.9rem] h-[2.6rem]`}
                      alt="avatar"
                    />
                  </div>
                  {/* message textNode */}
                  <p className="text-[1rem]">{message.message}</p>
                </div>
              </div>
            )
          )}
        </div>

        {/* chat Textbox to send query */}
        <div
          className={`textbox h-[8rem] ${
            isLightMode ? "bg-white text-black" : "bg-[#131722] text-white"
          } px-6 py-2 flex justify-between items-center rounded-[0.9rem]`}
        >
          <input
            type="text"
            name="input"
            id="input"
            placeholder="Ask me Anything..."
            className={`w-[80%] outline-none ${
              isLightMode
                ? "bg-transparent text-black"
                : "bg-[#131722] text-white"
            }`}
          />

          {/* button */}
          <button className="w-[13.8rem] h-[3.8rem] flex justify-between px-[2rem] items-center bg-[#467DCE] rounded-[0.9375rem]">
            <p className="text-[1rem] font-bold tracking-[0.26rem] text-white">
              SEND
            </p>
            {/* icon */}
            <Image
              src={sentIcon}
              className="w-[2.8rem] h-[2.8rem]"
              alt="sendIcon"
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
