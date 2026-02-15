// Navigation bar
import GithubIcon from "@/public/svg/icons/GithubIcon";
import Linkedin01Icon from "@/public/svg/icons/Linkedin01Icon";
import MailSend01Icon from "@/public/svg/icons/MailSend01Icon";
import LeetcodeIcon from "@/public/svg/icons/LeetcodeIcon";

export const navIcons = [
  {
    name: "Github",
    link: "https://github.com/rishabhgokhe",
    icon: <GithubIcon />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rishabh-gokhe",
    icon: <Linkedin01Icon />,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/rishabh_gokhe/",
    icon: <LeetcodeIcon />,
  },
  {
    name: "Mail Us",
    link: "mailto:rishabhgokhe20contact@gmail.com",
    icon: <MailSend01Icon />,
  },
];

// Features Section
// -------------------------------------------------------------------------------------------
import ReactIcon from "@/public/svg/icons/Tools/ReactIcon";
import Typescript01Icon from "@/public/svg/icons/Tools/Typescript01Icon";
import JavaScriptIcon from "@/public/svg/icons/Tools/JavaScriptIcon";
import JavaIcon from "@/public/svg/icons/Tools/JavaIcon";
import NpmIcon from "@/public/svg/icons/Tools/NpmIcon";
import GSAPIcon from "@/public/svg/icons/Tools/GSAPIcon";
import NextIcon from "@/public/svg/icons/Tools/NextIcon";
import PythonIcon from "@/public/svg/icons/Tools/PythonIcon";
import ExpressIcon from "@/public/svg/icons/Tools/ExpressIcon";
import MongoDBIcon from "@/public/svg/icons/Tools/MongoDBIcon";
import PostgresIcon from "@/public/svg/icons/Tools/PostgresIcon";
import PostmanIcon from "@/public/svg/icons/Tools/PostmanIcon";
import SpringBootLogo from "@/public/svg/icons/Tools/SpringBoot";
import SwiftIcon from "@/public/svg/icons/Tools/SwiftIcon";
import TailwindIcon from "@/public/svg/icons/Tools/TailwindIcon";
import ReduxIcon from "@/public/svg/icons/Tools/ReduxIcon";
import Html5Icon from "@/public/svg/icons/Tools/Html5Icon";
import ScssIcon from "@/public/svg/icons/Tools/ScssIcon";
import Solidity from "@/public/svg/icons/Tools/Solidity";
import SupabaseLogo from "@/public/svg/icons/Tools/Supabase";
import RedisLogo from "@/public/svg/icons/Tools/Redis";
import DockerLogo from "@/public/svg/icons/Tools/Docker";
import VSCodeLogo from "@/public/svg/icons/Tools/VSCode";

export const TechStackSkillGroups = [
  {
    id: "languages",
    title: "Languages",
    tone: "emerald",
    items: [
      {
        name: "TypeScript",
        icon: <Typescript01Icon className="h-4 w-4" />,
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "JavaScript",
        icon: <JavaScriptIcon className="h-4 w-4" />,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "Python",
        icon: <PythonIcon className="h-4 w-4" />,
        link: "https://www.python.org/",
      },
      {
        name: "Java",
        icon: <JavaIcon className="h-4 w-4" />,
        link: "https://www.java.com/",
      },
      {
        name: "Swift",
        icon: <SwiftIcon className="h-4 w-4" />,
        link: "https://developer.apple.com/swift/",
      },
      {
        name: "Solidity",
        icon: <Solidity className="h-4 w-4" />,
        link: "https://soliditylang.org/",
      },
      {
        name: "HTML",
        icon: <Html5Icon className="h-4 w-4" />,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        icon: <Html5Icon className="h-4 w-4" />,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Sass",
        icon: <ScssIcon className="h-4 w-4" />,
        link: "https://sass-lang.com/",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    tone: "sky",
    items: [
      {
        name: "React",
        icon: <ReactIcon className="h-4 w-4" />,
        link: "https://react.dev/",
      },
      {
        name: "Next.js",
        icon: <NextIcon className="h-4 w-4" />,
        link: "https://nextjs.org/",
      },
      {
        name: "Redux",
        icon: <ReduxIcon className="h-4 w-4" />,
        link: "https://redux.js.org/",
      },
      {
        name: "Tailwind CSS",
        icon: <TailwindIcon className="h-4 w-4" />,
        link: "https://tailwindcss.com/",
      },
      {
        name: "GSAP",
        icon: <GSAPIcon className="h-4 w-4" />,
        link: "https://greensock.com/gsap/",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    tone: "cyan",
    items: [
      {
        name: "Node.js",
        icon: <NpmIcon className="h-4 w-4" />,
        link: "https://nodejs.org/",
      },
      {
        name: "Express",
        icon: <ExpressIcon className="h-4 w-4" />,
        link: "https://expressjs.com/",
      },
      {
        name: "Spring Boot",
        icon: <SpringBootLogo className="h-4 w-4" />,
        link: "https://spring.io/projects/spring-boot",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & Cloud",
    tone: "violet",
    items: [
      {
        name: "PostgreSQL",
        icon: <PostgresIcon className="h-4 w-4" />,
        link: "https://www.postgresql.org/",
      },
      {
        name: "MongoDB",
        icon: <MongoDBIcon className="h-4 w-4" />,
        link: "https://www.mongodb.com/",
      },
      {
        name: "Supabase",
        icon: <SupabaseLogo className="h-4 w-4" />,
        link: "https://supabase.com/",
      },
      {
        name: "Redis",
        icon: <RedisLogo className="h-4 w-4" />,
        link: "https://redis.io/",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    tone: "amber",
    items: [
      {
        name: "Docker",
        icon: <DockerLogo className="h-4 w-4" />,
        link: "https://www.docker.com/",
      },
      {
        name: "GitHub",
        icon: <GithubIcon className="h-4 w-4" />,
        link: "https://github.com/",
      },
      {
        name: "Postman",
        icon: <PostmanIcon className="h-4 w-4" />,
        link: "https://www.postman.com/",
      },
      {
        name: "Visual Studio Code",
        icon: <VSCodeLogo className="h-4 w-4" />,
        link: "https://code.visualstudio.com/",
      }
    ],
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

// Services Section
// -------------------------------------------------------------------------------------------
export const servicesData = [
  {
    title: "Product Grade Web Apps",
    description:
      "Scalable apps with Next.js and React, built for real users and production traffic.",
    icon: "🌐",
  },
  {
    title: "Software Testing",
    description:
      "Unit, integration, and e2e test strategy to ship stable releases with confidence.",
    icon: "🧪",
  },
  {
    title: "Database Scaling",
    description:
      "Schema, indexing, and query tuning for MongoDB/PostgreSQL as traffic grows.",
    icon: "🗄️",
  },
  {
    title: "Performance Optimization",
    description:
      "Profiling, caching, and bottleneck fixes for faster UX and lower backend latency.",
    icon: "⚡",
  },
];

// Footer Links
// -------------------------------------------------------------------------------------------
export const socialBentoGridData = [
  {
    title: "Email",
    link: "mailto:rishabhgokhe20contact@gmail.com",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/rishabh-gokhe-22168b287",
  },
  {
    title: "GitHub",
    link: "https://github.com/rishabhgokhe",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/rishabh_gokhe",
  },
  {
    title: "Buy me a Coffee",
    link: "https://buymeacoffee.com/rishabhgokhe",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/rishabhgokhe",
  }
];
