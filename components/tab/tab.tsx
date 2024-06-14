"use client";
import { Tab } from "@headlessui/react";
import { CardProject } from "../project/card";
import SkillsPage from "@/app/skills/page";
import AboutPage from "@/app/about/page";
import Experience from "@/app/exprience/page";
import Education from "@/app/education/page";

const tabItems = [
  "Skills",
  "About",
  "Projects",
  "Experience",
  "Education",
  "Professional Course",
];

export default function Tabs() {
  return (
    <div className="lg:px-2 lg:py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex lg:flex-row flex-col lg:space-x-1 rounded-xl p-1 lg:justify-between lg:space-y-0 space-y-4 items-center">
          {tabItems.map((item, index) => (
            <Tab
              key={index}
              className="hover:text-sm hover:p-2 transition-all hover:duration-700 bg-[#E46F0D] text-white hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-[#507d2a] focus:text-white w-full p-2 rounded-lg"
            >
              {item}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-5">
          <Tab.Panel>
            <SkillsPage />
          </Tab.Panel>
          <Tab.Panel>
            <AboutPage />
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-3 gap-4 lg:pb-0 pb-16">
              <CardProject
                title="Real Estate Management"
                framework="Raw Php & Raw Mysql"
                projectImage={"/rem.jpg"}
                projectAlt={"rakib_ahsan_raw_php_project"}
                iconImagPath={"/php.png"}
                description={`This Application is Made For Real Estate  Companies Here They can
                calculate all of their land and Apartments. Agents will get commission
                according to their sales`}
                modules={`Dashboard , Admin , Agent , User , Reports , Profit , Loss , Booking ,and
                , Commission based on sell`}
                tools={`PHP, MySQL, Javascript, Html, CSS, Ajax ,Jquery`}
                github={`https://github.com/rak-ahsan/CodeStar.git`}
                demo={"https://rem.rakahsan.online/"}
              />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <Experience />
          </Tab.Panel>
          <Tab.Panel>
            <Education />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
