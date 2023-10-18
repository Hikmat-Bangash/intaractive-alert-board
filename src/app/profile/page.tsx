"use client";
import Image from "next/image";
import React from "react";
import userpic from "../../../public/userpic.jpg";
import {FiSettings} from "react-icons/fi"
import { BsCamera } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Page = () => {
  const { isLightMode }: any = useSelector(
    (state: RootState) => state?.ThemeMode
  );

  // upadate user profile data
  const UpdataUserInfo = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }
   return (
     <main
       className={` ${
         isLightMode ? "text-black" : "text-white"
       } mt-[9rem] w-full`}
     >
       <div className="wrapper flex flex-col gap-6 w-[71.2rem] ">
         {/* user plan section Top Section */}
         <div
           className={`wrapper w-full  h-[9rem] px-8 ${
             isLightMode ? "bg-white text-white" : "bg-[#131722] text-white"
           } flex justify-between items-center rounded-[0.93rem]`}
         >
           {/* userpic and name Left section */}
           <div className="userInfo  flex items-center gap-3">
             <Image
               src={userpic}
               className="w-[5rem] h-[5rem] rounded-full object-cover"
               alt="avatar"
             />
             {/* name + plan */}
             <div className="wraper flex flex-col gap-2">
               <h3 className="text-[1rem] font-bold">Jane Doe</h3>
               {/* account plan */}
               <div className="accountPlan w-[10rem] h-[1.5rem] bg-[#EFEFEF] rounded-[2.5rem] text-[0.75rem] font-bold tracking-[0.195rem] text-[#467DCE] flex justify-center items-center">
                 PLAN: PREMIUM
               </div>
             </div>
           </div>

           {/* Right Section */}
           <div className="RightSection w-[11.875rem] h-[2.56rem] bg-[#467DCE] rounded-[0.625rem] px-6 flex justify-between items-center cursor-pointer">
             <p className="text-white text-[0.625rem] font-bold tracking-[0.1625rem]">
               MY PLAN
             </p>
             {/* setting icon */}
             <span className="text-white text-[1.5rem]">
               <FiSettings />
             </span>
           </div>
         </div>

         {/* profile update + edit section */}
         <section className={`flex justify-between w-full  `}>
           {/* Edit Information */}
           <div
             className={`userInfo flex flex-col gap-10 w-[42.8rem] h-[47.8rem] p-8 rounded-[0.93rem] ${
               isLightMode ? "bg-white text-black" : "bg-[#131722] text-white"
             } `}
           >
             {/* heading */}
             <h1 className="text-[2rem] font-bold">Edit Information:</h1>
             {/* Form section */}
             <form
               onSubmit={UpdataUserInfo}
               action=""
               className="flex-wrap flex flex-col gap-8"
             >
               {/* user full name */}
               <div className="username flex justify-between">
                 {/* first name */}
                 <div className="FIRSTNAME flex flex-col gap-3">
                   <label
                     htmlFor="firstname"
                     className="text-[0.625rem] font-bold tracking-[0.16rem] text-[#B8B8B8]"
                   >
                     FIRST NAME
                   </label>
                   <input
                     type="text"
                     name="firstName"
                     id="firstname"
                     placeholder="Jane"
                     className="w-[18.18rem] text-[1rem] px-4 text-[#333] h-[3.12rem] rounded-[0.93rem] bg-[#F0F6FF] outline-none"
                   />
                 </div>
                 {/* LAST NAME */}
                 <div className="FIRSTNAME flex flex-col gap-3">
                   <label
                     htmlFor="firstname"
                     className="text-[0.625rem] font-bold tracking-[0.16rem] text-[#B8B8B8]"
                   >
                     LAST NAME
                   </label>
                   <input
                     type="text"
                     name="firstName"
                     id="firstname"
                     placeholder="Doe"
                     className="w-[18.18rem] text-[1rem] px-4 text-[#333] h-[3.12rem] rounded-[0.93rem] bg-[#F0F6FF] outline-none"
                   />
                 </div>
               </div>
               {/* Email address */}
               <div className="email flex flex-col gap-3">
                 <label
                   htmlFor="email"
                   className="text-[0.625rem] font-bold tracking-[0.16rem] text-[#B8B8B8]"
                 >
                   EMAIL ADDRESS
                 </label>
                 <input
                   type="email"
                   name="email"
                   id="email"
                   placeholder="janedoe@gmail.com"
                   className="w-full text-[1rem] px-4 text-[#333] h-[3.12rem] rounded-[0.93rem] bg-[#F0F6FF] outline-none"
                 />
               </div>

               {/* current password */}
               <div className="Cpassword flex flex-col gap-3">
                 <label
                   htmlFor="Cpassword "
                   className="text-[0.625rem] font-bold tracking-[0.16rem] text-[#B8B8B8]"
                 >
                   CURRENT PASSWORD
                 </label>
                 <input
                   type="password"
                   name="Cpassword"
                   id="Cpassword"
                   placeholder="******************"
                   className="w-full text-[1rem] px-4 text-[#333] h-[3.12rem] rounded-[0.93rem] bg-[#F0F6FF] outline-none"
                 />
               </div>

               {/* creat new password*/}
               <div className="username flex justify-between">
                 {/* new password */}
                 <div className="Cpassword flex flex-col gap-3">
                   <label
                     htmlFor="Npassword"
                     className="text-[0.625rem] font-bold tracking-[0.16rem] text-[#B8B8B8]"
                   >
                     NEW PASSWORD
                   </label>
                   <input
                     type="password"
                     name="Npassword"
                     id="Npassword"
                     placeholder=""
                     className="w-[18.18rem] text-[1rem] px-4 text-[#333] h-[3.12rem] rounded-[0.93rem] bg-[#F0F6FF] outline-none"
                   />
                 </div>
                 {/* CONFIRM PASSWORD */}
                 <div className="Cpassword flex flex-col gap-3">
                   <label
                     htmlFor="Cpassword"
                     className="text-[0.625rem] font-bold tracking-[0.16rem] text-[#B8B8B8]"
                   >
                     CONFIRM PASSWORD
                   </label>
                   <input
                     type="password"
                     name="Cpassword"
                     id="Cpassword"
                     placeholder=""
                     className="w-[18.18rem] text-[1rem] px-4 text-[#333] h-[3.12rem] rounded-[0.93rem] bg-[#F0F6FF] outline-none"
                   />
                 </div>
               </div>
               {/* phone number */}
               <div className="phone flex flex-col gap-3">
                 <label
                   htmlFor="phone"
                   className="text-[0.625rem] font-bold tracking-[0.16rem] text-[#B8B8B8]"
                 >
                   (OPTIONAL) PHONE NUMBER
                 </label>
                 <input
                   type="number"
                   name="phone"
                   id="phone"
                   placeholder=""
                   className="w-full text-[1rem] px-4 text-[#333] h-[3.12rem] rounded-[0.93rem] bg-[#F0F6FF] outline-none"
                 />
               </div>

               {/* update button */}
               <button
                 type="submit"
                 className="w-[13.25rem] h-[2.62rem] bg-[#467DCE] rounded-[0.625rem] flex justify-center items-center text-[0.625rem] font-bold tracking-[0.16rem] text-white"
               >
                 UPDATE PROFILE
               </button>
             </form>
           </div>

           {/* -------- RIGHT SECTIION / UPLOADING PROFILE PIC  */}
           <div
             className={`"userInfo w-[20.8rem] h-[30.4rem] flex flex-col gap-6  p-8  rounded-[0.93rem]" ${
               isLightMode ? "bg-white text-black" : "bg-[#131722] text-white"
             }`}
           >
             {/* heading */}
             <h1 className="text-[2rem] font-bold">Profile Picture</h1>

             {/* img uploading icon contianer */}
             <div className="container flex flex-col gap-4">
               <div
                 className={`"btnContainer w-[16.8125rem] p-4 h-[14.6875rem] rounded-[0.9375rem] ${
                   isLightMode
                     ? "bg-[#F0F6FF] text-black"
                     : "bg-[#1E222D] text-white"
                 }  flex flex-col justify-around items-center cursor-pointer"`}
               >
                 {/* icon */}
                 <div className="icon text-[8.5rem]">
                   <BsCamera />
                 </div>
                 {/* description */}
                 <p className="text-center text-[0.625rem] font-bold tracking-[0.1rem]">
                   CLICK HERE TO UPLOAD A NEW PROFILE PICTURE
                 </p>
               </div>

               {/* image uplodaing type */}
               <p className="text-[0.625rem] text-center font-bold tracking-[0.1rem] text-[#467DCE]">
                 (JPG or PNG | 2Mb MAXIMUM)
               </p>
             </div>

             {/* update photo button */}
             <button
               type="submit"
               className="w-[16.8125rem] h-[2.625rem] bg-[#467DCE] rounded-[0.625rem] flex justify-center items-center text-[0.625rem] font-bold tracking-[0.16rem] text-white"
             >
               UPDATE PHOTO
             </button>
           </div>
         </section>
       </div>
     </main>
   );
};

export default Page;
