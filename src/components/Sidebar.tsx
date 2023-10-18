"use client";
import Image from "next/image";
import React from "react";
import logout from "../../public/assets/icons/logout.svg";
import lightModeLOGO from "../../public/assets/icons/IAE-LOGO.svg";
import DarkModeLOGO from "../../public/assets/icons/darkModeLOGO.svg";
import { Tabs } from "@/constant/contents";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
// react-icons
import { LuAlarmClock } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { BsBasket3 } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";

// sidebar icons
const sidbarIcons = [
  {
    icon: <RxDashboard />,
  },
  {
    icon: <LuAlarmClock />,
  },
  {
    icon: <CgProfile />,
  },
  {
    icon: <BsBasket3 />,
  },
  {
    icon: <GoBell />,
  },
  {
    icon: <BiMessageRoundedDetail />,
  },
];

const Sidebar = () => {
  const { isLightMode }: any = useSelector(
    (state: RootState) => state.ThemeMode
  );
  const path = usePathname();

  return (
    <div
      className={`container fixed top-0 z-30 py-8 w-[20.125rem] h-screen ${
        isLightMode
          ? "bg-[#FFF] transition-all duration-100"
          : "bg-[#131722] transition-all duration-100"
      }  rounded-tr-[2.5rem] rounded-br-[2.5rem]`}
    >
      {/* wrapper */}
      <div className="wrapper flex flex-col justify-between items-center w-full h-full">
        <div className="logoTabs flex flex-col gap-8">
          {/* logo */}
          <Image
            src={isLightMode ? lightModeLOGO : DarkModeLOGO}
            className="w-[9.8rem] h-[4.3rem]"
            alt="logo"
          />

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
                  
                  <span className="text-[1.5rem] font-bold">{sidbarIcons[index].icon}</span>
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
