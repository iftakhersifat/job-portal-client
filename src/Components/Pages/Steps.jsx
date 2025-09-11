import React from "react";
import { FaSearch, FaFileAlt, FaUserPlus, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch size={28} />,
    title: "Search Jobs",
    desc: "The standard chunk of used below of those interested.",
  },
  {
    icon: <FaFileAlt size={28} />,
    title: "Cv/Resume",
    desc: "The standard chunk of used below of those interested.",
  },
  {
    icon: <FaUserPlus size={28} />,
    title: "Create Account",
    desc: "The standard chunk of used below of those interested.",
  },
  {
    icon: <FaCheckCircle size={28} />,
    title: "Apply Them",
    desc: "The standard chunk of used below of those interested.",
  },
];

const Steps = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-0 text-center">

        {/* Section Heading */}
        <p className="text-blue-600 font-medium">How It Work</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Follow Easy <span className="text-blue-600">4 Steps</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {steps.map((item, i) => (
          <div key={i} className="relative group rounded-xl border border-blue-50 overflow-hidden shadow-md hover:shadow-xl">
            
            {/* Overlay (blue background slide) */}
            <div className="absolute inset-0 bg-blue-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

            {/* Content */}
            <div className="relative z-10 p-8 text-center transition-colors duration-500 group-hover:text-white">
              <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center mx-auto rounded-lg mb-6 group-hover:bg-white group-hover:text-blue-600 transition">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-100">{item.desc}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
