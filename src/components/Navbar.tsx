"use client";
import Image from "next/image";
import React, { Dispatch, useEffect, useState } from "react";
import searchIcon from "../../public/assets/icons/search.svg";
import userpic from "../../public/userpic.jpg";
// below are the react-icons
import Badge from "@mui/material/Badge";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { changeMode } from "@/redux/features/ThemeChange";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import Link from "next/link";

const Navbar = () => {
  const { isLightMode }:any = useSelector((state: RootState)=>state?.ThemeMode)
  const dispatch:Dispatch<AnyAction> = useDispatch();
  // ------- A function that change dark/light mode --------
  const ChangeThemeMode = () => {
     dispatch(changeMode(!isLightMode))
  };
  // Add or remove the appropriate class when LightMode changes
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
  }, [isLightMode]);

  // JSX Section
  return (
    <div
      className={`container w-[75.5%] fixed top-6 z-50 ${
        isLightMode ? "bg-[#F0F6FF]" : "bg-[#1E222D]"
      } `}
    >
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
            className="text-[1rem] text-black w-[24rem] outline-none"
          />
        </div>

        {/* right section */}
        <div className="righSectionWrapper flex justify-between items-center gap-4 w-[20rem] h-[3.5rem] mr-5">
          {/* theme mode */}
          <div
            onClick={ChangeThemeMode}
            className="themeMode cursor-pointer w-[2.6rem] h-[2.6rem] bg-[#467DCE] flex justify-center items-center rounded-full text-white"
          >
            <span className="text-2xl">
              {!isLightMode ? <MdOutlineLightMode /> : <CiDark />}
            </span>
          </div>
          {/* notification */}
          <div className="themeMode w-[2.43rem] h-[2.43rem] flex justify-center items-center rounded-full">
            <Badge badgeContent={4} color="error" className="cursor-pointer">
              <GoBell className="text-3xl" />
            </Badge>
          </div>
          {/* usernae + avatar */}
          <div className="user-avatar  flex items-center gap-3">
            <Link href="/profile">
              <Image
                src={userpic}
                className="w-[3rem] h-[3rem] rounded-full object-cover cursor-pointer"
                alt="avatar"
              />
            </Link>
            {/* name */}
            <h3 className="text-[1rem] font-bold">Jane Doe</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
