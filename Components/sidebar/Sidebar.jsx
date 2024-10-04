"use client";
// import { button } from "shadcn-ui";
import { TbSmartHome } from "react-icons/tb";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import Image from "next/image";
import user01 from "../../public/assets/user-01.png";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="bg-white h-screen p-4  absolute left-0 top-0 z-[9999] flex flex-col items-center">
      <nav className="border rounded-full w-16 h-[100%] bg-gray-100 shadow-lg overflow-y-auto no-scrollbar">
        <aside className="flex-col flex items-center py-3 justify-between h-full ">
          <div className="flex-col flex items-center ">
            <span className="bg-white p-1 rounded-lg my-3 shadow-md">
              <TbSmartHome className="  md:w-6 md:h-6 text-violet-400" />
            </span>
            <span className=" my-3 ">
              <AiOutlineUserSwitch className="  md:w-5 md:h-5 text-gray-400" />
            </span>
            <span className=" my-3  ">
              <TiMessages className=" md:w-5 md:h-5 text-gray-400" />
            </span>
          </div>
          <div className="flex-col flex items-center">
            <span className=" my-3 ">
              <AiOutlineUserSwitch className="  md:w-5 md:h-5 text-gray-400" />
            </span>
            <span className=" my-3  ">
              <TiMessages className=" md:w-5 md:h-5 text-gray-400" />
            </span>
            <span className="h-10 w-10 rounded-full">
              <Image src={user01} alt="Dashboard Icon" />
            </span>
          </div>
        </aside>
      </nav>
    </div>
  );
};
