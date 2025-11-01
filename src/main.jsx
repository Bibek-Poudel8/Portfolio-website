import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 




import AboutMe from './components/AboutMe.jsx'
import Navbar from './components/Navbar.jsx'
import Home from "./components/Home"
import Contact from "./components/Contact"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Layout from "./components/Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createHashRouter } from 'react-router-dom'


const router = createHashRouter([
    {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />
    // children:[
    //   {path:"/",
    //   element:<Home/>},
     
    //   {
    //     path:"/AboutMe",
    //     element:<AboutMe/>
    //   },
    //   {
    //     path:"/Skills",
    //     element:<Skills/>
    //   },{
    //     path:"/Project",
    //     element:<Project/>
    //   },{
    //     path:"/Contact",
    //     element:<Contact/>
    //   }]
     }
  ])
  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  
)
