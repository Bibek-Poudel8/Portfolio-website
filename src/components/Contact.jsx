import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='Contact' className="w-full pt-20 sm:pt-[180px] sm:min-h-screen flex flex-col items-center justify-start gap-y-6 px-4 sm:px-6 pb-10 sm:pb-10 max-w-7xl mx-auto"
    >
      <div className="w-full max-w-full sm:max-w-2xl bg-gradient-to-br from-blue-50 to-indigo-100 backdrop-blur-sm p-6 sm:p-10 rounded-xl shadow-lg">
      {/* Contact Card */}
      <div className="bg-white/60 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl w-full max-w-md sm:max-w-xl mx-auto p-6 sm:p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">ContactMe</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Message */}
        <div className="mb-5">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message..."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          ></textarea>
        </div>
        {/* Button */}
        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-300"
        >
          Send Message
        </button>
        <span>May not be working at the moment.</span>
      </div>

      {/* Socials */}
      <div className="mt-12 flex items-center justify-center gap-6 text-gray-600">
        {/* Label */}
        <span className="text-lg font-semibold text-gray-800">Socials |</span>

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
          className="hover:text-red-600 transition "
        >
          <FaEnvelope size={24} />
        </a>
      </div>


      </div>
    </section>
  )
}

export default Contact
