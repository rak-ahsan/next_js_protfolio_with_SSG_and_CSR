"use client";
import React from "react";
import { IoMdHome } from "react-icons/io";
import SideIcon from "../side-icon";
import { RiQuestionnaireFill, RiQuestionnaireLine } from "react-icons/ri";
import { IoPricetagSharp } from "react-icons/io5";
import { FaBookmark, FaIndustry, FaTools } from "react-icons/fa";
import { FaBuildingUser, FaUserGroup } from "react-icons/fa6";
import Link from "next/link";
import { PiStudentFill } from "react-icons/pi";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="border-r border-[#ccc] h-screen">
      <div className="mt-3">
        <Link href="/">
          <SideIcon
            icon={<IoMdHome size={20} />}
            title={"Home"}
            bgColor={`${pathname == "/" ? "bg-[#34568B] pl-5" : ""}`}
          />
        </Link>
        <Link href="/skills">
          <SideIcon
            icon={<FaTools size={18} />}
            title={"Skills"}
            bgColor={`${pathname == "/skills" ? "bg-[#34568B]  pl-5" : ""}`}
          />
        </Link>
        <Link href="/about">
          <SideIcon
            icon={<IoPricetagSharp size={18} />}
            title={"About"}
            bgColor={`${pathname == "/about" ? "bg-[#34568B]  pl-5" : ""}`}
          />
        </Link>
        <Link href="/exprience">
          <SideIcon
            icon={<FaIndustry size={18} />}
            title={"Experience"}
            bgColor={`${pathname == "/exprience" ? "bg-[#34568B]  pl-5" : ""}`}
          />
        </Link>
        <Link href="/education">
          <SideIcon
            icon={<PiStudentFill size={20} />}
            title={"Education"}
            bgColor={`${pathname == "/education" ? "bg-[#34568B]  pl-5" : ""}`}
          />
        </Link>
      </div>
      <div className="mt-5">
        <SideIcon icon={<FaBookmark size={16} />} title={"Saves"} />
        <SideIcon icon={<FaUserGroup size={18} />} title={"Users"} />
        <SideIcon icon={<FaBuildingUser size={18} />} title={"Companies"} />
      </div>
    </div>
  );
};

export default SideBar;
