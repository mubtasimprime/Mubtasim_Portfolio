import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Mubtasim.png";

const About = () => {
  return (
    <section className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Md. Mubtasim Fuad
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["Frontend Developer", "Fullstack Developer", "Coder"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed text-justify">
            Enthusiastic Full-Stack MERN Developer and Software Engineer with a
            Bachelor’s in Computer Science & Engineering (CGPA 3.79) from BUBT.
            Highly skilled in frontend development with ReactJS, along with
            strong backend expertise in Node.js, Express.js, and MongoDB.
            Passionate about delivering clean, efficient code and creating
            seamless user experiences. Experienced in backend integration,
            authentication, and deployment.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1rEzeXyaWaA9N01XYaRxAiy1YCujY_-Sr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="relative w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[30rem] rounded-full p-[5px] bg-gradient-to-r from-[#8245ec] to-[#a855f7] shadow-[0_0_30px_#8245ec66]">
              <img
                className="w-full h-full object-cover rounded-full border-[4px] border-[#111] shadow-lg"
                src={profileImage}
                alt="Mubtasim Fuad"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
