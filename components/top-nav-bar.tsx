import React from "react";
import { Input } from "@/components/ui/input";
import { FormInput } from "./form/input";
import ProfileImage from "./nav/profile";
import Image from "next/image";

const TopNavBar = () => {
  return (
    <div className="grid grid-cols-4  justify-between mt-3 gap-4 ">
      <div className="flex justify-start items-center">
        <Image
          src={"/logo.png"}
          alt={"rakib-ahsan-logo"}
          width={30}
          height={30}
          className="mt-[-0.75rem]"
        />
        <p> Rakib Ahsan</p>
        <p className="pl-5 text-gray-500 text-[12px]">Portfolio</p>
      </div>

      <div className="w-full col-span-2">
        <FormInput placeholder={"search"} type={"text"} />
      </div>
      <div>
        <ProfileImage />
      </div>
    </div>
  );
};

export default TopNavBar;
