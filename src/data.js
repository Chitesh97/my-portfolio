import { FaRegEnvelope } from "react-icons/fa";
import { LuGithub, LuLinkedin, LuPhoneCall } from "react-icons/lu";

export const personalDetails = {
  heading: "Chitesh Goyal",
  subHeading: "Translating business needs into pixel-perfect, user-first web apps",
  onlineResumeLink: "https://drive.google.com/uc?export=download&id=1OwGZoXcfEkzFKJ9duGWwYk-X-GbtMhBO"
};

export const emailJsCreds = {
  serviceId: 'service_smooom6',
  templateId: 'template_odptxru',
  publicKey: 'lzucFrh8F7e-GQUgN',
};

export const socials = [
  {
    icon: LuLinkedin,
    url: "https://www.linkedin.com/in/cg97",
    displayUrl: "linkedin.com/cg97",
    label: "LinkedIn",
  },
  {
    icon: LuGithub,
    url: "https://github.com/Chitesh97",
    displayUrl: "github.com/Chitesh97",
    label: "GitHub",
  },
  {
    icon: FaRegEnvelope,
    url: "mailto:dv.chitesh97@gmail.com",
    displayUrl: "dv.chitesh97@gmail.com",
    label: "Email",
  },
  {
    icon: LuPhoneCall,
    url: "tel:+917589005569",
    displayUrl: "+91-7589005569",
    label: "Phone",
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

export const TechStackStrip = {
  0: {
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    text: 'ReactJS',
  },
  1: {
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    text: 'JavaScript',
  },
  2: {
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    text: 'TypeScript',
  },
  3: {
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    text: 'HTML5',
  },
  4: {
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    text: 'CSS3',
  },
  5: {
    imgUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/chakra-colored.svg",
    text: "Chakra UI",
  },
  6: {
    imgUrl: "https://formik.org/images/formik-og.png",
    text: "Formik",
  },
  7: {
    imgUrl: "https://ogp.me/logo.png",
    text: "Open Graph Protocol",
  },
  8: {
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    text: 'Git',
  },
  9: {
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    text: 'GitHub',
  },
  10: {
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    text: 'Figma',
  },
  11: {
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    text: 'Jest',
  },
  12: {
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    text: 'Node.js',
  },
  13: {
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    text: 'npm',
  },
  14: {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    text: "Vercel"
  },
  15: {
    imgUrl: "https://static.thenounproject.com/png/4682113-512.png",
    text: "Accessibility",
  },
  16: {
    imgUrl: "/images/Pega.png",
    text: "Pega",
  },
};

export const projects = [
  {
    "client": "Australian Government Agriculture Program",
    "industry": "Government",
    "role": "Lead UI Developer",
    "start": "2024-01-08",
    "end": "2025-06-20",
    "platform": "Pega 24.1.2 / 8.8.2",
    "description": "Led the UI delivery for a major digital transformation initiative in the agriculture sector. Designed and implemented accessible, responsive, and reusable UI components using Pega Government Platform, significantly improving user experience for both internal and public portals. Created a suite of reusable design templates, landing pages, and correspondence formats that accelerated future feature delivery by 30% while ensuring WCAG AA compliance.",
    "skills": ["Pega Government Platform", "HTML", "CSS", "JavaScript", "jQuery", "Accessibility", "WCAG AA", "Theme Cosmos", "Responsive Design", "Design Templates", "PDF Generation"],
    "featured": true,
  },
  {
    "client": "Canadian Bank Contact Center Modernization",
    "industry": "Financial Services",
    "role": "Senior UI Developer",
    "start": "2024-01-02",
    "end": "2024-06-21",
    "platform": "Pega 8.8.x",
    "description": "Modernized legacy Pega 7.x call center applications to Pega Infinity Cloud, introducing a streamlined, accessible UI that reduced agent handling time by 15%. Implemented WCAG-compliant design patterns, improved UI responsiveness, and collaborated with cross-functional teams to ensure a seamless migration with zero downtime.",
    "skills": ["Pega Customer Service", "Accessibility", "WCAG AA", "Pega Call", "UI Kit", "CSS", "HTML", "JavaScript", "jQuery"],
    "featured": true
  },
  {
    "client": "Global Tech Leadership Engagement Platform",
    "industry": "Technology Services",
    "role": "Senior UI Developer",
    "start": "2023-11-13",
    "end": "2024-05-31",
    "platform": "Pega 24.1.0 (Constellation)",
    "description": "Built a leadership engagement management platform on Pega Constellation, enabling executives to track initiatives in real-time. Established UI best practices for the team, mentored developers on Constellation architecture, and implemented design-thinking driven workflows that improved stakeholder adoption by 40%.",
    "skills": ["Constellation", "Design Thinking", "App Studio", "Design Templates", "Figma", "Reporting"],
    "featured": true
  },
  {
    "client": "New Zealand Transport Digital Services",
    "industry": "Government",
    "role": "Lead UI Developer",
    "start": "2021-11-08",
    "end": "2023-10-31",
    "platform": "Pega 8.6",
    "description": "Served as the sole point of contact for all UI requirements across multiple initiatives, including building an enterprise UI layer, public-facing portals, and internal systems. Delivered responsive, accessible solutions with WCAG AA compliance, reducing accessibility-related defects by 90%. Introduced reusable design templates and portal frameworks that shortened future development cycles by 25%.",
    "skills": ["Pega Government Platform", "Theme Cosmos", "App Studio", "Design Templates", "Accessibility", "WCAG AA", "HTML", "CSS", "JavaScript", "jQuery", "PDF Generation", "Figma"],
    "featured": true
  },
  {
    "client": "Australian Government Strata Bond Lodgement",
    "industry": "Government",
    "role": "UI Developer",
    "start": "2021-05-24",
    "end": "2021-08-12",
    "platform": "Pega 8.6",
    "description": "Designed and developed a custom portal for strata bond lodgement, ensuring it met brand and accessibility guidelines. Improved form usability and reduced submission errors by 20% through intuitive UI patterns and responsive design. Reduced tenant complaint resolution time by 35%.",
    "skills": ["Pega Government Platform", "Pega Mobile Client", "HTML", "CSS", "JavaScript", "jQuery", "Accessibility", "WCAG AA"],
    "featured": true
  },
  {
    "client": "Community Support Case Management",
    "industry": "Other Services",
    "role": "UI Developer",
    "start": "2020-11-23",
    "end": "2021-05-10",
    "platform": "Pega 8.4.2",
    "description": "Developed a Pega Customer Service application for a community support organisation, including dashboards and case workflows. Integrated with House360 to streamline residential program management, reducing manual tracking by 50%.",
    "skills": ["Pega Customer Service", "Cloud Migration"],
    "featured": true
  },
  {
    "client": "US Healthcare Equipment & Services Company",
    "subtitle": "Order Management and Fulfilment System",
    "startDate": "Oct 2019",
    "endDate": "Apr 2020",
    "description": "Built a Pega-based order and delivery tracking platform for healthcare equipment, reducing order processing delays by 35%. Automated compliance checks and integrated with inventory systems, ensuring equipment delivery met strict healthcare regulatory timelines.",
    "techStack": ["Pega Platform", "Pega Integration Services", "SOAP APIs", "SQL Server", "Agile"],
    "featured": true
  },
  {
    "client": "Fortune 500 Consumer Goods Leader",
    "industry": "Manufacturing and High Technology",
    "role": "UI Developer",
    "start": "2020-01-27",
    "end": "2020-06-30",
    "platform": "Pega 8.3.4",
    "description": "Built a citizen-developer friendly Pega Customer Service application with reusable layouts and UX-consistent portals operating across 80+ countries. Implemented Pega Knowledge Management for faster case resolution and reduced repetitive development work.",
    "skills": ["Pega Customer Service", "Pega Knowledge", "JavaScript"],
    "featured": true
  },
  {
    "client": "Leading Australian Telecommunications Provider",
    "subtitle": "Customer Experience Transformation",
    "startDate": "May 2020",
    "endDate": "Dec 2020",
    "description": "Worked on accessibility",
    "techStack": ["Pega Platform", "Pega Customer Service", "Pega Chat", "REST APIs", "Agile"],
    "featured": false
  },
  {
    "client": "International Airline Carrier (Asia)",
    "subtitle": "Crew Scheduling and Compliance System",
    "startDate": "Jul 2017",
    "endDate": "Dec 2017",
    "description": "Mentored the developers to pace them up with Pega UI best practices.",
    "techStack": ["Pega Platform", "Pega Decisioning", "Oracle DB", "SOAP APIs"],
    "featured": false
  },
];