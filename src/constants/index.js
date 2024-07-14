import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  supabse,
  figma,
  EcoThrive,
  travello,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SupaBase",
    icon: supabse,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: java,
  },

];

const experiences = [
  {
    title: "Mobile application development",
    PName: "Travello",
    icon: travello,
    iconBg: "#383E56",
    date: "2024 Jan - march 2024 ",
    points: [
      "Developed Travel guide application with all feature that required for travelers ",
      "used java for development and place API and wether API firebase as database ",
    ],
  },
  {
    title: " Full Stack React Native Developer",
    PName: "EcoThrive",
    icon: EcoThrive,
    iconBg: "black",
    date: "may 2024 ",
    points: [
      "AI powered plant suggestion mobile application ",
      "frontend is done by raect-native backend is NodeJs supabase for data base and authentication part is done by using firebase for AI used Gemini AI",
      "cross plat form development , collaborative working ",
      "https://github.com/janithsdfps/EcoThrive",
    ],
  }
];


export { services, technologies, experiences };