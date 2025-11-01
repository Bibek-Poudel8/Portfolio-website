import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Footer from "./Footer"
import Skills from "./Skills"
import Project from "./Project"
import Contact from "./Contact"
import { useEffect } from "react"

function Layout() {
  
  // Scroll to section if URL has a hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
    
    <Navbar/>
    
    <Home/>
    <AboutMe/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer />
      
    </>
  )
}

export default Layout
