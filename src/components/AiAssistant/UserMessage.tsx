import React from "react";
("use client");
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";
import AIAssistant from "../../../public/assets/icons/aiassistant.svg";
import userpic from "../../../public/userpic.jpg";

interface Imessage {
  name: string;
    message: string;
}

const UserMessage = (message: Imessage, key: any) => {
  const { isLightMode }: any = useSelector(
    (state: RootState) => state?.ThemeMode
    );
    

  return <div>UserMessage</div>;
};

export default UserMessage;
