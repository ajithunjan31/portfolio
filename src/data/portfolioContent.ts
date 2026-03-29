/**
 * Personalize your site here. The template is from
 * https://github.com/akashrmalhotra/3d-portfolio
 */

export const pageTitle = "Ajit Singh — Technical support & full-stack focus";

export const nav = {
  initials: "AS",
  linkedinUrl: "https://www.linkedin.com/in/ajit-singh-8b43961a2",
  linkedinLabel: "linkedin.com/in/ajit-singh-8b43961a2",
};

export const landing = {
  hello: "Hello! I'm",
  nameLine1: "AJIT",
  nameLine2: "SINGH",
  roleHeading: "Developer &",
  roleWordA: "Frontend",
  roleWordB: "Backend",
};

export const about = {
  paragraphs: [
    "I am Ajit Singh. I currently work as a Technical Support Advisor at Concentrix, where I help resolve technical issues, explain solutions clearly, and stay calm and structured when priorities stack up.",
    "Outside of that role, I am growing as a full-stack developer—HTML, CSS, JavaScript, React, Node.js, MongoDB, MySQL, SQL, Python, and database management—through hands-on projects including an e-commerce site and a Spotify-inspired clone. Demo links will go here once they are live.",
  ],
};

export type CareerJob = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const careerJobs: CareerJob[] = [
  {
    role: "Technical Support Advisor",
    company: "Concentrix",
    period: "NOW",
    description:
      "Provide technical support to customers and users: troubleshoot products and services, document issues and resolutions, follow processes for quality and consistency, and communicate clearly so problems get solved efficiently.",
  },
];

export type WhatCard = {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
};

export const whatIDoCards: WhatCard[] = [
  {
    title: "FRONTEND & UI",
    subtitle: "Interfaces users actually use",
    body:
      "I build responsive, accessible layouts and interactive experiences using semantic HTML, modern CSS, JavaScript, and React—focused on performance and maintainable component structure.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "BACKEND & DATA",
    subtitle: "APIs, databases, and solid foundations",
    body:
      "I work with Node.js for server-side logic and APIs, MongoDB and MySQL for storage, and SQL plus broader database management practices to keep data consistent and queryable. I use Python when the problem suits it.",
    tags: ["NodeJS", "MongoDB", "SQL", "MySQL", "Python", "Database Management"],
  },
];

export type WorkProject = {
  title: string;
  category: string;
  tools: string;
  image: string;
  /** Set when you have a live demo or repo URL. */
  link?: string;
};

export const workProjects: WorkProject[] = [
  {
    title: "E-Commerce Website",
    category: "Full-stack commerce experience",
    tools:
      "Product catalog, cart flow, checkout-style UX, React, Node.js, MongoDB or MySQL, REST APIs",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Spotify Clone",
    category: "Music streaming UI & playback patterns",
    tools:
      "React, JavaScript, responsive layout, audio UI patterns, Node.js where needed for APIs or data",
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=1200&q=80&auto=format&fit=crop",
  },
];

export const contact = {
  linkedinUrl: "https://www.linkedin.com/in/ajit-singh-8b43961a2",
  linkedinHandle: "ajit-singh-8b43961a2",
  githubUrl: "https://github.com/ajithunjan31",
  youtubeUrl: "",
  instagramUrl: "",
  education: [
    "Add your degree, school, and years here when you want them on the site.",
  ],
  footerCreditName: "Ajit Singh",
  footerYear: new Date().getFullYear(),
};

/** Tech stack 3D spheres — paths under public/images/ when you add webp assets. */
export const techStackImages = [
  "/images/javascript.webp",
  "/images/react2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
];

export const resumePath = "/Ajit_Singh_Resume.pdf";
