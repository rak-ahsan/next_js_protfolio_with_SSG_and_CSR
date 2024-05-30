"use client";
import { useEffect, useState } from "react";
import { CardSkills } from "@/components/project/skill-card";
import { CarouselSkill } from "@/components/carosol";

const SkillsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    "ReactJS",
    "NextJS",
    "Laravel",
    "MySQL",
    "OOP",
    "CSS",
    "PHP",
    "Git",
    "VueJs",
    "JavaScript",
    "Redux",
  ];

  const softSkills = [
    "Collaboration",
    "Problem-solving",
    "Communication",
    "Time management",
    "Team Management",
  ];

  const AdditionalSkills = [
    "Public Speaking",
    "Writing",
    "Research",
    "Client Management",
  ];
  const languages = ["Bangla", "English", "Hindi"];

  return (
    <div
      className={`grid grid-cols-3 gap-4 justify-between mt-5 ${
        loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"
      }`}
    >
      <CardSkills
        title="Technical Skills"
        skills={skills}
        grid={"grid-cols-4"}
        Children={<CarouselSkill />}
      />

      <CardSkills
        title="Soft Skills"
        skills={softSkills}
        grid={"grid-cols-2"}
      />
      <CardSkills
        title="Additional Skills"
        skills={AdditionalSkills}
        grid={"grid-cols-2"}
      />
      <CardSkills title="Languages" skills={languages} grid={"grid-cols-3"} />
    </div>
  );
};

export default SkillsPage;
