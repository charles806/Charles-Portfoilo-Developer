"use client";
import React from "react";
import ResponsiveNav from "@/component/Home/NavBar/ResponsiveNav";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "../Resume/Resume";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <main className="overflow-x-hidden bg-[#0d0d1f]">
      <ResponsiveNav />
      <Hero />
      <Services />
      <Resume />
      <Project />
      <Skills />
    </main>
  );
};

export default Home;
