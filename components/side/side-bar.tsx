import React from "react";
import { IoMdHome } from "react-icons/io";
import SideIcon from "../side-icon";
import { RiQuestionnaireFill, RiQuestionnaireLine } from "react-icons/ri";
import { IoPricetagSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { FaBuildingUser, FaUserGroup } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="border-r border-[#ccc]">
      <div className="">
        <SideIcon icon={<IoMdHome size={20} />} title={"Home"} />
        <SideIcon
          icon={<RiQuestionnaireFill color="#0C0D0E" size={18} />}
          title={"Question"}
        />
        <SideIcon
          icon={<IoPricetagSharp color="#0C0D0E" size={18} />}
          title={"Tags"}
        />
      </div>
      <div className="mt-5">
        <SideIcon icon={<FaBookmark  size={16} />} title={"Saves"} />
        <SideIcon
          icon={<FaUserGroup  color="#0C0D0E" size={18} />}
          title={"Users"}
        />
        <SideIcon
          icon={<FaBuildingUser  color="#0C0D0E" size={18} />}
          title={"Companies"}
        />
      </div>
    </div>

  );
};

export default SideBar;
