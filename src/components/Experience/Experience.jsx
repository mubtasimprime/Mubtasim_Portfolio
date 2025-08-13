import { experiences } from "../../constants";

const Experience = () => (
  <section
    id="experience"
    className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my work experience and the roles I have taken in various
        organizations
      </p>
    </div>

    {/* Experience Cards */}
    <div className="flex flex-wrap gap-6 py-10 justify-between">
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 w-full rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          {/* Header */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <h4 className="text-md sm:text-sm text-gray-300">
                {experience.company}
              </h4>
              <p className="text-sm text-gray-500">{experience.date}</p>
            </div>
          </div>

          {/* Description */}
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            {experience.desc.map((point, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>

          {/* Skills */}
          {/* <div className="mt-4">
            <h5 className="font-medium text-white">Skills:</h5>
            <ul className="flex flex-wrap mt-2">
              {experience.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
