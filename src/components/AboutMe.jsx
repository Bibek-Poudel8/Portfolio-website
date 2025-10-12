import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const AboutMe = () => {
    return (
        <section id='AboutMe'

            className="pt-[185px] sm:pt-[200px] px-4 sm:px-10 w-full flex flex-col lg:flex-row py-20 justify-center items-center 
                    max-w-7xl mx-auto min-h-screen gap-10 ">


            <div className="flex flex-col justify-center items-center gap-6 px-4 sm:px-6 
                  bg-gray-200 text-black p-6 sm:p-8 rounded-xl shadow-lg w-full sm:w-3/4 max-w-2xl">
                <div>
                    <h2 className="text-center text-blue-500 text-3xl sm:text-4xl lg:text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p className='text-center text-sm sm:text-base leading-relaxed'>
                    I am Bibek Poudel , a tech enthusiast and CS student, who wants to build end-to-end AI products that bring positive impact on society.
                </p>

                <p className='text-center text-sm sm:text-base leading-relaxed'>
                    I have strong expertise in Data analytics, Data science, Machine learning, and Deep learning. I have a basic understanding of web development that helps me deploy those projects I have created. I enjoy creating products that help people in their day-to-day life.
                </p>

            </div>
                    {/* image part on Aboutme */}

            <div className="flex flex-col items-center space-y-4  p-4 rounded">
                <div className='w-44 h-44 rounded-full backdrop-blur-sm bg-gray-900/10 shadow-lg flex items-center justify-center'>
                    <img src='/Bibek Poudel02_pp.jpg' alt='about' className="w-40 h-40 object-cover object-top rounded-full shadow-md bg-gray-400/25"></img>
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
