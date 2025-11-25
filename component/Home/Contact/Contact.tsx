import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in all fields");
      return;
    }

    const whatsappNumber = "2347032355643";

    const message = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Email:* ${encodeURIComponent(
      formData.email
    )}%0A*Phone:* ${encodeURIComponent(
      formData.phone
    )}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <div className="relative z-20 bg-[#0d0d1f] text-white pt-16 pb-16">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            {/* Text Contents  */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-400 mt-6 text-base sm:text-lg">
              Reach out to me today and lets discuss how I can help you achieve
              your goals.
            </p>
            {/* Info */}
            <div className="mt-7">
              <div className="flex items-center space-x-3 mb-4">
                <BiEnvelope className="w-9 h-9 text-cyan-300" />
                <a
                  href="mailto:c08445333@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-xl font-bold text-gray-400 hover:text-cyan-300 transition-colors">
                    c08445333@gmail.com
                  </p>
                </a>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <BiPhone className="w-9 h-9 text-cyan-300" />
                <a href="tel:+2347032355643">
                  <p className="text-xl font-bold text-gray-400 hover:text-cyan-300 transition-colors">
                    +2347032355643
                  </p>
                </a>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <BiMap className="w-9 h-9 text-cyan-300" />
                <p className="text-xl font-bold text-gray-400">
                  Ibadan, Nigeria
                </p>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex items-center mt-8 space-x-3">
              <a
                href="https://www.tiktok.com/@codex_x_x"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300">
                  <FaTiktok className="text-white w-6 h-6" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/codecraftter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-all duration-300">
                  <FaInstagram className="text-white w-6 h-6" />
                </div>
              </a>
              <a
                href="https://github.com/charles806"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300">
                  <FaGithub className="text-white w-6 h-6" />
                </div>
              </a>
            </div>
          </div>
          {/* Form */}
          <div className="md:p-10 p-5 bg-[#131332] rounded-lg">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
              placeholder="Email Address"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
              placeholder="Phone Number"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-40"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
