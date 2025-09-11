import React from "react";

const Recent = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between container mx-auto px-6 lg:px-0 py-16">
        
        {/* Left Content */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          <p className="text-sm font-medium text-purple-600">Recent Job</p>
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold leading-tight text-gray-900">
            Over all <span className="text-black">10,00+ Talented</span> <br />
            People Registered in <br /> Our Website
          </h1>
          <p className="text-gray-500 max-w-md mx-auto md:mx-0">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-md transition">
            Join Now
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1 mt-10 md:mt-0 w-full">
          <img
            src="/src/assets/manbg.png"
            alt="Happy Guy"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Recent;
