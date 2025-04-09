import React from 'react';
import { Link } from 'react-router-dom';
import addStory from '../pages/WriteStoriesPage.jsx'; // Import the addStory function


function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center bg-gradient-to-r from-[#EF060F] to-[#b60cf2] fixed top-0 left-0 w-full z-50">
      <div className="flex items-center">
        {/* Logo */}
        <Link to="/" className="text-[#081A42] text-2xl font-bold tracking-tight">
          Storyverse
        </Link>
      </div>
      <div className="space-x-4">
        {/* Main Navigation Links */}
        <Link to="/" className="text-[#081A42] text-2xl p-6 font-semibold">
          Home
        </Link>
        <Link to="/browse" className="text-[#081A42] p-10 text-2xl font-semibold">
          Browse
        </Link>
        <a href="#write-stories" className="text-[#081A42] p-10 text-2xl font-semibold">Write Story</a>

        {/* Dropdown Menu */}
        <div className="relative group inline-block text-[#081A42]">
          <button className="text-[#081A42] p-6 font-semibold group-hover:text-[#EF060F] text-2xl focus:outline-none">
            Categories
          </button>
          <ul className="absolute hidden space-y-2 bg-white text-[#081A42] group-hover:block border border-[#081A42] py-2 rounded-lg shadow-lg">
            <li>
              <Link to="/categories/fantasy" className="block p-4">Fantasy</Link>
            </li>
            <li>
              <Link to="/categories/romance" className="block p-4">Romance</Link>
            </li>
            <li>
              <Link to="/categories/romance" className="block p-4">thriller</Link>
            </li>
            <li>
              <Link to="/categories/romance" className="block p-4">scifi</Link>
            </li>
            <li>
              <Link to="/categories/romance" className="block p-4">horror</Link>
            </li>
            <li>
              <Link to="/categories/romance" className="block p-4">Technical</Link>
            </li>
          </ul>
        </div>
     
        <Link  to="/login" className="text-[#081A42] p-10 text-2xl font-semibold" >Login</Link>
        <Link to="/signup" className="text-[#081A42] p-10 text-2xl font-semibold" >Signup</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
