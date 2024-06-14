import Image from "next/image";
import React from "react";
import { FaInbox, FaQuestionCircle, FaTrophy } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { ModeToggle } from "../dark-mode";
import Link from "next/link";
import { Briefcase, CircleUserRound, School, Workflow } from "lucide-react";

const MiniNav = () => {
    return (
        <div className="flex space-x-4 justify-between items-center mb-1">

            <div className="1">
                <Link href='/education' >
                    <School size={25} />
                </Link>

            </div>
            <div className="1">
                <Link href='/skills' >
                    <FaTrophy size={20} />
                </Link>

            </div><div className="hover:bg-gray-500  transition-all duration-500 ease-out flex justify-center items-center">
                <Link href="/">
                    <Image
                        src={"/dp.jpg"}
                        alt={"profile-image-rakib-ahsan"}
                        height={10}
                        width={20}
                        className="rounded-sm" />
                </Link>
            </div><div className="1">
                <Link href="/exprience">
                    <Briefcase size={20} />
                </Link>

            </div><div className="hover:bg-gray-500">
                <Link href="/about">
                    <CircleUserRound size={23} />
                </Link>

            </div>
        </div >
    );
};

export default MiniNav;
