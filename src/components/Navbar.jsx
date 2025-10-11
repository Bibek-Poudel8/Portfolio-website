import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="max-w-5xl mx-auto mt-4 px-4 sm:px-10 py-3
                fixed left-0 right-0 z-50
                rounded-full border border-white/30
                bg-neutral-200/60 backdrop-blur-md
                shadow-lg text-black">
      <div className="flex flex-col lg:flex-row 
                  items-center justify-between 
                  w-full gap-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-black">Bibek | Portfolio</h3>
        <ul className="flex gap-3 flex-wrap items-center p-1">

         <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      `text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded-full hover:text-white hover:bg-blue-500 
       ${isActive ? "bg-blue-500  text-white" : ""}`
    }
  >
    Home
  </NavLink>
</li>

 <li>
  <NavLink
    to="/AboutMe"
    className={({ isActive }) =>
      `text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded-full hover:text-white hover:bg-blue-500
       ${isActive ? "bg-blue-500 text-white" : ""}`
    }
  >
    AboutMe
  </NavLink>
</li>

<li>
  <NavLink
    to="/Skills"
    className={({ isActive }) =>
      `text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded-full hover:text-white hover:bg-blue-500
       ${isActive ? "bg-blue-500 text-white" : ""}`
    }
  >
    Skills
  </NavLink>
</li>

<li>
  <NavLink
    to="/Project"
    className={({ isActive }) =>
      `text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded-full hover:text-white hover:bg-blue-500
       ${isActive ? "bg-blue-500 text-white" : ""}`
    }
  >
    Projects
  </NavLink>
</li>
<li>
  <NavLink
    to="/Contact"
    className={({ isActive }) =>
      `text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded-full hover:text-white hover:bg-blue-500
       ${isActive ? "bg-blue-500 text-white" : ""}`
    }
  >
    ContactMe
  </NavLink>
</li>



  </ul>

                

      </div>
      </nav>
  )
}

export default Navbar
