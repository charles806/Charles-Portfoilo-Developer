"use client";
import Image from "next/image";
import React from "react";
import Nagi from "@/image/nagi.jpeg";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import ParticleHero from "./ParticleBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden z-0">
      {/* Background particles */}
      <div className="absolute inset-0">
        <ParticleHero />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col gap-1 items-center text-center px-4">
        <Image
          src={Nagi}
          alt="Hero Image"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 font-bold tracking-wide">
          Bringing your vision to life <br /> with
          <span className="text-cyan-200"> code and creativity</span>
        </h1>

        <h2 className="mt-5 text-sm sm:text-2xl font-medium flex items-center justify-center">
          Hey👋 I&#39;m Charles — A Passionate
          <span className="text-cyan-300 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Backend Developer",
                  "Full Stack Developer",
                  "Mobile App Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>

        <button className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium flex items-center">
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
