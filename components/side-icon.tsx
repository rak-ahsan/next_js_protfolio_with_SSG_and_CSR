import React from "react";

interface Props {
  icon: any;
  title: string;
}

const SideIcon: React.FC<Props> = ({ icon, title }) => {
  return (
    <div className="flex pt-5 space-x-2 items-center">
      {icon}
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default SideIcon;
