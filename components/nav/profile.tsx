import Image from "next/image";
import React from "react";
import { FaInbox, FaQuestionCircle, FaTrophy } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const ProfileImage = () => {
  return (
    <div className="flex space-x-4 justify-center items-center">
      <div className="hover:bg-gray-500  transition-all duration-500 ease-out ">
        <Image
          src={"/dp.jpg"}
          alt={"profile-image-rakib-ahsan"}
          height={10}
          width={20}
          className="rounded-sm"
        />
      </div>
      <div className="1">
        <FaInbox color="gray" size={25} />
      </div>
      <div className="1">
        <FaTrophy size={20} color="green" />
      </div>
      <div className="1">
        <FaQuestionCircle size={20} color="gray" />
      </div>
      <div className="hover:bg-gray-500">
        <MdMessage size={23} color="gray" />
      </div>
    </div>
  );
};

export default ProfileImage;
