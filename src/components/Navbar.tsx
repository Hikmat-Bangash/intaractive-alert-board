"use client";
import Image from "next/image";
import React, {useState} from "react";
import searchIcon from "../../public/assets/icons/search.svg";
import Avatar from "../../public/assets/icons/Avatar.png";
import userpic from "../../public/userpic.jpg";
// below are the react-icons 
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { MdOutlineLightMode } from "react-icons/md"
import { CiDark } from "react-icons/ci"
  import { GoBell } from "react-icons/go";

type Props = {};

const Navbar = (props: Props) => {
  const [LightMode, setLightMode] = useState<boolean>(true);


  // JSX Section
  return (
    <div className="container w-[75%] fixed top-6 bgColor z-50">
      <div className="wrapper flex justify-between items-center ">
        {/* search bar */}
        <div className="searchbar w-[30rem] h-[3.5rem] rounded-[0.93rem] bg-white flex gap-4 items-center px-6">
          {/* icon */}
          <Image
            src={searchIcon}
            className="w-[1.5rem] h-[1.5rem]"
            alt="searchIcon"
          />
          {/* search input */}

          <input
            type="text"
            name="search"
            id="search"
            placeholder="Find symbols, bonds, indices, etc..."
            className="text-[1rem] w-[24rem] outline-none"
          />
        </div>

        {/* right section */}
        <div className="righSectionWrapper flex justify-between items-center gap-4 w-[20rem] h-[3.5rem]">
          {/* theme mode */}
          <div
            onClick={(e) => setLightMode(!LightMode)}
            className="themeMode cursor-pointer w-[2.6rem] h-[2.6rem] bg-[#467DCE] flex justify-center items-center rounded-full"
          >
            <span className="text-2xl">
              {LightMode ? <MdOutlineLightMode /> : <CiDark />}
            </span>
          </div>
          {/* notification */}
          <div className="themeMode w-[2.43rem] h-[2.43rem] flex justify-center items-center rounded-full">
            <Badge badgeContent={4} color="error">
              <GoBell className="text-3xl" />
            </Badge>
          </div>
          {/* usernae + avatar */}
          <div className="user-avatar  flex items-center gap-3">
            <Image
              src={userpic}
              className="w-[3rem] h-[3rem] rounded-full object-cover"
              alt="avatar"
            />
            {/* name */}
            <h3 className="text-[1rem] font-bold">Jane Doe</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

