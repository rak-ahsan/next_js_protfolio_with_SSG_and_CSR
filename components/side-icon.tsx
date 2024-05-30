import React from "react";

interface Props {
  icon: any;
  title: string;
  bgColor?: string;
}

const SideIcon: React.FC<Props> = ({ icon, title, bgColor }) => {
  return (
    <div
      className={`flex h-10 space-x-2 items-center ${bgColor} rounded-lg mr-3 ${
        bgColor ? "text-white transition-all duration-1000" : ""
      }`}
    >
      {icon}
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default SideIcon;
