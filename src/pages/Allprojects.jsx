import React from "react";
import { Link } from "react-router-dom";

function AllProjects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-4xl font-bold text-orange-500 tracking-wide">
            React Lab
          </span>
          <p className="text-lg text-gray-400 mt-2">
            Explore exciting projects built with React.
          </p>
        </div>

        {/* Project List */}
        <div className="bg-gray-800/90 rounded-xl shadow-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-orange-400">
            About Projects
          </h2>
          
          <ul className="space-y-4">
            {/* Password Generator Project */}
            <li>
              <Link
                to="/password-generator"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 flex items-center space-x-2"
              >
                🔑 <span>Password Generator - Create secure passwords</span>
              </Link>
            </li>

            {/* More Projects Coming Soon */}
            <li className="text-gray-400">🚀 More projects coming soon!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
