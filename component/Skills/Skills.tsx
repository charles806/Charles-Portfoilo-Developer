import React from "react";
// Icons
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <IoLogoJavascript />,
      percentage: 84,
    },
    {
      name: "React.JS",
      icon: <FaReact />,
      percentage: 71,
    },

    {
      name: "Next.JS",
      icon: <RiNextjsFill />,
      percentage: 69,
    },

    {
      name: "HTML5",
      icon: <FaHtml5 />,
      percentage: 92,
    },

    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      percentage: 90,
    },

    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      percentage: 78,
    },

    {
      name: "TypeScript",
      icon: <BiLogoTypescript />,
      percentage: 65,
    },

    {
      name: "Node.JS",
      icon: <FaNodeJs />,
      percentage: 70,
    },

    {
      name: "PHP",
      icon: <FaPhp />,
      percentage: 77,
    },

    {
      name: "Vite",
      icon: <SiVite />,
      percentage: 75,
    },

    {
      name: "MongoDB",
      icon: <DiMongodb />,
      percentage: 78,
    },

    {
      name: "MySQL",
      icon: <GrMysql />,
      percentage: 72,
    },

    {
      name: "Bootstrap",
      icon: <GrMysql />,
      percentage: 72,
    },
  ];

  return (
    <section className="relative z-20 bg-[#0d0d1f] text-white pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          My <span className="text-cyan-200">Skills</span>
        </h1>

        <div></div>
      </div>
    </section>
  );
};

export default Skills;
