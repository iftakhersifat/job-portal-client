import React from 'react';
import { Link, useLocation } from 'react-router';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer relative bg-[#613FE50D] py-20 px-6 md:px-0">

      {/* Top Banner */}
      {location.pathname === "/" && (
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start bg-[#613FE5] rounded-lg p-7 md:p-12 -mt-45 md:-mt-40'>
          <h1 className='text-white text-2xl max-w-md md:max-w-[400px] font-bold text-center md:text-left'>
            Lets Get Connected And Start Finding Your Dream Job
          </h1>
          <button className='btn bg-white text-violet-500 mt-4 md:mt-4'>Click here</button>
        </div>
      )}

      {/* Main Footer */}
      <div className='container mx-auto mt-8 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0'>
        <div className='space-y-3'>
          <h1 className="font-bold text-2xl"><span className='text-blue-500'>JOB</span>PORTAL</h1>
          <p className='text-gray-500 max-w-md'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
        </div>

        <nav className='flex flex-col space-y-2'>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav className='flex flex-col space-y-2'>
          <h6 className="footer-title">Company</h6>
          <Link to="/about-us" className="link link-hover">About us</Link>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <Link to="/blogs" className="link link-hover">Blogs</Link>
        </nav>

        <nav className='flex flex-col space-y-2'>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>

      {/* Horizontal dashed line */}
      <div className="w-full border-t-[1px] border-t-blue-400 border-dashed mt-8"></div>

      <p className="mx-auto mt-6 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} - All rights reserved by Job-Portal
      </p>
    </footer>
  );
};

export default Footer;
