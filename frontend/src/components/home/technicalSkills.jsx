import { useState } from 'react';
import {
  SiJavascript, SiTypescript, SiMysql, SiRust,
  SiReact, SiNodedotjs, SiNextdotjs, SiExpress, SiTailwindcss,
  SiVuedotjs, SiAngular,
  SiFirebase, SiMongodb, SiPostgresql,
  SiTrello, SiFigma,
  SiNotion, SiGithub
} from 'react-icons/si';
import {
  FaAws, FaGoogle, FaMicrosoft, FaVideo,
  FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileAlt
} from 'react-icons/fa';
import { MdEmail, MdOutlineDriveFolderUpload } from 'react-icons/md';
import { GrNotes } from 'react-icons/gr';
import Postbird from '../../assets/icons/postbird.png';
import MongoDB from '../../assets/icons/MongoDB.png';
import Drawio from '../../assets/icons/drawio.png';
import VSCode from '../../assets/icons/vscode.png';
import Postman from '../../assets/icons/postman.png';

const tabs = ["Languages", "Frameworks/Libraries", "Cloud/DevOps", "Concepts", "Virtual Assistant Tools", "Tools"];

const skillData = {
  Languages: [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Rust", icon: <SiRust className="text-orange-400" /> },
  ],
  "Frameworks/Libraries": [
    { name: "React.js", icon: <SiReact className="text-sky-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-800 dark:text-gray-200" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Vue.js", icon: <SiVuedotjs className="text-green-400" /> },
    { name: "Angular", icon: <SiAngular className="text-red-400" /> },
  ],
  "Cloud/DevOps": [
    { name: "AWS", icon: <FaAws className="text-orange-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Google Cloud", icon: <FaGoogle className="text-blue-400" /> },
  ],
  "Concepts": [
    { name: "OOP" },
    { name: "REST APIs" },
    { name: "MVC Architecture" },
    { name: "Unit Testing" },
    { name: "Authentication/Authorization" },
    { name: "Responsive Design" },
    { name: "SEO" },
    { name: "Design Patterns" },
    { name: "Git & GitHub" },
    { name: "State Management" },
    { name: "Microservices" }
  ],
  "Virtual Assistant Tools": [
    { name: "Gmail", icon: <MdEmail className="text-red-400" /> },
    { name: "MS Outlook (Email)", icon: <FaMicrosoft className="text-blue-400" /> },
    { name: "Google Calendar", icon: <FaGoogle className="text-blue-400" /> },
    { name: "Google Meet", icon: <FaGoogle className="text-green-400" /> },
    { name: "Zoom", icon: <FaVideo className="text-blue-400" /> },
    { name: "Google Docs", icon: <FaFileAlt className="text-blue-400" /> },
    { name: "MS Word", icon: <FaFileWord className="text-blue-400" /> },
    { name: "Google Sheets", icon: <FaFileAlt className="text-green-400" /> },
    { name: "MS Excel", icon: <FaFileExcel className="text-green-500" /> },
    { name: "Google Slides", icon: <FaFileAlt className="text-yellow-400" /> },
    { name: "MS PowerPoint", icon: <FaFilePowerpoint className="text-orange-400" /> },
    { name: "Google Drive", icon: <MdOutlineDriveFolderUpload className="text-green-400" /> },
    { name: "MS OneNote", icon: <GrNotes className="text-purple-400" /> },
    { name: "Trello", icon: <SiTrello className="text-blue-400" /> },
    { name: "Asana", icon: <FaGoogle className="text-pink-400" /> },
  ],
  Tools: [
    { name: "Postbird", icon: <img src={Postbird} alt="Postbird" className="w-6 h-6" /> },
    { name: "MongoDB Compass", icon: <img src={MongoDB} alt="MongoDB Compass" className="w-6 h-6" /> },
    { name: "Draw.io", icon: <img src={Drawio} alt="Draw.io" className="w-6 h-6" /> },
    { name: "VS Code", icon: <img src={VSCode} alt="VS Code" className="w-6 h-6" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-gray-200" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
    { name: "Notion", icon: <SiNotion className="text-gray-800 dark:text-gray-200" /> },
    { name: "Postman", icon: <img src={Postman} alt="Postman" className="w-6 h-6" /> }
  ]
};

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState("Languages");

  return (
    <section className="w-full px-6 py-20 max-w-full mx-auto relative z-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
        Technical Skills
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-lg">
        My expertise across various technologies and tools
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-2 flex-wrap mb-8">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl font-medium transition shadow-sm ${activeTab === tab
                ? 'bg-gray-900 text-white dark:bg-white dark:text-black'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center 
        bg-gray-50 dark:bg-gray-900/60 backdrop-blur rounded-xl p-6 shadow-inner">
        {skillData[activeTab].map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center p-3 
            bg-white dark:bg-gray-800/70 rounded-xl shadow hover:shadow-lg hover:scale-105 
            transition-transform duration-300 w-full text-center"
            title={name}
          >
            <div className="text-3xl mb-2">{icon || name.charAt(0)}</div>
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
