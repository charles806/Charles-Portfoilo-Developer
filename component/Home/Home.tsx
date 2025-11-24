"use client";
import React from "react";
import ResponsiveNav from "@/component/Home/NavBar/ResponsiveNav";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "../Resume/Resume";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";
import Contact from "./Contact/Contact";


const Home = () => {
  return (
    <main className="overflow-hidden bg-[#0d0d1f]">
      <ResponsiveNav />
      <Hero />
      <Services />
      <Resume />
      <Project />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
