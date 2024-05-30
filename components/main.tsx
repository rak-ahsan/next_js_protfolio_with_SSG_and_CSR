import React, { ReactNode } from "react";
import TopNavBar from "./top-nav-bar";
import SideBar from "./side/side-bar";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
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
        <div className="col-span-10">{children}</div>
      </div>
    </>
  );
};

export default Main;
