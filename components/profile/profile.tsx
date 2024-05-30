import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { FaFilePdf, FaMobile, FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdAttachEmail } from "react-icons/md";
import { CarouselSkill } from "../carosol";
import { File } from "lucide-react";

const Profile = () => {
  return (
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
            <div className="text-[38px] flex items-center justify-between">
              <span>Rakibul Islam</span>
              <a
                href="/rakibul_islam_resume.pdf"
                download="rakibul_islam_resume"
                title="Download Resume"
                className="hover:bg-slate-400 hover:text-white p-4 rounded-full flex items-center"
              >
                <span className="text-sm"> Resume -</span> <FaFilePdf size={25} />
              </a>
            </div>
            <p className="text-[22px] text-gray-600">
              Full Stack Web Developer
            </p>
            {/* <div className="flex space-x-4">
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
            </div> */}
            <div className="flex space-x-4 items-center mt-2 mb-2">
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
            <CarouselSkill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
