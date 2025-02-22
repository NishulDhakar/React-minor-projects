import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900  shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-love text-orange-500">React Lab</span>
            <span className="ml-2 text-xl font-semibold text-white"></span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              Home
            </Link>

            <Link 
              to="/about"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              About
            </Link>

            <Link 
              to="/Allprojects"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              All Projects
            </Link>
          
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-orange-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
