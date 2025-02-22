import React from "react";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/nishuldhakar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} className="group-hover:text-gray-300" />
                <span>GitHub</span>
              </a>
              <a
                href="https://x.com/NishulDhakar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter size={20} className="group-hover:text-blue-400" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nishuldhakar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Linkedin size={20} className="group-hover:text-blue-500" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/nishuldhakar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram size={20} className="group-hover:text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nishul Dhakar. All rights reserved.
          </p>
          <nav className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
