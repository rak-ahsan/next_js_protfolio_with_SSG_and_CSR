import SideBar from "@/components/side/side-bar";
import TopNavBar from "@/components/top-nav-bar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaMobile, FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdAttachEmail } from "react-icons/md";

const page = () => {
  return (
    <>
      <div className="bg-[#E46F0D] h-[.2rem]"></div>
      <div className="container ">
        <TopNavBar />
      </div>
      <div className="border-b border-[#ccc] mt-3"></div>
      <div className="container grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-10 flex justify-between">
          <div className="p-[20px] gap-4">
            <div className="col-span-2 flex space-x-4">
              <Image
                src={"/dp.jpg"}
                alt={"profile-image-rakib-ahsan"}
                height={128}
                width={128}
                className="rounded-sm"
              />
              <div>
                <h1 className="text-[38px]">Rakibul Islam</h1>
                <p className="text-[22px] text-gray-600">
                  Full Stack Web Developer
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-1">
                    <LiaBirthdayCakeSolid size={20} />
                    <p className="text-[12px]">join today</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CiClock2 size={20} />
                    <p className="text-[12px]">join today</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaRegCalendarAlt size={18} />
                    <p className="text-[12px]">join today</p>
                  </div>
                </div>
                <div className="flex space-x-4 items-center mt-2">
                  <Link
                    href="https://github.com/rak-ahsan"
                    target="_blank"
                    className="flex items-center space-x-1 border-b border-gray-500"
                  >
                    <IoLogoGithub size={18} color="gray" />
                    <span className="text-[12px]">rak-ahsan</span>
                  </Link>
                  <Link
                    href="https://github.com/rak-ahsan"
                    target="_blank"
                    className="flex items-center space-x-1 border-b border-gray-500"
                  >
                    <IoLogoLinkedin size={18} color="gray" />
                    <span className="text-[12px]">rakibahsan</span>
                  </Link>

                  <Link
                    href="tel:+8801775566772"
                    target="_blank"
                    className="flex items-center space-x-1 border-b border-gray-500"
                  >
                    <FaMobile size={15} color="gray" />
                    <span className="text-[12px]">01775566772</span>
                  </Link>

                  <Link
                    href="mailto:rakibzubayar@gmail.com"
                    target="_blank"
                    className="flex items-center space-x-1 border-b border-gray-500"
                  >
                    <MdAttachEmail size={18} color="gray" />
                    <span className="text-[12px]">rakibzubayar@gmail.com</span>
                  </Link>
                  <Link
                    href="https://github.com/rak-ahsan"
                    target="_blank"
                    className="flex items-center space-x-1"
                  >
                    <FaLocationDot size={18} color="gray" />
                    <span className="text-[12px]">Dhaka</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dp">2</div>
        </div>
      </div>
    </>
  );
};

export default page;
