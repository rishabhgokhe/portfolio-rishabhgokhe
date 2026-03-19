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
      },
    ],
  },
];

// Project Section
// -------------------------------------------------------------------------------------------
import TaskFlow from "@/public/images/Screenshots/TaskFlow.png";
import SkillWave from "@/public/images/Screenshots/SkillWave.png";
import Animease from "@/public/images/Screenshots/Animease.png";

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
    category: "Web",
    description:
      "TaskFlow is a focused task manager with smart tagging, calendar views, and productivity analytics.",
    link: "https://github.com/rishabhgokhe/TaskFlow#readme",
    preview: "https://taskflow20.vercel.app/",
    features: [],
    images: {
      image: TaskFlow,
      alt: "TaskFlow HomePage",
    },
  },
  {
    title: "SkillWave",
    category: "Web",
    description:
      "SkillWave is a learning platform with cohort journeys, quizzes, and progress insights.",
    link: "https://github.com/rishabhgokhe/SkillWave#readme",
    preview: "https://skillwave20.vercel.app/",
    features: [],
    images: {
      image: SkillWave,
      alt: "SkillWave HomePage",
    },
  },
  {
    title: "Animease",
    category: "Library",
    description:
      "Animease is a lightweight React animation helper with presets and composable transitions.",
    link: "https://www.npmjs.com/package/animease",
    preview: "https://www.npmjs.com/package/animease",
    features: [],
    images: {
      image: Animease,
      alt: "Animease npm HomePage",
    },
  },
  {
    title: "PulseBoard",
    category: "AI",
    description:
      "Real-time ops dashboard that flags anomalies and summarizes incidents using NLP.",
    link: "#",
    preview: "#",
    features: [],
    images: [],
  },
  {
    title: "CallSense",
    category: "AI",
    description:
      "Call analytics suite with sentiment, key-topic extraction, and action item detection.",
    link: "#",
    preview: "#",
    features: [],
    images: [],
  },
  {
    title: "ChainVote",
    category: "Blockchain",
    description:
      "Tamper-proof voting prototype with wallet auth and verifiable result proofs.",
    link: "#",
    preview: "#",
    features: [],
    images: [],
  },
  {
    title: "VaultPay",
    category: "Blockchain",
    description:
      "Smart-contract based escrow flow with multi-sig releases and audit trail.",
    link: "#",
    preview: "#",
    features: [],
    images: [],
  },
  {
    title: "CampusConnect",
    category: "Web",
    description:
      "Event and club management portal with RSVP, ticketing, and announcements.",
    link: "#",
    preview: "#",
    features: [],
    images: [],
  },
  {
    title: "RouteSnap",
    category: "Mobile",
    description:
      "Android app for GPS + camera tracking with Firebase sync and live route history.",
    link: "#",
    preview: "#",
    features: [],
    images: [],
  },
  {
    title: "SecureDocs",
    category: "Security",
    description:
      "Document sharing with zero-trust access, expiring links, and watermarking.",
    link: "#",
    preview: "#",
    features: [],
    images: [],
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

// Achievements & Leadership Section
import CIIS1 from "@/public/images/hackathon/CIIS_1.jpeg";
import CIIS2 from "@/public/images/hackathon/CIIS_2.jpeg";
import CIIS3 from "@/public/images/hackathon/CIIS_3.jpeg";
import ENIGMA1 from "@/public/images/hackathon/ENIGMA_1.jpeg";
import ENIGMA2 from "@/public/images/hackathon/ENIGMA_2.jpeg";
import ENIGMA3 from "@/public/images/hackathon/ENIGMA_3.jpeg";
import IIITN1 from "@/public/images/hackathon/IIITN_1.jpeg";
import IIITN2 from "@/public/images/hackathon/IIITN_2.jpeg";
import IIITN3 from "@/public/images/hackathon/IIITN_3.jpeg";

export const hackathonWinsData = [
  {
    rank: "Winner",
    event: "ENIGMA 2025 (YCCE Nagpur)",
    year: "2025",
    project:
      "Built an Android GPS + camera tracking app using Firebase and Kotlin. 1st among 10 finalists.",
    images: [ENIGMA1.src, ENIGMA2.src, ENIGMA3.src],
  },
  {
    rank: "Special Mention",
    event:
      "National CyberShield Hackathon (Madhya Pradesh Police, SGSITS Indore)",
    year: "2025",
    project:
      "Developed an all-India campaign detection system using NLP techniques that detects real time threats from Internet",
    images: [CIIS1.src, CIIS2.src, CIIS3.src],
  },
  {
    rank: "Finalist",
    event: "GEN-A-THON (IIIT Nagpur)",
    year: "2024",
    project:
      "Built an AI-powered call analysis tool with real-time sentiment and metrics analytics features.",
    images: [IIITN1.src, IIITN2.src, IIITN3.src],
  },
];

export const achievementHighlightsData = [
  {
    title: "Technical Head (YASH & COSMOS)",
    value: "2 Roles",
    detail:
      "Organised 5+ events like Smakathon, ENIGMA 2.0, CipherChase, and Coding Relay.",
  },
  {
    title: "Technical Cohead (YCCEXMUN)",
    value: "1 Role",
    detail:
      "Worked on Website and Technical Part of Model United Nations Organised by YCCE.",
  },
  {
    title: "Events Delivered",
    value: "5+",
    detail:
      "Planned Various Technical Events from Start to End, with Multiple Domains.",
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
  },
];
