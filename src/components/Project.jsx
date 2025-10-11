import React from 'react'
import { FaGithub } from 'react-icons/fa';

const Project = () => {
  return (
    <section
      className="w-full pt-50 min-h-screen overflow-y-auto flex flex-col items-center justify-start gap-y-6 p-6 bg-gray-100">
      <h2 className="text-5xl text-blue-500 font-bold text-center">
        My Projects
      </h2>

      {/*Project 1 starts*/}

      <div className="w-full max-w-6xl mx-auto bg-white/90 shadow-lg rounded-xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10 transition-transform hover:scale-[102%] hover:shadow-2xl">
        {/* Image section */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">

          <img
            src="public/Projectmovie_Output_3.png"
            alt="ProjectMovie"
            className="w-full h-full object-cover rounded-lg hover:opacity-90 transition"
          />

        </div>

        {/* Content section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">Movie recommender System</h3>
          <p className="text-gray-600">
            Built a Movie Recommender System.<br />
            - Used Tmdb movie dataset<br />
            - Used library like Numpy, Pandas, Nltk for preprocessing the data set.<br />
            - Used SK learn to create ML model for recommendation.<br />
            - Created frontend using Streamlit and deployed on Render.<br />
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Bibek-Poudel8/Movie-Recommender-System"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-800 hover:bg-black px-4 py-2 rounded transition"
            >
              View GitHub
            </a>
            <a
              href="https://bibek-movie-recommender-system.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>


      {/*Project 2 starts*/}

      <div className="w-full max-w-6xl mx-auto bg-white/90 shadow-lg rounded-xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10 transition-transform hover:scale-[102%] hover:shadow-2xl">
        {/* Image section */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">

          <img
            src="public/ProjectRag-Output.png"
            alt="ProjectRAG"
            className="w-full h-full object-cover rounded-lg hover:opacity-90 transition"
          />

        </div>

        {/* Content section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">Rag AI Teaching Assistant</h3>
          <p className="text-gray-600">
            Created a Rag-based teaching assistant which helps to extract meaningful information from videos that it is trained on.<br />
            - This context-aware system can guide users with queries related to those videos that it is trained on.<br />
            - TechStack Used : OpenAI whisper,BGE-M3,SK-learn,LLM(Llama 3.2)

          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Bibek-Poudel8/Rag-AI-Teaching-Assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-800 hover:bg-black px-4 py-2 rounded transition"
            >
              View GitHub
            </a>

          </div>
        </div>
      </div>
      {/*Start third project from here*/}


      {/* More Project github section */}

      <div className='mt-0 lg:mt-12 flex items-center justify-center gap-4 text-gray-600'>
        <span className="text-lg font-semibold text-gray-800">For all other projects | </span>
        <a
          href="https://github.com/Bibek-Poudel8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </section>

  )
}

export default Project
