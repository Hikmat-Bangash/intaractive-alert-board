import React from 'react'
"use client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";
import AIAssistant from "../../../public/assets/icons/aiassistant.svg";
import userpic from "../../../public/userpic.jpg";
import { chatMessages } from "@/constant/contents";



interface Imessage {
  name: string;
  message: string;
}

const AiMessage = (message: Imessage) => {
     const { isLightMode }: any = useSelector(
       (state: RootState) => state?.ThemeMode
    );
    
  return (
    <div
      key={message.message}
      className={`wrapper flex justify-start `}
    >
      <div
        className={`message w-[38rem] h-auto px-4 py-3 flex items-center gap-4 ${
          isLightMode ? "bg-[#F3F3F3] text-black" : "bg-[#131722] text-white"
        } rounded-[0.9rem]`}
      >
        {/* user avatar */}
        <div className="avatar min-w-[4.625rem] min-h-[4.625rem] flex justify-center items-center rounded-full bg-[#467DCE]        ">
          <Image
            src={AIAssistant}
            className={`w-[2.9rem] h-[2.6rem] `}
            alt="avatar"
          />
        </div>
        {/* message textNode */}
        <p className="text-[1rem]">{message.message}</p>
      </div>
    </div>
  );
};





export default AiMessage