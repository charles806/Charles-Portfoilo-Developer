import React from "react";

const Contact = () => {
  return (
    <div className=" relative z-20 bg-[#0d0d1f] text-white pt-20 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let’s discuss how I can help you achieve
            your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
