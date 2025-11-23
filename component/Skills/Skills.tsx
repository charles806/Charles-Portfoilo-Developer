"use client";

import React, { useState, useRef, useEffect } from "react";
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

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScroll || isDragging || scrollCount >= 100) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 2;
        // Loop back to start when reaching the end
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          sliderRef.current.scrollLeft = 0;
          setScrollCount((prev) => prev + 1);
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isAutoScroll, isDragging, scrollCount]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative z-20 bg-[#0d0d1f] text-white pt-20 pb-16">
      <div className="w-[90%] sm:w-[85%] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          My <span className="text-cyan-200">Skills</span>
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          Drag to scroll or watch it auto-scroll
        </p>

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <Tilt key={`${skill.name}-${index}`} scale={1.05} transitionSpeed={400}>
              <div className="flex-shrink-0 bg-gradient-to-br from-purple-900/40 to-cyan-900/40 text-center w-40 rounded-3xl flex flex-col items-center justify-center p-6 shadow-lg border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-cyan-400/20 hover:shadow-lg">
                <div className="text-5xl mb-4 text-cyan-300">{skill.icon}</div>
                <p className="text-2xl font-semibold text-white">
                  {skill.percentage}%
                </p>
                <p className="text-purple-300 mt-2 text-sm">{skill.name}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Skills;