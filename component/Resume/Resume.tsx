import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact, FaDatabase } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const Resume = () => {
  return (
    <section className="relative z-20 bg-[#0d0d1f] text-white pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Work Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200"> Experience</span>
          </h1>
          <div className="mt-8">
            <ResumeCard
              Icon={FaReact}
              role="Frontend Developer / Instructor"
              date="Jan 11, 2025 – May 3, 2025"
              info="Developed responsive React interfaces, integrated APIs, improved performance, taught coding fundamentals, guided 40+ learners, and enhanced UX across projects."
            />
            <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Developer"
              date="June 11, 2025 – Current"
              info="Building a MERN startup platform supporting struggling African vendors, featuring dynamic content, reusable components, optimized performance, and improved user flow and responsiveness."
            />
          </div>
        </div>
        {/* Education Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200"> Education</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaReact}
              role="Frontend Web Development"
              date="June 21, 2024 – November 3, 2024"
              info="Learnt HTML, CSS, JavaScript, React, and responsive design principles to build engaging user interfaces."
            />

            <ResumeCard
              Icon={FaDatabase}
              role="Backend Web Development"
              date="December 14, 2024 – March 13, 2025"
              info="Learnt Node.js, Express, MongoDB, RESTful APIs, PHP, and server-side development to create robust backend systems."
            />

            <ResumeCard
              Icon={FaComputer}
              role="Information Technology"
              date="September 17, 2025 – Ongoing"
              info="Learning about computer systems, networks, databases, and cybersecurity to enhance technical expertise."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
