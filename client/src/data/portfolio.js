// All the text on the site lives here. Edit this file to update your portfolio.

export const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');

export const profile = {
  name: 'Komal',
  roles: ['Backend Developer', 'Full-Stack Developer', 'Blockchain Enthusiast'],
  designation: 'Backend Developer Intern at Saffron Synaptiq',
  bio: [
    'I am a student at JK Lakshmipat University and an early-stage developer with hands-on experience across full-stack and blockchain work.',
    'Right now I am completing my Practice School-I internship at Saffron Synaptiq, where I work on the backend of LinkedCRM, a CRM platform for LinkedIn marketing campaigns.',
  ],
  location: 'India',
  status: 'Student · Intern',
  email: 'komaljangid0909@gmail.com',
  photo: '"C:/Users/004ko/OneDrive/pictures/WhatsApp Image 2024-11-12 at 21.22.58_f8bc3e5a.jpg"', // put your photo in client/public/profile.jpg
  github: 'https://github.com/komal-004/Portfolio', // TODO: your GitHub profile
  linkedin: 'https://www.linkedin.com/in/komal-jangid-74363831a/?isSelfProfile=true', // TODO: your LinkedIn profile
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 80 },
      { name: 'TypeScript', level: 70 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML & CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 70 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'Git & GitHub', level: 75 },
      { name: 'Docker', level: 60 },
      { name: 'Solidity', level: 60 },
      { name: 'Swagger / OpenAPI', level: 70 },
    ],
  },
];

export const levelLabel = (n) => (n >= 80 ? 'Advanced' : n >= 65 ? 'Intermediate' : 'Learning');

// TODO: add your GitHub repo and live demo links for each project.
export const projects = [
  {
    name: 'LinkedCRM',
    description:
      'A full-stack CRM platform for managing LinkedIn marketing campaigns and generating leads. I work on the backend and wrote the Swagger/OpenAPI documentation for its API routes.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    name: 'AntiGravity',
    description:
      'An independent full-stack blockchain system with MetaMask authentication, smart contracts, IPFS storage and AI features, containerised with Docker.',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Solidity', 'IPFS', 'Docker'],
    github: '#',
    live: '#',
  },
  {
    name: 'MediTrace',
    description:
      'A beginner blockchain project built around a Solidity smart contract, compiled and deployed to a local network with Hardhat.',
    tech: ['Solidity', 'Hardhat'],
    github: '#',
    live: '#',
  },
];

export const timeline = [
  {
    period: 'Present',
    title: 'Backend Developer Intern',
    place: 'Saffron Synaptiq',
    text: 'Practice School-I internship. Backend developer on the LinkedCRM project, working with Node.js, Express and PostgreSQL.',
    type: 'work',
  },
  {
    period: 'Ongoing',
    title: 'Undergraduate Student',
    place: 'JK Lakshmipat University',
    text: 'Studying while building full-stack and blockchain projects on the side.',
    type: 'education',
  },
];

// TODO: replace with your own certificates (title, platform, image or verified link).
export const certifications = [
  { title: 'Certificate Title 1', platform: 'Coursera', link: '#', image: '' },
  { title: 'Certificate Title 2', platform: 'NPTEL', link: '#', image: '' },
  { title: 'Certificate Title 3', platform: 'LinkedIn Learning', link: '#', image: '' },
];

export const achievements = [
  'Backend developer on the LinkedCRM project during my Practice School-I internship at Saffron Synaptiq',
  'Wrote Swagger/OpenAPI documentation covering all LinkedCRM backend routes',
  'Deployed a Solidity smart contract locally using Hardhat',
];
