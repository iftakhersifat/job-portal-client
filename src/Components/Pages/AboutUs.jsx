import React from 'react';
import { PiGreaterThan } from 'react-icons/pi';

import banner from '/src/assets/banner-about.jpg'
import { Link, NavLink } from 'react-router';

const AboutUs = () => {
    return (
        <div>

            {/* overlay parts */}
            <div style={{ backgroundImage: `url(${banner})` }}
        className="relative bg-cover bg-center h-[200px] py-10 mb-8">
            
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      
        {/* Content */}
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center space-x-2">
            <NavLink to="/" className="text-2xl">Home</NavLink>
            <span><PiGreaterThan size={25} /></span>
            <NavLink to="/about-us" className="text-2xl">About Us</NavLink>
          </div>
        </div>
      </div>

      {/* image and title part */}
      <div className="container mx-auto">
      <div className="flex flex-col-reverse gap-4 md:flex-row justify-between py-12 px-6 md:px-0">
        {/* title and description */}
        <div className="flex flex-col text-left justify-center space-y-4">
          <h1 className="text-2xl text-black font-bold">About Us</h1>
          <h4 className="text-gray-800">We create unique experiences</h4>
          <p className="text-gray-500 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
          </p>
          <button className="btn bg-[#613FE5] w-[150px] rounded-xl text-white px-6 py-2">
            Read More
          </button>
        </div>

        {/* image */}
        <div className="md:w-[550px] w-[350px]">
          <img src="/src/assets/about-us.jpg" className='rounded-xl' alt="About Us" />
        </div>
      </div>
    </div>
        </div>

    );
};

export default AboutUs;