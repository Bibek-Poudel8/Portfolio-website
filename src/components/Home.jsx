import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <section
        className="pt-[300px] sm:pt-[280px] px-4 sm:px-8 w-full flex flex-col 
             justify-center items-center mb-16 max-w-5xl mx-auto gap-8 sm:gap-12">
        <div className="flex-1 flex flex-col justify-center items-center gap-4 sm:gap-6 text-center">
          <div>

            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Hello there!
            </h4>
            <h2 className="text-blue-500 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-2">
              I'm Bibek Poudel
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-2xl text-gray-700 max-w-2xl">
            Data Science | Machine Learning | Deep Learning
          </p>

        </div>


        {/* Socials */}
        <div className="mt-4 lg:mt-12 w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-gray-600 text-center">
          {/* Label */}
          <span className="text-base sm:text-lg font-semibold text-gray-800">Socials |</span>
          <div className="flex items-center gap-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/bibek.poudel.728348"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebookF size={24} />
          </a>
          {/* Insta */}
          <a
            href="https://www.instagram.com/bibek_poudel345/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
          >
            <FaInstagram size={24} />
          </a>
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/bibek-poudel-497a47376/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedinIn size={24} />
          </a>
          {/* github */}
          <a
            href="https://github.com/Bibek-Poudel8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub size={24} />
          </a>
          {/* email */}
          <a
            href="mailto:bibekpoudel34@gmail.com"
            className="hover:text-red-600 transition ml-4"
          >
            <FaEnvelope size={24} />
          </a>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home
