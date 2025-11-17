"use client";
import React from "react";
import ResponsiveNav from "@/component/Home/NavBar/ResponsiveNav";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "../Resume/Resume";

const Home = () => {
  return (
    <main className="overflow-hidden h-full bg-[#0d0d1f]">
      <ResponsiveNav />
      <Hero />
      <Services />
      <Resume />
    </main>
  );
};

export default Home;
