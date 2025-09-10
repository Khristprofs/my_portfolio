import LedgrioImg from "../assets/projects/ledgrio.png";
import ComclicImg from "../assets/projects/comclic.png"
import SnakeGame from "../assets/projects/snakeGame.png"
import Listacc from "../assets/projects/listacc.png"
import Memberspace from "../assets/projects/memberspace.png"

export const projects = [
  {
    id: "ledgrio",
    title: "Ledgrio",
    description: "A complete school accounting solution",
    longDescription:
      "Developed to Streamline your educational institution's financial management with our comprehensive accounting system for nursery, primary, and secondary schools.",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Multer",
      "Cloudinary",
      "JWT",
      "Bcrypt.js",
      "UUID"
    ],
    achievements: [
      "Built with React + TypeScript + TailwindCSS for a responsive, modern UI.",
      "Integrated real-time analytics dashboards for improved decision-making.",
      "Eliminated manual data entry and streamlined workflows, saving administrators an average of 10 hours per week.",
      "Implemented role-based access control and secure authentication mechanisms to protect sensitive financial data."
    ],
    image: LedgrioImg,
    github: "https://github.com/charlykso/smart-s",
    liveUrl: "https://www.ledgrio.com/",
    featured: true
  },
  {
    id: "comclic",
    title: "Comclic",
    description: "Simple, Light-weight Smart Management App for Every Primary HealthCare Centre.",
    longDescription:
      "Built with the unique needs of community health workers in mind. Our intuitive interface ensures quick adoption and ease of use. Seamlessly manage patient records, appointments, and inventory with minimal training.",
    technologies: [
      "Next.js",
      "React.js",
      "ShadCN/UI",
      "TailwindCSS",
      "Lucide React",
      "Axios",
      "React Query",
      "Mock Data",
      "NestJS",
      "TypeORM",
      "PostgreSQL"
    ],
    achievements: [
      "Integrated mock data sources to simulate backend responses during development",
      "Integrated Lucide React Icons for a clean, accessible iconography system.",
      "Integrated Aptos wallet authentication to ease 120+ NFT trades with real-time feedback",
      "Developed to simplify complex primary health care tasks",
      "Designed to function efficiently even in low-bandwidth environments, ensuring uninterrupted service delivery.",
      "Crafted a pixel art-inspired UI/UX using TailwindCSS and Three.js, improving user engagement by 60%"
    ],
    image: ComclicImg,
    github: "https://github.com/achyut21/pokearena",
    liveUrl: "https://comclic-frontend-rose.vercel.app/",
    featured: true
  },
  {
    id: "snake-game",
    title: "Snake-game",
    description: "A simple Snake game built for fun",
    longDescription:
      "A classic Snake Game built with HTML, CSS, and JavaScript, featuring smooth gameplay, collision detection, score tracking, and increasing difficulty as the snake grows. Designed with a modern dark UI theme and optimized for responsive, seamless performance across devices.",
    technologies: [
      "HTML",
      "JavaScript",
      "CSS",
    ],
    achievements: [
      "Added level progression scaling to enhance difficulty and engagement.",
      "Built a restart functionality for instant replay without refreshing the page.",
      "Integrated real-time scoreboard updates displaying current, high score, and level progression.",
      "Implemented game mechanics including snake movement, collision detection, food spawning, and dynamic score tracking.",
      "Developed a fully interactive Snake Game using HTML5, CSS3, and Vanilla JavaScript, showcasing strong fundamentals in DOM manipulation and canvas-based rendering.",
      "Designed a responsive and visually appealing UI with a modern dark theme and a coordinated color palette for an excellent user experience.",
      "Focused on clean, readable, and reusable code structure, following best practices in separation of concerns (HTML, CSS, JS)."
    ],
    image: SnakeGame,
    github: "https://github.com/Khristprofs/snake-game",
    featured: false
  },
  {
    id: "listacc",
    title: "ListaccTech",
    description: "A collaborative Content Management System (CMS) for a tech academy, enabling students to register for diverse programs like Web Development, Mobile Development, UI/UX, and Cybersecurity.",
    longDescription:
      "The platform streamlines student registration, program management, and content delivery for various tech disciplines such as web development, mobile development, UI/UX, and cybersecurity.",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Axios",
      "Cloudinary",
      "JWT",
      "Bcrypt.js",
      "UUID",
      "Canva"
    ],
    achievements: [
      "Successfully collaborated in a team environment, contributing to both frontend and backend.",
      "Delivered a scalable and secure CMS that supports multiple tech programs.",
      "Strengthened skills in React.js, Node.js, TypeScript, and MongoDB.",
      "Implemented game mechanics including snake movement, collision detection, food spawning, and dynamic score tracking.",
      "Implemented responsive and modern UI/UX, improving student onboarding experience.",
      "Deployed and tested with cloud-based tools for real-world performance.",
      "Focused on clean, readable, and reusable code structure, following best practices in separation of concerns (HTML, CSS, JS)."
    ],
    image: Listacc,
    liveUrl: "https://academy.listacc.com/",
    featured: true
  },
  {
    id: "memberspace",
    title: "Memberspace",
    description: "A simple membership management app",
    longDescription:
      "A membership management app built with HTML, CSS, and JavaScript, featuring user authentication, role-based access control, and a responsive design. Designed with a modern UI theme and optimized for seamless performance across devices.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap Icons",
      "Unsplash"
    ],
    achievements: [
      "Memberspace was created for the purpose of teaching",
      "A modern, responsive web platform that allows users to seamlessly share social links and connect across the digital landscape.",
      "Designed with a clean, professional layout featuring a fixed animated header, hero section, about, pricing plans, tutorials, and footer with social integrations.",
      "Focused on UI/UX excellence with well-combined colors, responsive grid/flexbox layouts, hover effects, transitions, and animations for an engaging experience.",
      "Focused on clean, readable, and reusable code structure, following best practices in separation of concerns (HTML, CSS, JS).",
      "Optimized for desktop, tablet, and mobile screens."
    ],
    image: Memberspace,
    github: "https://github.com/Khristprofs/Memberspace",
    featured: false
  },
  
];

export default projects;