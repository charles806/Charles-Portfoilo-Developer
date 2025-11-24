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

      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
