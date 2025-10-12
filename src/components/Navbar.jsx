import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons
import { Link } from 'react-scroll'
import { useEffect, useRef } from "react";

export default function Navbar() {

const [active, setActive] = useState(false);
 const handleClick = () => {
    setActive(!active);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (window.innerWidth < 640) { // small devices breakpoint (sm: 640px)
        if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
          // scrolling down
          setShowNav(false);
        } else {
          // scrolling up
          setShowNav(true);
        }
      } else {
        // always show on larger screens
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`max-w-5xl mx-auto mt-4 px-4 sm:px-10 py-3
                fixed left-0 right-0 z-50
                ${isOpen ? "rounded-sm" : "rounded-full"}
                border border-white/30
                bg-neutral-200/60 backdrop-blur-md
                shadow-lg text-black
                 transition-[opacity,transform] duration-300
                 ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
      <div className="flex items-center justify-between w-full">
        {/* Text section */}

        <h3 className="text-2xl sm:text-3xl font-bold">Bibek | Portfolio</h3>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-4">
          <li>
            <Link
              to="Home" // ID of the section
              smooth={true}
              offset={-80} // Adjust based on your navbar height
              duration={500}
              spy={true}
              activeClass="bg-blue-500 text-white"
              className={`
                    text-base px-4 py-2 transition rounded-full cursor-pointer text-black
                    hover:text-white hover:bg-blue-500
                    ${active ? "bg-blue-500 text-white" : ""}
                  `}
                  onClick={handleClick}
                  >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="AboutMe" // ID of the section
              smooth={true}
              offset={-80} // Adjust based on your navbar height
              duration={500}
              spy={true}
              activeClass="bg-blue-500 text-white"
              className="text-base px-4 py-2 transition rounded-full hover:text-white hover:bg-blue-500 text-black cursor-pointer"
            >
              AboutMe
            </Link>
          </li>

          <li>
            <Link
              to="Skills" // ID of the section
              smooth={true}
              offset={-80} // Adjust based on your navbar height
              duration={500}
              spy={true}
              activeClass="bg-blue-500 text-white"
              className="text-base px-4 py-2 transition rounded-full hover:text-white hover:bg-blue-500 text-black cursor-pointer"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="Project" // ID of the section
              smooth={true}
              offset={-80} // Adjust based on your navbar height
              duration={500}
              spy={true}
              activeClass="bg-blue-500 text-white"
              className="text-base px-4 py-2 transition rounded-full hover:text-white hover:bg-blue-500 text-black cursor-pointer"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="Contact" // ID of the section
              smooth={true}
              offset={-80} // Adjust based on your navbar height
              duration={500}
              spy={true}
              activeClass="bg-blue-500 text-white"
              className="text-base px-4 py-2 transition rounded-full hover:text-white hover:bg-blue-500 text-black cursor-pointer"
            >
              ContactMe
            </Link>
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
            <Link
              to="Home"
              smooth={true}
              offset={-80}           // adjust based on your navbar height
              duration={500}
              spy={true}             // track scroll position for activeClass toggle
              activeClass="bg-blue-500 text-white"
              className="block text-base px-4 py-2 w-full text-center transition rounded-full hover:text-white hover:bg-blue-500 text-black cursor-pointer "
              onClick={() => setIsOpen(false)} // close menu on click
            >
              Home
            </Link>
          </li>



          <li>
            <Link
              to="AboutMe"
              smooth={true}
              offset={-80}           // adjust based on your navbar height
              duration={500}
              spy={true}             // track scroll position for activeClass toggle
              activeClass="bg-blue-500 text-white"
              className="block text-base px-4 py-2 w-full text-center transition rounded-full hover:text-white hover:bg-blue-500 text-black cursor-pointer "
              onClick={() => setIsOpen(false)} // close menu on click
            >
              AboutMe
            </Link>
          </li>

          <li>
            <Link
              to="Skills"
              smooth={true}
              offset={-80}           // adjust based on your navbar height
              duration={500}
              spy={true}             // track scroll position for activeClass toggle
              activeClass="bg-blue-500 text-white"
              className="block text-base px-4 py-2 w-full text-center transition rounded-full hover:text-white hover:bg-blue-500 text-black cursor-pointer "
              onClick={() => setIsOpen(false)} // close menu on click
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="Project"
              smooth={true}
              offset={-80}           // adjust based on your navbar height
              duration={500}
              spy={true}             // track scroll position for activeClass toggle
              activeClass="bg-blue-500 text-white"
              className="block text-base px-4 py-2 w-full text-center transition rounded-full hover:text-white hover:bg-blue-500 text-black cursor-pointer"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="Contact"
              smooth={true}
              offset={-80}           // adjust based on your navbar height
              duration={500}
              spy={true}             // track scroll position for activeClass toggle
              activeClass="bg-blue-500 text-white"
              className="block text-base px-4 py-2 w-full text-center transition rounded-full hover:text-white hover:bg-blue-500 text-black cursor-pointer "
              onClick={() => setIsOpen(false)} // close menu on click
            >
              ContactMe
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
