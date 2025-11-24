"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
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
import { FaBootstrap, FaPython } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <IoLogoJavascript />, percentage: 84 },
    { name: "React.JS", icon: <FaReact />, percentage: 71 },
    { name: "Next.JS", icon: <RiNextjsFill />, percentage: 69 },
    { name: "HTML5", icon: <FaHtml5 />, percentage: 92 },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 90 },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill />, percentage: 78 },
    { name: "TypeScript", icon: <BiLogoTypescript />, percentage: 65 },
    { name: "Node.JS", icon: <FaNodeJs />, percentage: 70 },
    { name: "PHP", icon: <FaPhp />, percentage: 77 },
    { name: "Vite", icon: <SiVite />, percentage: 75 },
    { name: "MongoDB", icon: <DiMongodb />, percentage: 78 },
    { name: "MySQL", icon: <GrMysql />, percentage: 72 },
    { name: "Bootstrap", icon: <FaBootstrap />, percentage: 80 },
    { name: "Python", icon: <FaPython />, percentage: 60 },
  ];

  return (
    <section className="relative z-20 bg-[#0d0d1f] text-white py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 cursor-pointer">
          {skills.map((skill) => (
            <Tilt
              key={skill.name}
              scale={1.08}
              transitionSpeed={600}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#00d9ff"
              glarePosition="all"
              glareBorderRadius="1.5rem"
              tiltReverse={true}
            >
              <div className="relative group h-full">
                {/* Gradient background effect */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card */}
                <div className="relative bg-linear-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300 shadow-2xl h-full flex flex-col items-center justify-center">
                  {/* Icon container */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="relative bg-slate-800 rounded-full p-4 group-hover:bg-slate-700 transition-colors">
                      <div className="text-4xl sm:text-5xl text-cyan-400">
                        {skill.icon}
                      </div>
                    </div>
                  </div>

                  {/* Skill name */}
                  <h3 className="text-center text-base sm:text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Skill bar background */}
                  <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden border border-slate-600/30">
                    {/* Skill bar fill */}
                    <div
                      className="h-full bg-linear-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>

                  {/* Percentage */}
                  <p className="text-center text-xs sm:text-sm text-cyan-400 font-bold mt-2">
                    {skill.percentage}%
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
