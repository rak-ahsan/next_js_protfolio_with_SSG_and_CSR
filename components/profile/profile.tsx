import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFilePdf, FaMobile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { CarouselSkill } from "../carosol";

const Profile = () => {
  return (
    <div className="lg:col-span-10 flex justify-between">
      <div className="lg:p-[20px] gap-4">
        <div className="lg:col-span-2 lg:flex space-x-4">
          <div className="flex justify-center items-center ">
            <Image
              src={"/dp.jpg"}
              alt={"profile-image-rakib-ahsan"}
              height={128}
              width={128}
              className="rounded-sm"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
