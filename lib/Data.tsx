// Navigation bar
import GithubIcon from "@/public/svg/icons/GithubIcon";
import InstagramIcon from "@/public/svg/icons/InstagramIcon";
import Linkedin01Icon from "@/public/svg/icons/Linkedin01Icon";
import NewTwitterRectangleIcon from "@/public/svg/icons/NewTwitterRectangleIcon";
import MailSend01Icon from "@/public/svg/icons/MailSend01Icon";
import LeetcodeIcon from "@/public/svg/icons/LeetcodeIcon";

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
    name: "Instagram",
    link: "https://instagram.com/rishabh_gokhe",
    icon: <InstagramIcon />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/rishabhgokhe",
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
export const introPara =
  "Versatile Full-Stack and Android Developer with expertise in React, Next.js, Node.js, and MongoDB. This website is a showcase of my diverse portfolio, highlighting my problem-solving skills and passion for creating scalable, high-performance applications. Exploring Blockchain and Large Language Models (LLMs). Feel free to explore my work and connect with me for exciting collaborations!";

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
    icon: <JavaIcon />,
    title: "Java",
    description:
      "Proficient in building applications using Java, including Spring framework.",
    link: "https://www.java.com/",
  },
  {
    icon: <SwiftIcon />,
    title: "Swift",
    description:
      "Experienced in using Swift for iOS and macOS app development.",
    link: "https://developer.apple.com/swift/",
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
    icon: <GSAPIcon />,
    title: "GSAP",
    description:
      "Experienced in using GSAP for creating high-performance animations and transitions on web pages.",
    link: "https://greensock.com/gsap/",
  },
  {
    icon: <PostmanIcon />,
    title: "Postman",
    description:
      "Proficient in using Postman for API testing and development, ensuring robust and reliable APIs.",
    link: "https://www.postman.com/",
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
    "Hey! I'm Rishabh Gokhe, a full-stack developer skilled in web and mobile development. I specialize in Next.js, React Native, and backend technologies like Node.js and MongoDB. I love solving complex problems, exploring AI and cybersecurity, and contributing to developer communities. Outside of coding, I enjoy AI research, reading self-improvement books, and fitness.",
  currentStatus:
    "Currently building SkillWave (ed-tech platform), TaskFlow (task management app), and ByteChat (real-time chat). Also diving into Blockchain, advancing DSA, and researching LLMs. Let's build something awesome together!",
};

// Services Section
// -------------------------------------------------------------------------------------------
export const servicesData = [
  {
    title: "Web Development",
    description:
      "Creating dynamic, responsive websites with modern frameworks to deliver seamless user experiences across all devices.",
    icon: "🌐",
  },
  {
    title: "iOS App Development",
    description:
      "Building high-performance iOS apps with sleek designs and user-centric functionality for a seamless mobile experience.",
    icon: "📱",
  },
  {
    title: "SEO Optimization",
    description:
      "Boosting your website's visibility and ranking with tailored SEO strategies to attract and retain your target audience.",
    icon: "📈",
  },
  {
    title: "Technical Support & Maintenance",
    description:
      "Providing reliable technical support and maintenance services to keep your applications running smoothly.",
    icon: "🛡️",
  },
];

// Bento Grid Section
// -------------------------------------------------------------------------------------------
import LinkedInColoredIcon from "@/public/svg/icons/Colored/LinkedinColoredIcon";
import GithubColoredIcon from "@/public/svg/icons/Colored/GithubColoredIcon";
import InstagramColoredIcon from "@/public/svg/icons/Colored/InstagramColoredIcon";
import WhatsappColoredIcon from "@/public/svg/icons/Colored/WhatsappColoredIcon";
import TwitterColoredIcon from "@/public/svg/icons/Colored/TwitterColoredIcon";
import CallColoredIcon from "@/public/svg/icons/Colored/CallColoredIcon";
import GmailColoredIcon from "@/public/svg/icons/Colored/GmailColoredIcon";
import BmcColoredIcon from "@/public/svg/icons/Colored/BmcColoredIcon";
import TelegramColoredIcon from "@/public/svg/icons/Colored/TelegramColoredIcon";
import { BentoGridButton } from "@/components/Home/BentoGrid/BentoGridButton";

