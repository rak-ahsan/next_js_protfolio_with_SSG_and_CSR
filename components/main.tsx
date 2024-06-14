import React, { ReactNode } from "react";
import TopNavBar from "./top-nav-bar";
import SideBar from "./side/side-bar";
import MiniNav from "./nav/mininav";

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
      <div className="lg:container grid grid-cols-12 gap-4 lg:p-0 p-3">
        <div className="lg:col-span-2 lg:block hidden">
          <SideBar />
        </div>
        <div className="lg:col-span-10 col-span-12">{children}</div>
      </div>
      <div className="fixed bottom-0 w-full p-3 bg-gray-300 dark:bg-slate-500 rounded-lg lg:hidden block">
        <MiniNav />
      </div>
    </>
  );
};

export default Main;
