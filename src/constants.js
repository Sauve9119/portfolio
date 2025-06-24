// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import gssoclogo from './assets/Experience/gssoc.png';

// Education Section Logo's
import mnitLogo from './assets/Education/mnit.png';
import bisLogo from './assets/Education/school.png';

// Project Section Logo's
import VSCodeLogo from './assets/Projects/VSCode.png';
import JEEStudyLogo from './assets/Projects/JEEStudy.png';
import RestaurantLogo from './assets/Projects/Restaurant.png';
import VinayakaLogo from './assets/Projects/Vinayaka.png';
import PortfolioLogo from './assets/Projects/Portfolio.png';
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
     
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
     
      { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
     
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: gssoclogo,
      role: "Frontend Contributor",
      company: "GirlScript Summer of Code",
      date: "Nov2024-Feb2025",
      desc: "Developed dynamic and scalable web applications using the HTML,CSS,JS stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: mnitLogo,
      school: "MNIT Jaipur",
      date: "Aug 2024- Present",
      grade: "8.96CGPA",
      desc: "I am currently pursuing my Bachelor's degree at Malaviya National Institute of Technology (MNIT) Jaipur. The program is designed to provide a comprehensive understanding of computer science principles, software development, and engineering practices.",
      degree: "Bachelor of Technology - BTech",
    },
    {
      id: 1,
      img: bisLogo,
      school: "Beetle International School",
      date: "Apr 2023- Mar 2024",
      grade: "93.2%",
      desc: "I completed my schooling at Beetle International School, where I developed a strong foundation in various subjects, particularly in science and mathematics. The school emphasized holistic education, fostering both academic excellence and personal growth.",
    },
    {
      id: 2,
      img: bisLogo,
      school: "Beetle International School",
      date: "Apr 2021- Mar 2022",
      grade: "96.6%",
      desc: "I completed my schooling at Beetle International School, where I developed a strong foundation in various subjects, particularly in science and mathematics. The school emphasized holistic education, fostering both academic excellence and personal growth.",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      img: VSCodeLogo,
      title: "VS Code Clone",
      desc: "A web-based clone of Visual Studio Code, built using ReactJS, Tailwind CSS, and Node.js. It features a code editor, file explorer, and terminal, providing a similar user experience to the original VS Code.",
      techStack: ["HTML", "CSS"],
      link: "https://sauve9119.github.io/vs-code-landing-page/",
      github: "https://github.com/Sauve9119/vs-code-landing-page",
    },
    {
      id: 1,
      img: JEEStudyLogo,
      title: "JEE Study",
      desc: "A comprehensive web application designed to assist students in preparing for the Joint Entrance Examination (JEE). It offers study materials, practice tests, and performance tracking.",
      techStack: ["ReactJS", "HTML", "CSS", "JavaScript"],
      link: "https://sauve9119.github.io/jee-resources-website/",
      github: "https://github.com/Sauve9119/jee-resources-website",
    },
    {
      id: 2,
      img: RestaurantLogo,
      title: "Restaurant Management System",
      desc: "A full-stack web application for managing restaurant operations, including menu management, order processing, and customer feedback.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://sauve9119.github.io/restro-website/",
      github: "https://github.com/Sauve9119/restro-website",
    },
    {
      id: 3,
      img: VinayakaLogo,
      title: "Vinayaka",
      desc: "A personal project showcasing my skills in web development, featuring a portfolio website with interactive elements and responsive design.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://sauve9119.github.io/Vinayaka-Homoepathy/",
      github: "https://github.com/Sauve9119/Vinayaka-Homoepathy",
    },
    { id: 4,
      img: PortfolioLogo,
      title: "Portfolio Website",
      desc: "A personal portfolio website built to showcase my skills, projects, and experiences in web development. It features a modern design, responsive layout, and interactive elements.",
      techStack: ["ReactJS", "Tailwind CSS"],
      link: "https://sauve9119.github.io/Portfolio/",
      github: "https://github.com/Sauve9119/Portfolio",
    }
  ];  