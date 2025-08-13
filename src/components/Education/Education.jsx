import { education } from "../../constants";

const Education = () => (
  <section
    id="education"
    className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        My education journey and academic background
      </p>
    </div>

    {/* Education Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
      {education.map((edu) => (
        <div
          key={edu.id}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-6 py-8 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] flex flex-col items-center text-center"
        >
          {/* Slightly bigger image */}
          <div className="w-24 h-24 bg-white rounded-md overflow-hidden flex justify-center items-center mb-4">
            <img
              src={edu.img}
              alt={edu.school}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Text content nicely arranged */}
          <h3 className="text-xl sm:text-lg font-semibold text-white mb-1">
            {edu.degree}
          </h3>
          <h4 className="text-md sm:text-sm text-gray-300 mb-1">
            {edu.school}
          </h4>
          <p className="text-sm text-gray-400 mb-1">CGPA: {edu.grade}</p>
          <p className="text-sm text-gray-400">{edu.date}</p>

          {/* Description */}
          {edu.desc && (
            <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2 text-left w-full">
              {edu.desc.map((point, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Education;
