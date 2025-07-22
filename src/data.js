import { FaRegEnvelope } from "react-icons/fa";
import { LuGithub, LuLinkedin, LuPhoneCall } from "react-icons/lu";

export const socials = [
  {
    icon: LuLinkedin,
    url: "https://www.linkedin.com/in/cg97", // fixed missing https
    label: "LinkedIn",
    color: '#0077B5',         // LinkedIn blue
    hoverBg: '#E8F4F9',       // very light LinkedIn-blue background
  },
  {
    icon: LuGithub,
    url: "https://github.com/Chitesh97",
    label: "GitHub",
    color: '#000000',
    hoverBg: '#F0F0F0',       // light gray for contrast with black
  },
  {
    icon: FaRegEnvelope,
    url: "mailto:dv.chitesh97@gmail.com",
    label: "Email",
    color: '#EA4335',         // Gmail red
    hoverBg: '#FDECEA',       // soft red-tint background
  },
  {
    icon: LuPhoneCall,
    url: "tel:+917589005569",
    label: "Phone",
    color: '#5BC236',         // bright green
    hoverBg: '#EDFCE9',       // soft mint background
  },
];

export const aboutMeText = {
  intro1: "Results-driven front-end developer with over 6 years of experience building intuitive, performant, and scalable user interfaces within the Pega ecosystem. I specialise in using Pega Theme-Cosmos, Constellation, UI Kit, JavaScript, React, HTML/CSS, and REST APIs to deliver UI solutions that enhance both user experience and business value.",
  highlightsIntro1: ["6 years", "scalable user interfaces", "business value"],
  intro2: "I’ve had the opportunity to work across government and enterprise domains, collaborating closely with Pega architects, BAs, and cross-functional teams to bring seamless digital services to life.",
  highlightsIntro2: ["government", "enterprise domains", "seamless"],
  highlights: [
    "Delivered and modernised 15+ Pega UI modules, driving UX consistency and reducing tech debt.",
    "Led front-end strategy and reusable component design using DX API and Pega UI best practices.",
    "Strong advocate for accessibility, performance optimisation, and design consistency across case types."
  ],
  skillsAndStrengths: [
    "Proactive communicator with a collaborative mindset.",
    "Experienced in mentoring junior developers and onboarding new team members.",
    "Adept at translating business needs into technical UI solutions.",
    "Thrive in agile environments with strong ownership and problem-solving attitude."
  ],
}