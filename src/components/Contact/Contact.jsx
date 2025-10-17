import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.reset();
    toast.success("Message submitted!", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[10vw] md:px-[7vw] lg:px-[12vw] text-white"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let’s build something amazing together! Feel free to reach out.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-5xl">
        {/* LEFT SIDE - Info */}
        <div className="flex-1 bg-[#0d081f] p-8 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I’m Md. Mubtasim Fuad — a passionate MERN stack developer who loves
            creating clean, modern, and user-focused web applications. Let’s
            collaborate and turn your ideas into reality!
          </p>

          <div className="space-y-6">
            {/* <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-purple-500 text-xl" />
              <span className="text-gray-300">+058 58 25 333</span>
            </div> */}

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-500 text-xl" />
              <span className="text-gray-300">mubtasimfuadrafiq@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-purple-500 text-xl" />
              <span className="text-gray-300">Mirpur, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-4">
              <FaClock className="text-purple-500 text-xl" />
              <span className="text-gray-300">
                Currently available for MERN stack projects & tech
                collaborations
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Form */}
        <div className="flex-1 bg-[#0d081f] p-8 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-center">
            Send Me a Message 🚀
          </h3>

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
