"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/assets/icons/IAE-LOGO.svg";
import logout from "../../public/assets/icons/logout.svg";
import { Tabs } from "@/constant/contents";
import { usePathname } from "next/navigation";
import Link from "next/link";
// importing react-icons
import { RxDashboard } from 'react-icons/rx'


const Sidebar = () => {
    const path = usePathname();
  return (
    <div className="container fixed top-0 z-30 py-8 w-[20.125rem] h-screen bg-[#FFF] rounded-tr-[2.5rem] rounded-br-[2.5rem]">
      {/* wrapper */}
      <div className="wrapper flex flex-col justify-between items-center w-full h-full">
        <div className="logoTabs flex flex-col gap-8">
          {/* logo */}
          <Image src={logo} className="w-[9.8rem] h-[4.3rem]" alt="logo" />

          {/* navigation tabs */}
          <ul className="no-underline flex justify-center items-center gap-[1.5rem] flex-col">
            {/* logo */}
            {Tabs.map((tab, index) => (
              <li
                className={`  cursor-pointer w-[16.8rem] h-[3.8rem] rounded-[0.93rem] flex px-4 text-[1rem] font-bold tracking-[0.26rem] ${
                  tab.link == path
                    ? "bg-[#467DCE] text-white"
                    : "hover:text-[#467DCE]"
                }`}
                key={index}
              >
                <Link
                  href={tab.link}
                  className=" gap-[1rem] flex justify-center items-center"
                >
                  <Image
                    src={tab.icon}
                    className={`w-[2rem] h-[2rem] ${tab.link == path ? "stroke-white" : " stroke-black"}`}
                    alt="tabIcon"
                  />
                  <p>{tab.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* logOut */}
        <button className="w-[16.7rem] h-[3.8rem]  flex px-4 items-center gap-[2rem] rounded-[0.93rem] bg-[#467DCE] text-center">
          <Image
            src={logout}
            className="w-[1.87rem] h-[1.87rem]"
            alt="logout"
          />
          <h2 className="text-[1rem] font-bold  tracking-[0.26rem] text-white">
            LOGOUT
          </h2>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
