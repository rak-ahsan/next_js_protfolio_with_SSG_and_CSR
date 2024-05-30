"use client";

import React, { useEffect, useState } from "react";

const Experience = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 h-96">
      <div className="left"></div>
      <div
        className={`middle border-l-4 border-black dark:border-gray-300 mt-[2rem] border-rounded rounded-t-sm relative`}
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
              Soft Park IT <small>(June 2023 - Present)</small>
            </p>
            <span>Junior Web Developer</span>
            <br />
            <p className="leading-none text-sm pt-1 pb-1">
              Soft Park is a cutting-edge software company specializing in
              innovative solutions for businesses across various industries.
            </p>
            <ul className="list-disc pl-5 text-xs">
              <li>
                Framework Efficiency: Utilize Tailwind and Next JS with Laravel
                to develop the application.
              </li>
              <li>Intuitive UX Design: Create user-friendly interfaces.</li>
              <li>Efficient Code Management: Use Git for collaboration.</li>
              <li>
                Responsive Design: Adapt websites with media queries and
                flexible layouts.
              </li>
              <li>HTML & CSS Mastery: Structure and style pages for appeal.</li>
              <li>Interactive Websites: Enhance with dynamic features.</li>
              <li>Compatibility Assurance: Troubleshoot across devices.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
