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
import AntiIndia from "@/public/images/Screenshots/Anti-India Threat Detection System.png";
import HuntSecrets from "@/public/images/Screenshots/HuntSecrets.png";
import StatePropagationEngine from "@/public/images/Screenshots/State Propogation Engine.png";
import upsurge2k25 from "@/public/images/Screenshots/upsurge2k25.png";
import READMESync from "@/public/images/Screenshots/README-Sync.png";
import CareMitra from "@/public/images/Screenshots/CareMitra.png";
import CrewNotification from "@/public/images/Screenshots/Crew Notification.png";

export const projectData = [
  {
    title: "CareMitra",
    category: "AI/ML",
    type: "Product",
    description:
      "A SaaS platform that integrates with hospital systems to securely manage patient records using a Blockchain-powered Health Wallet.",
    github: "https://github.com/rishabhgokhe/CareMitra",
    preview: "https://care-mitra.vercel.app/",
    tech: ["React", "Node.js", "MongoDB", "Blockchain", "Firebase"],
    features: [
      "Secure medical record storage",
      "Blockchain-based data integrity",
      "Access control for healthcare providers",
      "EMR system integration",
      "AI-based health recommendations",
    ],
    images: {
      image: CareMitra,
      alt: "CareMitra HomePage",
    },
  },
  {
    title: "Marine Regimes Detection Using HMM",
    category: "AI/ML",
    type: "Research",
    description:
      "Detects hidden regimes in marine time-series data using unsupervised learning, enabling analysis of dynamic ocean patterns without labeled data.",
    github:
      "https://github.com/rishabhgokhe/Unsupervised-Marine-Latent-Detection",
    preview: "#",
    tech: ["Python", "NumPy", "Scikit-learn", "HMM"],
    features: [
      "Multivariate time-series analysis",
      "Temporal feature extraction",
      "Probabilistic modeling with HMM",
      "Handles non-stationary data",
      "Pattern visualization",
    ],
    images: {
      image: TaskFlow,
      alt: "Marine Detection Visualization",
    },
  },
  {
    title: "Anti-India Threat Detection System",
    category: "AI/ML",
    type: "Research",
    description:
      "An intelligent system to detect propaganda, sentiment, and engagement patterns using NLP and Machine Learning.",
    github: "https://github.com/rishabhgokhe/anti-india-detection",
    preview: "https://anti-india-detection.streamlit.app",
    tech: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    features: [
      "Sentiment classification",
      "Propaganda detection",
      "Narrative tracking",
      "Influencer analysis",
    ],
    images: {
      image: AntiIndia,
      alt: "Anti-India Detection System",
    },
  },
  {
    title: "Task Scheduler with OpenCV",
    category: "AI/ML",
    type: "Product",
    description:
      "A real-time system that detects spills and garbage using computer vision and assigns cleaning tasks automatically.",
    github: "https://github.com/rishabhgokhe/Crew-Notification",
    preview: "#",
    tech: ["Python", "OpenCV", "Deep Learning", "Firebase", "MERN"],
    features: [
      "Real-time object detection",
      "Automated task assignment",
      "Live monitoring dashboard",
      "Firebase integration",
      "Scalable architecture",
    ],
    images: {
      image: CrewNotification,
      alt: "Crew Notification System",
    },
  },
  {
    title: "State Propagation Engine",
    category: "Systems / Research",
    type: "Research",
    description:
      "A research-driven engine to study deterministic state updates and dependency resolution in reactive systems.",
    github: "https://github.com/rishabhgokhe/State-propagation-engine",
    preview: "#",
    tech: ["JavaScript", "Data Structures", "Reactive Systems"],
    features: [
      "Signal-based state updates",
      "Dependency graph modeling",
      "Deterministic propagation",
      "Real-time updates",
      "Execution tracing",
    ],
    images: {
      image: StatePropagationEngine,
      alt: "State Propagation Engine",
    },
  },
  {
    title: "HuntSecrets",
    category: "Web Development",
    type: "Product",
    description:
      "A QR-based treasure hunt platform with real-time leaderboards and interactive gameplay.",
    github: "https://github.com/rishabhgokhe/HuntSecrets",
    preview: "https://upsurge-cipherchase.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
    features: [
      "QR-based gameplay",
      "Leaderboard system",
      "Penalty scoring logic",
      "Event hosting support",
    ],
    images: {
      image: HuntSecrets,
      alt: "HuntSecrets HomePage",
    },
  },
  {
    title: "upsurge2k25",
    category: "Web Development",
    type: "Product",
    description:
      "A modern tech fest website built with animations and optimized performance for a smooth user experience.",
    github: "https://github.com/rishabhgokhe/upsurge2k25",
    preview: "https://upsurge2k25.tech/",
    tech: ["Next.js", "GSAP", "React"],
    features: [
      "Dynamic event listings",
      "Smooth animations",
      "Mobile responsive design",
      "Optimized performance",
    ],
    images: {
      image: upsurge2k25,
      alt: "Upsurge Website",
    },
  },
  {
    title: "TaskFlow",
    category: "Web Development",
    type: "Product",
    description:
      "A productivity-focused task manager with smart organization and analytics.",
    github: "https://github.com/rishabhgokhe/TaskFlow#readme",
    preview: "https://taskflow20.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
    features: [
      "Smart task tagging",
      "Calendar planning",
      "Productivity insights",
      "Minimal UI design",
    ],
    images: {
      image: TaskFlow,
      alt: "TaskFlow App",
    },
  },
  {
    title: "SkillWave",
    category: "Web Development",
    type: "Product",
    description:
      "An interactive learning platform with structured cohorts and progress tracking.",
    github: "https://github.com/rishabhgokhe/SkillWave#readme",
    preview: "https://skillwave20.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
    features: [
      "Cohort-based learning",
      "Interactive quizzes",
      "Progress tracking",
      "User insights dashboard",
    ],
    images: {
      image: SkillWave,
      alt: "SkillWave Platform",
    },
  },
  {
    title: "README-Sync",
    category: "Developer Tool",
    type: "Tool",
    description:
      "A script to automate README updates across repositories using reusable content blocks.",
    github: "https://github.com/rishabhgokhe/README-Sync",
    preview: "#",
    tech: ["Python", "Git"],
    features: [
      "Automated README updates",
      "Reusable content blocks",
      "Change detection system",
      "Smart commit messages",
    ],
    images: {
      image: READMESync,
      alt: "README Sync Tool",
    },
  },
  {
    title: "Animease",
    category: "Open Source / Library",
    type: "Library",
    description:
      "A lightweight React animation library with pre-built transitions and composable APIs.",
    github: "https://github.com/rishabhgokhe/animease",
    preview: "https://www.npmjs.com/package/animease",
    tech: ["React", "JavaScript", "Animation"],
    features: [
      "Predefined animation presets",
      "Composable transitions",
      "Lightweight package",
      "Easy integration",
    ],
    images: {
      image: Animease,
      alt: "Animease Library",
    },
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

// Articles Section
// -------------------------------------------------------------------------------------------
export const articlesData = [
  {
    slug: "how-ai-finally-solved-protein-folding",
    title: "How AI Finally Solved Protein Folding..?",
    meta: "Artificial Intelligence",
    description:
      "How AI models like deep learning are revolutionizing protein structure prediction and accelerating breakthroughs in medicine and biology.",
    link: "https://medium.com/@rishabhgokhe/how-ai-finally-solved-protein-folding-005fe6040cba",
  },
  {
    slug: "self-driving-car-economy-effect",
    title: "Self-driving Car Economy Effect",
    meta: "Technology & Economy",
    description:
      "Exploring how autonomous vehicles could reshape industries, jobs, transportation costs, and the global economy.",
    link: "#",
  },
  {
    slug: "edna-deep-sea-creatures-discovery",
    title: "eDNA in Deep Sea Creatures Discovery",
    meta: "Marine Science",
    description:
      "How environmental DNA (eDNA) is helping scientists discover and study unknown deep-sea species without direct observation.",
    link: "#",
  },
  {
    slug: "transformers-in-llm",
    title: "Transformers in LLM",
    meta: "AI & Machine Learning",
    description:
      "Understanding the transformer architecture behind large language models and how it powers modern AI like chatbots and text generation.",
    link: "#",
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
