"use client";

import React, { useEffect, useState } from "react";

const Education = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 pb-5">
      <div className="left relative">
        <div className="pr-4 text-end mt-[13.5rem]">
          <p className="bg-blue-600 dark:bg-yellow-500 rounded-full w-[1rem] text-center h-4 absolute top-[15rem] right-[-10px] z-30"></p>
          <div
            className={`${
              loading
                ? "transition-all duration-1000 mr-[150px] opacity-0"
                : "pl-0 transition-all duration-1000"
            }`}
          >
            <p className="pt-4 text-xl">
              Bachelor of Social Science (BSS) <small>(2018)</small>
            </p>
            <span>National University</span>
            <br />
          </div>
        </div>
        <div className="pr-4 text-end mt-[13.5rem] relative">
          <p className="bg-blue-600 dark:bg-yellow-500 rounded-full w-[1rem] text-center h-4 absolute top-[1.5rem] right-[-10px] z-30"></p>
          <div
            className={`${
              loading
                ? "transition-all duration-1000 mr-[150px] opacity-0"
                : "pl-0 transition-all duration-1000"
            }`}
          >
            <p className="pt-4 text-xl">
              Secondary School Certificate (SSC) <small>(2012)</small>
            </p>
            <span>Group : Science</span>
            <br />
            <p className="leading-none text-sm pt-1 pb-1">
              Board:Barishal , School:Betagi Govt Pilot High School
            </p>
          </div>
        </div>
      </div>
      <div
        className={`middle border-l-4 border-black dark:border-gray-300 mt-[2rem] pb-[2rem]border-rounded rounded-t-sm relative h-screen`}
      >
        <div className="pl-4">
          <p className="bg-blue-600 dark:bg-yellow-500 rounded-full w-[1rem] text-center h-4 absolute top-[20px] left-[-10px]"></p>
          <div
            className={`${
              loading
                ? "transition-all duration-1000 ml-[150px] opacity-0"
                : "pl-0 transition-all duration-1000"
            }`}
          >
            <p className="pt-4 text-xl">
              Master of Social Science (MSS) <small>(2020)</small>
            </p>
            <span>National University</span>
            <br />
          </div>
        </div>

        <div className="pl-4 mt-[15rem] relative">
          <p className="bg-blue-600 dark:bg-yellow-500 rounded-full w-[1rem] text-center h-4 absolute top-[20px] left-[-10px]"></p>
          <div
            className={`${
              loading
                ? "transition-all duration-1000 ml-[150px] opacity-0"
                : "pl-0 transition-all duration-1000"
            }`}
          >
            <p className="pt-4 text-xl">
              Higher Secondary School Certificate (HSC) <small>(2014)</small>
            </p>
            <span>Group : Science</span>
            <br />
            <p className="leading-none text-sm pt-1 pb-1">
              Board:Barishal , College:Betagi Govt College
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
