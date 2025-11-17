"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import ui_ux from "@/image/ui_ux.webp";
import web_app from "@/image/web_app.webp";
import design from "@/image/design.webp";
import dev from "@/image/dev.webp";

const Services = () => {
  return (
    <section className="relative z-20 bg-[#0d0d1f] text-white pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-8">
          Collaborate with brands <br /> and agencies to create <br /> impactful
          results
        </h1>
      </div>

      <div className="w-[90%] sm:w-[78%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 item-center">
        <div>
          <ServiceCard
            icon={ui_ux}
            name="UI and UX"
            description="Designing smooth, intuitive digital experiences that users love."
          />
        </div>

        <div>
          <ServiceCard
            icon={web_app}
            name="Web and Mobile App"
            description="Creating fast, responsive, and scalable digital products.."
          />
        </div>

        <div>
          <ServiceCard
            icon={design}
            name="Design & Creative"
            description="Turning imagination into visuals that tell your brand story."
          />
        </div>

        <div>
          <ServiceCard
            icon={dev}
            name="Development"
            description="Building robust, efficient solutions with modern technologies."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
