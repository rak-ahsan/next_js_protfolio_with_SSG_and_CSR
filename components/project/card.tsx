import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { TbWorldWww } from "react-icons/tb";

interface Props {
  title?: string;
  description?: string;
  iconImagPath?: any;
  iconAlt?: any;
  projectImage?: any;
  projectAlt?: any;
  modules?: any;
  tools?: any;
  framework?: any;
  demo?: any;
  github?: any;
}

export const CardProject: React.FC<Props> = ({
  title,
  iconImagPath,
  iconAlt,
  projectImage,
  projectAlt,
  description,
  modules,
  tools,
  demo,
  framework,
  github,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card
      className={`w-[350px] p-5 relative ${
        loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"
      }`}
    >
      <Image
        src={iconImagPath}
        alt={iconAlt}
        height={50}
        width={50}
        className="rounded-full absolute right-0 top-5 z-40"
      />
      <CardHeader>
        <div className="flex justify-center mb-3">
          <Image
            src={projectImage}
            alt={projectAlt}
            height={100}
            width={500}
            className="rounded-sm"
          />
        </div>
        <CardTitle>{title}</CardTitle>

        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-2">
          <small>
            <span className="text-[13px] bg-[#88d8c0] dark:bg-gray-700 rounded-lg px-2 mr-1">
              Framework :
            </span>
            {framework}
          </small>
          <br />
          <small>
            <span className="text-[13px] bg-[#88d8c0] rounded-lg px-2 mr-1 dark:bg-gray-700">
              Modules:
            </span>
            {modules}
          </small>
          <br />
          <small>
            <span className="text-[13px] bg-[#88d8c0] rounded-lg px-2 mr-1 dark:bg-gray-700">
              Tools & Technologies:
            </span>
            {tools}
          </small>
          <br />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-3">
        <Button variant={"ghost"}>
          <a href={demo} target="_blank">
            <TbWorldWww size={30} />
          </a>
        </Button>
        <Button variant={"ghost"}>
          <a href={github} target="_blank">
            <VscGithub size={30} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
