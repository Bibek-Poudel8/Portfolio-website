import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const AboutMe = () => {
    return (
        <section

            className="px-10 w-full flex flex-row lg:flex-row py-20 justify-between items-center 
                         max-w-7xl mx-auto min-h-screen">


            <div className="flex flex-col justify-center items-center gap-10 px-6 
                bg-gray-200 text-black p-8 rounded-xl shadow-lg w-3/4 h-[50vh]">
                <div>
                    <h2 className="text-center text-blue-500
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p>
                    I am Bibek Poudel , a tech enthusiast and CS student, who wants to build end-to-end AI products that bring positive impact on society.
                </p>

                <p>
                    I have strong expertise in Data analytics, Data science, Machine learning, and Deep learning. I have a basic understanding of web development that helps me deploy those projects I have created. I enjoy creating products that help people in their day-to-day life.
                </p>

            </div>
                    {/* image part on Aboutme */}

            <div className="flex flex-col items-center space-y-4  p-4 rounded">
                <div className='w-44 h-44 rounded-full backdrop-blur-sm bg-gray-900/10 shadow-lg flex items-center justify-center'>
                    <img src='src/components/Bibek Poudel02_pp.jpg' alt='about' className="w-40 h-40 object-cover object-top rounded-full shadow-md bg-gray-400/25"></img>
                </div>


                {/* for bottoms to redirect to projects and contactMe */}
                <NavLink
                    to="/Project"
                    className="text-white bg-gray-800 hover:bg-black px-4 py-2 rounded transition"
                >
                    Projects
                </NavLink>

                <NavLink
                    to="/Contact"
                    className="text-white bg-gray-800 hover:bg-black px-4 py-2 rounded transition"
                >
                    ContactMe
                </NavLink>
            </div>


        </section>
    )
}


export default AboutMe
