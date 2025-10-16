const Myself = () => {
  return (
    <section className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">ABOUT ME</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      </div>

      <div className="rounded-2xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 w-full rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Right Column - Content */}
            <div className="space-y-6">
              {/* Introduction Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-blue-100 leading-relaxed mb-4">
                  Enthusiastic and detail-oriented{" "}
                  <span className="text-white font-semibold bg-blue-500/30 px-1 rounded">
                    Full-Stack MERN Developer
                  </span>{" "}
                  holding a{" "}
                  <span className="text-white font-semibold">
                    Bachelor's degree in Computer Science & Engineering (CGPA
                    3.79)
                  </span>{" "}
                  from <span className="text-white font-semibold">BUBT</span>.
                </p>

                <p className="text-blue-100 leading-relaxed">
                  My programming journey began out of curiosity—what started as
                  small experiments with HTML and JavaScript soon grew into a
                  deep passion for building full-fledged web applications that
                  make a difference.
                </p>
              </div>

              {/* Technical Skills Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Technical Expertise
                </h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Over time, I mastered technologies like{" "}
                  <span className="text-white font-semibold">React.js</span>,{" "}
                  <span className="text-white font-semibold">Node.js</span>,{" "}
                  <span className="text-white font-semibold">Express.js</span>,
                  and <span className="text-white font-semibold">MongoDB</span>.
                </p>

                <p className="text-blue-100 leading-relaxed">
                  I particularly enjoy working on the{" "}
                  <span className="text-white font-semibold bg-green-500/30 px-1 rounded">
                    frontend
                  </span>
                  —bringing designs to life, crafting smooth user interfaces,
                  and making sure every interaction feels natural and intuitive.
                </p>
              </div>

              {/* Passion Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  My Passion
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  I find real joy in transforming ideas into interactive,
                  production-ready solutions—especially when I get to solve
                  challenging problems and optimize performance. Creating
                  seamless and responsive experiences for users is what drives
                  my enthusiasm every day.
                </p>
              </div>

              {/* Interests Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Beyond Coding
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Outside of programming, I enjoy watching tech-related content,
                  exploring new tools, playing video games and spending time
                  designing and refining UI layouts it's where creativity meets
                  logic for me.
                </p>
              </div>
              {/* Tech Highlights */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Tech Stack Focus
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "JavaScript",
                    "Frontend",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/30 text-blue-100 px-3 py-1 rounded-full text-sm border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myself;
