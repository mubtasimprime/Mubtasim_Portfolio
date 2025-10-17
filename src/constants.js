// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import reactRouter from "./assets/tech_logo/react-router.png";
import framerMotion from "./assets/tech_logo/framer-motion.png";
import daisyUI from "./assets/tech_logo/daisyui-logo.png";
import Roommate from "./assets/roommate.png";
import News from "./assets/work_logo/news.png";

// Experience Section Logo's
import newtonschoolLogo from "./assets/company_logo/logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/bubt.png";
import bsaLogo from "./assets/education_logo/bcic.jpeg";
import vpsLogo from "./assets/education_logo/dsbl.jpeg";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/LMS.png";
import csprepLogo from "./assets/work_logo/App Store.png";
import movierecLogo from "./assets/work_logo/doctor.png";
import taskremLogo from "./assets/work_logo/Ecommerce.png";
import npmLogo from "./assets/work_logo/Auction.png";
import webverLogo from "./assets/work_logo/pet.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "React Router", logo: reactRouter },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "DaisyUI", logo: daisyUI },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Framer Motion", logo: framerMotion },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      // { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: newtonschoolLogo,
    role: "Software Developer Intern",
    company: "Prime Bank Securities Ltd.",
    date: "May 2025 – August 2025 | Dhaka, Bangladesh",
    desc: [
      "Proposed and designed the website’s architecture, implemented a fully responsive user interface, ensuring an optimized and seamless user experience across devices.",
      "Focused on performance optimization to enhance overall application usability using ReactJS, Tailwind CSS, JavaScript, and React Router to streamline operational processes.",
      "Implemented a mock backend system with plans to replace it with a fully functional backend in future development.",
      `Deployed the official website of Prime Bank Securities Ltd. <a href="https://pbsl.com.bd" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline">pbsl.com.bd</a>.`,
    ],
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React Router",
      "TailwindCSS",
      "DaisyUI",
      "Framer Motion",
      "Swiper",
      "AOS",
      "react-icons",
      "Figma",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Bangladesh University of Business & Technology (BUBT)",
    date: "2020 - 2024",
    grade: "3.79/4",
    degree: "Bachelor of Computer Science Engineering",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "BCIC College, Dhaka",
    date: "2018",
    grade: "4.33/5",
    degree: "Higher Secondary School Certificate",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Dhaka Shiksha Board Laboratory School and College",
    date: "2016",
    grade: "5/5",
    degree: "Secondary School Certificate",
  },
];

