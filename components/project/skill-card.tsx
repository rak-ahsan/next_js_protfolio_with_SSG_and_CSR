import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  title?: string;
  skills?: string[];
  grid?: string;
  logo?: string; // Image path
  Children?: React.ReactNode;
}

export const CardSkills: React.FC<Props> = ({
  title,
  skills,
  grid,
  logo,
  Children,
}) => {
  return (
    <Card className="w-[350px] p-5">
      <CardHeader>
        <CardTitle className="text-center bg-[#E0F7FA] p-2 rounded-lg dark:bg-gray-600">
          {title}
        </CardTitle>
        <CardDescription>
          <div className={`grid grid-cols-12 text-center ${grid} gap-2 mt-3`}>
            {skills?.map((skill, index) => (
              <React.Fragment key={index}>
                <span
                  className="p-1 hover:text-sm hover:p-2 transition-all hover:duration-700 dark:bg-gray-600 bg-green-700 hover:bg-yellow-300 hover:text-black rounded-lg text-white dark:text-white text-[12px] dark:hover:bg-blue-900"
                  key={index}
                >
                  {skill}
                </span>
              </React.Fragment>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-3">{Children}</CardContent>
    </Card>
  );
};
