import React, { useState } from "react";
import Image from "next/image";
import Project1 from "../../image/p1.png";
import Project2 from "../../image/p2.png";
import Project3 from "../../image/p3.png";
import Project4 from "../../image/p4.png";

const Project = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: Project1,
      title: "Salesive , E-commerce startup",
      tech: "MongoDB, React.JS, Express.Js, Node.JS",
    },
    { id: 2, image: Project2, title: "Spa Website", tech: "PHP and MySQL" },
    { id: 3, image: Project3, title: "Hotel Website", tech: "PHP and MySQL" },
    {
      id: 4,
      image: Project4,
      title: "Bootcamp WebApp",
      tech: "MongoDB, React.JS, Express.Js, Node.JS",
    },
  ];

  return (
    <section className="relative z-20 bg-[#0d0d1f] text-white pt-20 pb-16">
      <div className="w-[90%] sm:w-[85%] mx-auto">
        <h1 className="text-2xl sm:text-4xl xl:text-5xl font-bold text-center text-white">
          A small selection of{" "}
          <span className="text-cyan-200">recent projects</span>
        </h1>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={900}
                  className={`rounded-lg w-full h-auto transition-transform duration-500 ${
                    hoveredId === project.id ? "scale-110" : "scale-100"
                  }`}
                  priority
                />

                <div
                  className={`absolute inset-0 bg-black/40 rounded-lg transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div
                  className={`absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent rounded-lg transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <h1
                className={`mt-4 text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
                  hoveredId === project.id ? "text-cyan-300" : "text-white/80"
                }`}
              >
                {project.title}
              </h1>
              <h1 className="pt-2 font-medium text-white">{project.tech}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
