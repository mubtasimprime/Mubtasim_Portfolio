import { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button pushed to bottom */}
              <button className="mt-auto text-white border rounded-md py-1 px-3 hover:bg-purple-500 text-sm self-start">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl h-[90vh] relative flex flex-col">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
              {/* Image */}
              <div className="w-full flex justify-center mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[250px] object-contain rounded-xl shadow-lg"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm lg:text-base leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Challenges Section */}
              {selectedProject.challenges && (
                <div className="mb-6 border-l-4 border-purple-500 pl-4">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    Challenges Faced
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm lg:text-base">
                    {selectedProject.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Future Plans Section */}
              {selectedProject.futurePlans && (
                <div className="mb-6 border-l-4 border-purple-500 pl-4">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    Future Improvements & Plans
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm lg:text-base">
                    {selectedProject.futurePlans.map((plan, i) => (
                      <li key={i}>{plan}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-xl lg:text-lg text-sm font-semibold text-center transition-all"
                  >
                    View Code
                  </a>
                )}
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl lg:text-lg text-sm font-semibold text-center transition-all"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