export const projects = [
  {
    id: 0,
    title: "News Portal",
    description:
      "PrimeNews is a full-stack news web application built using the MERN stack (MongoDB, Express, React, Node.js). It provides a seamless platform for users to read, search, and filter news articles, while admins can efficiently manage content.",
    image: News,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "React Router",
      "Firebase Authentication",
      "Node.js",
      "MongoDB",
      "Express",
      "Framer Motion",
    ],
    github: "https://github.com/mubtasimprime/NewsPaper_MERN",
    webapp: "https://prime-newspaper.netlify.app/",
    challenges: [
      "Implementing role-based access for admin and users.",
      "Managing real-time updates of published and pending articles.",
      "Ensuring optimized performance when filtering and searching large datasets.",
    ],
    futurePlans: [
      "Add a comment and reaction system for users.",
      "Integrate AI-generated news summaries.",
      "Create a mobile app version for wider accessibility.",
    ],
  },
  {
    id: 1,
    title: "Library Management System",
    description:
      "A modern web application for managing library operations with an intuitive user interface. This application is designed to streamline library operations by providing features for adding books, tracking borrows/returns, and managing book details digitally. It serves as a digital solution for small to medium-sized libraries to replace traditional paper-based systems.",
    image: githubdetLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "React Router",
      "Firebase Authentication",
      "Node.js",
      "MongoDB",
      "Express",
      "Framer Motion",
    ],
    github:
      "https://github.com/MubtasimPrime/Library_Management_System_client_side",
    webapp: "https://library-management-6a442.web.app/",
    challenges: [
      "Synchronizing book availability between client and server in real-time.",
      "Handling edge cases where multiple users try to borrow the same book.",
      "Building a clean and functional UI for managing book records efficiently.",
    ],
    futurePlans: [
      "Add email notifications for due dates and returns.",
      "Implement fine calculation for late returns.",
      "Introduce analytics dashboard for book borrowing trends.",
    ],
  },
  {
    id: 2,
    title: "Roommate Finder",
    description:
      "A modern web application for joining a trusted community and matching with roommates who share your lifestyle, habits, and interests. The platform streamlines the roommate search process by allowing users to create profiles, list available rooms, and find compatible matches with ease.",
    image: Roommate,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "React Router",
      "Firebase Authentication",
      "Node.js",
      "MongoDB",
      "Express",
      "Framer Motion",
    ],
    github: "https://github.com/MubtasimPrime/Roommate_Finder_client_side",
    webapp: "https://roommate-finder-caea5.web.app/",
    challenges: [
      "Designing an effective matching algorithm for compatibility.",
      "Managing secure user authentication and profile verification.",
      "Ensuring a smooth experience for listing and searching rooms.",
    ],
    futurePlans: [
      "Add location-based filtering and map integration.",
      "Enable real-time chat between potential roommates.",
      "Implement trust badges or verified profiles for safety.",
    ],
  },
  {
    id: 3,
    title: "App Store",
    description:
      "Discover the world’s most innovative apps all in one place. From productivity to gaming, find, download, and enjoy apps that make life smarter and more fun.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
    ],
    github: "",
    webapp: "https://appify-mubtasim.netlify.app/",
    challenges: [
      "Structuring app categories and search filters efficiently.",
      "Optimizing image rendering for multiple app previews.",
      "Designing a consistent layout for different app cards.",
    ],
    futurePlans: [
      "Integrate app reviews and ratings.",
      "Enable developers to submit their own apps.",
      "Add sorting by popularity and trending categories.",
    ],
  },
  {
    id: 4,
    title: "Doctors Point",
    description:
      "Doctors Point connects you with trusted medical professionals whenever you need them. Find expert care, book appointments, and manage your health—all in one place.",
    image: movierecLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "Firebase", "React Router"],
    github: "https://github.com/MubtasimPrime/Doctors_Point_React",
    webapp: "https://doctors-point-prime.netlify.app/",
    challenges: [
      "Designing a secure and simple appointment booking system.",
      "Managing doctor schedules dynamically.",
      "Implementing responsive UI for mobile health access.",
    ],
    futurePlans: [
      "Integrate video consultation feature.",
      "Add patient medical record management.",
      "Allow doctors to set availability directly from dashboard.",
    ],
  },
  {
    id: 5,
    title: "Auction Gallery",
    description:
      "Built a project highlighting React skills (Click on Bid Now).",
    image: npmLogo,
    tags: [
      "React JS",
      "TailwindCSS",
      "DaisyUI",
      "Node.js",
      "API",
      "React Router",
    ],
    github: "https://github.com/MubtasimPrime/Auction_Gallery_React",
    webapp: "https://auction-gallery-prime.netlify.app/",
    challenges: [
      "Handling real-time bid updates and ensuring data accuracy.",
      "Managing item states (sold/active) effectively.",
      "Creating interactive UI for bidding experience.",
    ],
    futurePlans: [
      "Implement live bidding with WebSockets.",
      "Add user wallet and transaction history.",
      "Enable sellers to create and manage their own auctions.",
    ],
  },
  {
    id: 6,
    title: "Ecommerce Website Multipage",
    description:
      "Shop the latest products from the comfort of your home with ease and confidence. Enjoy a seamless online shopping experience with fast delivery and secure payments.",
    image: taskremLogo,
    tags: ["JavaScript", "HTML", "CSS"],
    github:
      "https://github.com/MubtasimPrime/Ecommerce_Website_-HTML-CSS-JavaScript-",
    webapp:
      "https://mubtasimprime.github.io/Ecommerce_Website_-HTML-CSS-JavaScript-/",
    challenges: [
      "Designing multiple responsive pages consistently.",
      "Creating a smooth navigation and checkout flow.",
      "Maintaining product layout across devices.",
    ],
    futurePlans: [
      "Add shopping cart and order tracking.",
      "Integrate backend with product database.",
      "Include user authentication and payment gateway.",
    ],
  },
  {
    id: 7,
    title: "Browse4Pets",
    description:
      "Browse Pet brings you closer to the perfect furry friend or pet essentials you need. Explore, discover, and care for pets all in one convenient place.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MubtasimPrime/Responsive_Browse4Pet_Tailwind",
    webapp: "https://mubtasimprime.github.io/Responsive_Browse4Pet_Tailwind/",
    challenges: [
      "Structuring clean and visually engaging layouts.",
      "Optimizing responsive design for all screen sizes.",
      "Balancing images and text for a friendly user experience.",
    ],
    futurePlans: [
      "Add pet adoption and donation features.",
      "Include product search and filter options.",
      "Develop a blog section for pet care tips.",
    ],
  },
];
