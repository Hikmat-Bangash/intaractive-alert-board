import React from 'react'
  import { BiMessageRoundedDetail } from "react-icons/bi";
const Footer = () => {
    return (
      <div className="container w-[97.5%] mt-[2rem] h-[4.8rem] ">
        <div className="wrapper flex justify-between">
          {/* copyright */}
          <p className="text-[0.75rem] font-bold tracking-[0.097rem]">
            2023 © COPYRIGHT INTELLIGENT ALGORITHM AND BROADCASTING
          </p>
          {/* AI Assitant button */}
          <div
            className="h-[4.5rem] text-white w-[16rem] bg-[#467DCE] flex items-center px-4 gap-4 rounded-tr-[1.25rem] rounded-tl-[1.25rem] cursor-pointer"
            style={{
              boxShadow: "0px -6px 4px 0px rgba(0, 0, 0, 0.07)",
            }}
          >
            {/* icon */}
            <span className=" text-[1.8rem]">
              <BiMessageRoundedDetail />
            </span>
            <p className="text-[1rem] font-bold tracking-[0.26rem]">
              AI ADVISOR
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer