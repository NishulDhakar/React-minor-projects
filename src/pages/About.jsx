import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-orange-500">Nishul Dhakar</span> 👋
          </h1>
          <p className="text-lg text-gray-400">
            A passionate developer crafting web experiences with React.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-6">
            {[
              { href: "https://github.com/nishuldhakar", Icon: Github, label: "GitHub" },
              { href: "https://x.com/NishulDhakar", Icon: Twitter, label: "Twitter" },
              { href: "https://www.linkedin.com/in/nishuldhakar/", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://www.instagram.com/nishuldhakar/", Icon: Instagram, label: "Instagram" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
              >
                <Icon size={24} className="group-hover:text-orange-500" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gray-800/90 rounded-xl shadow-lg p-8 border border-gray-700 mb-16">
          <h2 className="text-2xl font-semibold text-orange-400 mb-6">About This Project</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to my React Projects Showcase! This site is a collection of various mini-projects built with React, each demonstrating different concepts and best practices.
          </p>
          <p className="text-gray-300 mt-4">
            You'll find projects covering state management, API integration, UI design, and more.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-800/90 rounded-xl shadow-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-semibold text-orange-400 mb-6">Technical Skills Used in These Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "React.js",
              "JavaScript",
              "Tailwind CSS",
              "HTML5",
              "CSS3",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-700 rounded-lg p-4 text-center text-orange-400 font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-orange-500 hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
