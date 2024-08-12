// Navigation bar
import GithubIcon from "@/public/svg/icons/GithubIcon";
import InstagramIcon from "@/public/svg/icons/InstagramIcon";
import Linkedin01Icon from "@/public/svg/icons/Linkedin01Icon";
import NewTwitterRectangleIcon from "@/public/svg/icons/NewTwitterRectangleIcon";
import MailSend01Icon from "@/public/svg/icons/MailSend01Icon";

export const navLinks = [
  {
    name: "Skills",
    link: "#features",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const navIcons = [
  {
    name: "Github",
    link: "https://github.com/rishabhgokhe",
    icon: <GithubIcon />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/rishabh_gokhe",
    icon: <InstagramIcon />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rishabh-gokhe-22168b287",
    icon: <Linkedin01Icon />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/rishabhgokhe?s=21&t=Flej6ro1R2UhXzVpOMJTdg",
    icon: <NewTwitterRectangleIcon />,
  },
  {
    name: "Mail Us",
    link: "mailto:rishabhgokhe20contact@gmail.com",
    icon: <MailSend01Icon />,
  },
];


// Intro Section
// -------------------------------------------------------------------------------------------
export const introPara = "A passionate full stack developer, 3D modeling, and UI design. This website is a showcase of my diverse portfolio, highlighting my expertise and creativity. I'm eager to explore new opportunities and collaborations. Feel free to browse through my work and get in touch to discuss how we can create something amazing together."

// Features Section
// -------------------------------------------------------------------------------------------
import ReactIcon from "@/public/svg/icons/Tools/ReactIcon";
import Typescript01Icon from "@/public/svg/icons/Tools/Typescript01Icon";
import JavaScriptIcon from "@/public/svg/icons/Tools/JavaScriptIcon";
import JavaIcon from "@/public/svg/icons/Tools/JavaIcon";
import NpmIcon from "@/public/svg/icons/Tools/NpmIcon";
import Html5Icon from "@/public/svg/icons/Tools/Html5Icon";
import NextIcon from "@/public/svg/icons/Tools/NextIcon";
import PythonIcon from "@/public/svg/icons/Tools/PythonIcon";
import ExpressIcon from "@/public/svg/icons/Tools/ExpressIcon";
import MongoDBIcon from "@/public/svg/icons/Tools/MongoDBIcon";
import PostgresIcon from "@/public/svg/icons/Tools/PostgresIcon";
import ScssIcon from "@/public/svg/icons/Tools/ScssIcon";
import SwiftIcon from "@/public/svg/icons/Tools/SwiftIcon";
import TailwindIcon from "@/public/svg/icons/Tools/TailwindIcon";
import ReduxIcon from "@/public/svg/icons/Tools/ReduxIcon";

export const FeaturesQuote = {
  title: `“The only thing that doesn't weigh you down on your travels in
          life are skills”`,
  description:
    "Embark on a transformative journey with me, where skills are the only luggage we carry. In the vast terrain of life's travels, my diverse skill set serves as the compass, guiding and lightening the path. From beginner to extreme, these proficiencies are the wings that empower exploration and fuel innovation. Join me in the adventure of skillful living, where every capability acquired becomes a ticket to new horizons and endless possibilities.",
};

export const FeaturesData = [
  {
    icon: <ReactIcon />,
    title: "React",
    description:
      "Proficient in building dynamic and responsive user interfaces with React.",
    link: "https://react.dev/",
  },
  {
    icon: <NextIcon />,
    title: "Next.js",
    description:
      "Expert in building fast and scalable web applications using Next.js.",
    link: "https://nextjs.org/",
  },
  {
    icon: <Typescript01Icon />,
    title: "TypeScript",
    description:
      "Experienced in using TypeScript for robust and type-safe JavaScript development.",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: <JavaScriptIcon />,
    title: "JavaScript",
    description:
      "Skilled in writing clean and efficient JavaScript for web development.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <SwiftIcon />,
    title: "Swift",
    description:
      "Experienced in using Swift for iOS and macOS app development.",
    link: "https://developer.apple.com/swift/",
  },
  {
    icon: <JavaIcon />,
    title: "Java",
    description:
      "Proficient in building applications using Java, including Spring framework.",
    link: "https://www.java.com/",
  },
  {
    icon: <NpmIcon />,
    title: "Node.js",
    description:
      "Expert in server-side development with Node.js for scalable applications.",
    link: "https://nodejs.org/",
  },
  {
    icon: <ExpressIcon />,
    title: "Express",
    description:
      "Experienced in building RESTful APIs and web applications with Express.js.",
    link: "https://expressjs.com/",
  },
  {
    icon: <ReduxIcon />,
    title: "Redux",
    description:
      "Skilled in using Redux for managing application state in JavaScript apps.",
    link: "https://redux.js.org/",
  },
  {
    icon: <TailwindIcon />,
    title: "Tailwind CSS",
    description:
      "Proficient in using Tailwind CSS for rapidly building custom user interfaces.",
    link: "https://tailwindcss.com/",
  },

  {
    icon: <PythonIcon />,
    title: "Python",
    description:
      "Experienced in Python for web development, data analysis, and scripting.",
    link: "https://www.python.org/",
  },
  {
    icon: <MongoDBIcon />,
    title: "MongoDB",
    description: "Proficient in using MongoDB for NoSQL database management.",
    link: "https://www.mongodb.com/",
  },
  {
    icon: <PostgresIcon />,
    title: "PostgreSQL",
    description:
      "Skilled in using PostgreSQL for relational database management.",
    link: "https://www.postgresql.org/",
  },
  {
    icon: <Html5Icon />,
    title: "HTML",
    description:
      "Experienced in writing semantic and accessible HTML for web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <ScssIcon />,
    title: "Sass",
    description:
      "Proficient in using Sass for writing maintainable and scalable CSS.",
    link: "https://sass-lang.com/",
  },
];

// Project Section
// -------------------------------------------------------------------------------------------
import TaskFlow1 from "@/public/images/Screenshots/TaskFlow-1.png";
import TaskFlow2 from "@/public/images/Screenshots/TaskFlow-2.png";
import TaskFlow3 from "@/public/images/Screenshots/TaskFlow-3.png";
import TaskFlow4 from "@/public/images/Screenshots/TaskFlow-4.png";
import SkillWave1 from "@/public/images/Screenshots/SkillWave-1.png";
import SkillWave2 from "@/public/images/Screenshots/SkillWave-2.png";
import SkillWave3 from "@/public/images/Screenshots/SkillWave-3.png";
import SkillWave4 from "@/public/images/Screenshots/SkillWave-4.png";
import Animease1 from "@/public/images/Screenshots/Animease-1.png";
import Animease2 from "@/public/images/Screenshots/Animease-2.png";
import Animease3 from "@/public/images/Screenshots/Animease-3.png";
import Animease4 from "@/public/images/Screenshots/Animease-4.png";

import Number1Icon from "@/public/svg/icons/Number1Icon";
import Number2Icon from "@/public/svg/icons/Number2Icon";
import Number3Icon from "@/public/svg/icons/Number3Icon";

import LaptopPhoneSyncIcon from "@/public/svg/icons/Features/LaptopPhoneSyncIcon";
import UserSharingIcon from "@/public/svg/icons/Features/UserSharingIcon";
import ArtificialIntelligence04Icon from "@/public/svg/icons/Features/ArtificialIntelligence04Icon";
import DarkModeIcon from "@/public/svg/icons/Features/DarkModeIcon";
import TagsIcon from "@/public/svg/icons/Features/TagsIcon";
import TimeScheduleIcon from "@/public/svg/icons/Features/TimeScheduleIcon";
import Mortarboard02Icon from "@/public/svg/icons/Features/Mortarboard02Icon";
import SaveMoneyDollarIcon from "@/public/svg/icons/Features/SaveMoneyDollarIcon";
import Quiz05Icon from "@/public/svg/icons/Features/Quiz05Icon";
import AiGenerativeIcon from "@/public/svg/icons/Features/AiGenerativeIcon";
import ChartBarLineIcon from "@/public/svg/icons/Features/ChartBarLineIcon";
import Rocket02Icon from "@/public/svg/icons/Features/Rocket02Icon";
import FlashIcon from "@/public/svg/icons/Features/FlashIcon";
import ThumbsUpIcon from "@/public/svg/icons/Features/ThumbsUpIcon";
import Settings05Icon from "@/public/svg/icons/Features/Settings05Icon";
import BookOpen02Icon from "@/public/svg/icons/Features/BookOpen02Icon";
import SourceCodeSquareIcon from "@/public/svg/icons/Features/SourceCodeSquareIcon";

export const projectData = [
  {
    title: "TaskFlow",
    description:
      "TaskFlow is a powerful and intuitive web application designed to help users manage and organize their tasks efficiently. It offers a user-friendly interface to add, view, and manage to-do items, enhancing workflow organization and task tracking.",
    link: "https://github.com/rishabhgokhe/SkillWave#readme",
    preview: "https://taskflow20.vercel.app/",
    numberIcon: <Number1Icon />,
    features: [
      {
        title: "Responsive UI",
        icon: <LaptopPhoneSyncIcon />,
      },
      {
        title: "Easy Sharing",
        icon: <UserSharingIcon />,
      },
      {
        title: "AI Suggestions",
        icon: <ArtificialIntelligence04Icon />,
      },
      {
        title: "Dark Mode",
        icon: <DarkModeIcon />,
      },
      {
        title: "Multiple Tags",
        icon: <TagsIcon />,
      },
      {
        title: "Tasks Scheduling",
        icon: <TimeScheduleIcon />,
      },
    ],
    images: [
      {
        image: TaskFlow1,
        alt: "TaskFlow HomePage",
      },
      {
        image: TaskFlow2,
        alt: "TaskFlow Uniquely Crafted UI",
      },
      {
        image: TaskFlow3,
        alt: "TaskFlow DashBoard",
      },
      {
        image: TaskFlow4,
        alt: "TaskFlow About Me",
      },
    ],
  },
  {
    title: "SkillWave",
    description:
      "SkillWave is an innovative online platform dedicated to empowering learners worldwide. Our mission is to provide accessible, high-quality courses that enable individuals to acquire new skills, advance their careers, and achieve personal growth.",
    link: "https://github.com/rishabhgokhe/SkillWave#readme",
    preview: "https://skillwave20.vercel.app/",
    numberIcon: <Number2Icon />,
    features: [
      {
        title: "Responsive UI",
        icon: <LaptopPhoneSyncIcon />,
      },
      {
        title: "Personalised Path",
        icon: <Mortarboard02Icon />,
      },
      {
        title: "Affordable",
        icon: <SaveMoneyDollarIcon />,
      },
      {
        title: "Weekly Quiz",
        icon: <Quiz05Icon />,
      },
      {
        title: "AI Doubt Resolver",
        icon: <AiGenerativeIcon />,
      },
      {
        title: "Progress Tracking",
        icon: <ChartBarLineIcon />,
      },
    ],
    images: [
      {
        image: SkillWave1,
        alt: "SkillWave HomePage",
      },
      {
        image: SkillWave2,
        alt: "SkillWave Explore Courses",
      },
      {
        image: SkillWave3,
        alt: "SkillWave Footer",
      },
      {
        image: SkillWave4,
        alt: "SkillWave About Me",
      },
    ],
  },
  {
    title: "Animease",
    description:
      "Animease is a utility package designed to make using animations easier for React projects. It provides a simplified react components for creating animations and transitions.",
    link: "https://www.npmjs.com/package/animease",
    preview: "https://www.npmjs.com/package/animease",
    numberIcon: <Number3Icon />,
    features: [
      {
        title: "Smooth Animation",
        icon: <FlashIcon />,
      },
      {
        title: "Easy to use",
        icon: <ThumbsUpIcon />,
      },
      {
        title: "Custom Effects",
        icon: <Settings05Icon />,
      },
      {
        title: "Lightweight Library",
        icon: <Rocket02Icon />,
      },
      {
        title: "Documentation",
        icon: <BookOpen02Icon />,
      },
      {
        title: "Open Source",
        icon: <SourceCodeSquareIcon />,
      },
    ],
    images: [
      {
        image: Animease1,
        alt: "Animease npm HomePage",
      },
      {
        image: Animease2,
        alt: "Animease source code github",
      },
      {
        image: Animease3,
        alt: "Animease usage github readme",
      },
      {
        image: Animease4,
        alt: "Animease github readme",
      },
    ],
  },
];

// About Us Section
// -------------------------------------------------------------------------------------------
export const aboutData = {
  aboutMe:
    "Hello! I'm Rishabh Gokhe, a passionate full-stack developer. I enjoy creating stunning, responsive web applications and am always eager to learn new technologies. In addition to coding, I have a keen interest in 3D modeling and UI design. When I'm not coding, you can find me modeling 3D Objects or hitting the gym.",
  currentStatus:
    "I am currently working on SkillWave, an ed-tech platform that aims to revolutionize online learning, and TaskFlow, a task management software with a unique design and easy UI. Feel free to explore my projects and connect with me!",
};
