import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`max-w-5xl mx-auto mt-4 px-4 sm:px-10 py-3
                fixed left-0 right-0 z-50
                ${isOpen ? "rounded-sm" : "rounded-full"}
                border border-white/30
                bg-neutral-200/60 backdrop-blur-md
                shadow-lg text-black transition-all duration-300`}>
      <div className="flex items-center justify-between w-full">
        {/* Text section */}

        <h3 className="text-2xl sm:text-3xl font-bold">Bibek | Portfolio</h3>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base px-4 py-2 transition rounded-full hover:text-white hover:bg-blue-500 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/AboutMe"
              className={({ isActive }) =>
                `text-base px-4 py-2 transition rounded-full hover:text-white hover:bg-blue-500 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
            >
              AboutMe
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Skills"
              className={({ isActive }) =>
                `text-base px-4 py-2 transition rounded-full hover:text-white hover:bg-blue-500 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Project"
              className={({ isActive }) =>
                `text-base px-4 py-2 transition rounded-full hover:text-white hover:bg-blue-500 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `text-base px-4 py-2 transition rounded-full hover:text-white hover:bg-blue-500 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
            >
              ContactMe
            </NavLink>
          </li>
          
        </ul>

        {/* Mobile Menu Button */}
        
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl text-black"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <ul className="lg:hidden mt-4 flex flex-col gap-2 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-base px-4 py-2 w-full text-center transition rounded-full hover:text-white hover:bg-blue-500 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
              onClick={() => setIsOpen(false)} // close menu on click
            >
              Home
            </NavLink>
          </li>
          
           

           <li>
            <NavLink
              to="/AboutMe"
              className={({ isActive }) =>
                `block text-base px-4 py-2 w-full text-center transition rounded-full hover:text-white hover:bg-blue-500 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
              onClick={() => setIsOpen(false)} // close menu on click
            >
              AboutMe
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/Skills"
              className={({ isActive }) =>
                `block text-base px-4 py-2 w-full text-center transition rounded-full hover:text-white hover:bg-blue-500 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
              onClick={() => setIsOpen(false)} // close menu on click
            >
              Skills
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/Project"
              className={({ isActive }) =>
                `block text-base px-4 py-2 w-full text-center transition rounded-full hover:text-white hover:bg-blue-500 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
              onClick={() => setIsOpen(false)} // close menu on click
            >
              Projects
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `block text-base px-4 py-2 w-full text-center transition rounded-full hover:text-white hover:bg-blue-500 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
              onClick={() => setIsOpen(false)} // close menu on click
            >
              ContactMe
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
