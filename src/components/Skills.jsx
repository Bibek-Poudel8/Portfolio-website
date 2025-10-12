import React from 'react'

const Skills = () => {
  return (
    <section id='Skills' className=" pt-[170px] sm:pt-[20px] w-full min-h-screen flex items-center justify-center px-3 ">
      <div className="w-full max-w-5xl bg-gray-200/70 backdrop-blur-sm p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 ">Skills</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Machine Learning */}
          <div className="bg-white/90 shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">🧠 Machine Learning & Deep Learning</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Scikit-learn</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>Keras</li>
            </ul>
          </div>

          {/* Data Science */}
          <div className="bg-white/90 shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">📊 Data Science & Analysis</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>NumPy</li>
              <li>Pandas</li>
              <li>Matplotlib</li>
              <li>Seaborn</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="bg-white/90 shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">🌐 Web Development</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Flask</li>
              <li>Django</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Node.js</li>
              <li>SQl</li>
            </ul>
          </div>

          {/* Programming & Tools */}
          <div className="bg-white/90 shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">⚙️ Programming & Tools</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              
              <li>Git, Github</li>
              <li>Jupyter Notebook</li>
              <li>Google Colab</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-600 italic">
          💡 Applied these tools in real-world AI projects and data-driven web applications.
        </p>
      </div>
    </section>
  )
}

export default Skills
