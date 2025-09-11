import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Firebase/AuthProvider';

const Navbar = () => {

    const{user, logOut}= use(AuthContext);

    const handleLogOut = () => {
    logOut()
      .then(() => console.log('Logout successfully!'))
      .catch(error => console.log(error.message));
  };

    const links=<>
    <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 underline' : 'hover:text-violet-500 transition'}>Home</NavLink></li>
    </>

    return (
        <div className="container mx-auto navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <h1 className="gap-0 font-bold text-2xl"><span className='text-blue-400'>JOB</span>PORTAL</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    {
        user? <button onClick={handleLogOut} className='btn'>Log Out</button> : <><NavLink className="bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition text-sm sm:text-base focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" to="/register">Register</NavLink>
    <NavLink className="bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition text-sm sm:text-base focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" to="/login">Login</NavLink></>
    }
  </div>
</div>
    );
};

export default Navbar;