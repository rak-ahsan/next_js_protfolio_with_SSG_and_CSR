"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [toggle, setToggle] = React.useState(true);

  const handelMode = (data: any) => {
    setToggle(!toggle);
    setTheme(data);
  };

  return (
    <div className="flex items-center justify-between w-full">
      {toggle ? (
        <div
          onClick={() => handelMode("light")}
          className="hover:bg-white rounded-lg "
        >
          <IoIosSunny size={25} color="yellow" />
        </div>
      ) : (
        <div
          onClick={() => handelMode("dark")}
          className="hover:bg-gray-300 rounded-lg p-1"
        >
          <IoMoon size={17} />
        </div>
      )}
    </div>
  );
}