export const socialBentoGridData = [
  {
    title: "LinkedIn",
    icon: <LinkedInColoredIcon />,
    description: "Let's connect on LinkedIn 🫱🏻‍🫲🏼.",
    link: "https://www.linkedin.com/in/rishabh-gokhe-22168b287",
    cardTrigger: (
      <BentoGridButton
        href="https://www.linkedin.com/in/rishabh-gokhe-22168b287"
        title="Connect"
      />
    ),
    span: 1,
  },
  {
    title: "GitHub",
    icon: <GithubColoredIcon />,
    description:
      "Check out my latest projects, from web development to open-source contributions! Let's code together 💻.",
    link: "https://github.com/rishabhgokhe",
    cardTrigger: (
      <BentoGridButton href="https://github.com/rishabhgokhe" title="Explore Projects" />
    ),
    span: 3,
  },
  {
    title: "Instagram",
    icon: <InstagramColoredIcon />,
    description: "Follow me on Instagram 📸",
    link: "https://www.instagram.com/rishabhgokhe",
    cardTrigger: (
      <BentoGridButton
        href="https://www.instagram.com/rishabhgokhe"
        title="Follow"
      />
    ),
    span: 1,
  },
  {
    title: "Buy me a Coffee",
    icon: <BmcColoredIcon />,
    description: "Support my work with a coffee ☕. Every cup helps me create more!",
    link: "https://buymeacoffee.com/rishabhgokhe",
    cardTrigger: (
      <BentoGridButton
        href="https://buymeacoffee.com/rishabhgokhe"
        title={"Coffee Break! ☕️"
        }
      />
    ),
    span: 3,
  },
  {
    title: "Twitter",
    icon: <TwitterColoredIcon />,
    description: "Let’s tweet and connect 🐦.",
    link: "https://twitter.com/rishabhgokhe",
    cardTrigger: (
      <BentoGridButton
        href="https://twitter.com/rishabhgokhe"
        title="Follow me"
      />
    ),
    span: 1,
  },
  {
    title: "Call Now",
    icon: <CallColoredIcon />,
    description: "Connect with me directly 📞",
    link: "tel:+919098447696",
    cardTrigger: <BentoGridButton href="tel:+919098447696" title="Call me" />,
    // <a
    //   href="tel:+919098447696"
    //   className="text-muted-foreground hover:text-purple-200 transition-colors"
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   aria-label="LinkedIn Profile"
    // >
    //   Call me
    // </a>
    span: 1,
  },
  {
    title: "Email",
    icon: <GmailColoredIcon />,
    description: "Reach out via email 📧.",
    link: "mailto:rishabhgokhe20contact@gmail.com",
    cardTrigger: (
      <BentoGridButton
        href="mailto:rishabhgokhe20contact@gmail.com"
        title="Email me"
      />
    ),
    span: 1,
  },
  {
    title: "Telegram",
    icon: <TelegramColoredIcon />,
    description: "Join me on Telegram 📲.",
    link: "https://t.me/rishDiscovers",
    cardTrigger: (
      <BentoGridButton
        href="https://t.me/rishDiscovers"
        title="Message me"
      />
    ),
    span: 1,
  },
  {
    title: "WhatsApp",
    icon: <WhatsappColoredIcon />,
    description:
      "Let’s chat! Reach out to me anytime for a quick conversation or collaboration 💬.",
    link: "https://wa.me/919098447696",
    cardTrigger: (
      <BentoGridButton href="https://wa.me/919098447696" title="Message on WhatsApp" />
    ),
    span: 3,
  },
];
