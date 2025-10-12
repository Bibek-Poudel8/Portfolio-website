import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Footer from "./Footer"
import Skills from "./Skills"
import Project from "./Project"
import Contact from "./Contact"


function Layout() {
  

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
