import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Footer from "./footer"


function Layout() {
  

  return (
    <>
    <Navbar/>
    
    
    <Outlet/>
    <Footer />
      
    </>
  )
}

export default Layout
