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
      { name: 'React.js', level: 10 },
      { name: 'TypeScript', level: 40 },
      { name: 'JavaScript', level: 60 },
      { name: 'HTML & CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 60 },
    
      { name: 'MongoDB', level: 70 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'Git & GitHub', level: 75 },
      { name: 'Docker', level: 60 },
      
      { name: 'Swagger / OpenAPI', level: 70 },
    ],
  },
];

export const levelLabel = (n) => (n >= 80 ? 'Advanced' : n >= 65 ? 'Intermediate' : 'Learning');

// TODO: add your GitHub repo and live demo links for each project.
export const projects = [
  {
    name: 'CRM Digital Marketing',
    description:
      'A full-stack CRM platform for managing LinkedIn marketing campaigns and generating leads. I work on the backend and wrote the Swagger/OpenAPI documentation for its API routes.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    name: 'Smart Public Transport & Ticketing System ',
    description:
      'Implemented backend functionality using JavaScript with MySQL integration for secure data storage, while enhancing passenger convenience, transparency and efficiency in public transport services.',
    tech: ['React', 'PostgreSQL', 'HTML', 'CSS'],
    github: '#',
    live: '#',
  },
  {
    name: 'Face Detection',
    description:
      'Gained hands-on experience in computer vision and image processing by drawing real-time bounding boxes around detected faces.',
    tech: ['Python'],
    github: '#',
    live: '#',
  },
  {
    name: 'Stock Price Prediction',
    description:
      'Developed a Python-based stock price prediction application using Linear Regression on historical data.'

  },
];

export const timeline = [
  {
    period: 'Completed',
    title: 'Backend Developer Intern',
    place: 'Saffron Synaptiq',
    text: 'Practice School-I internship. Backend developer on the LinkedCRM project, working with Node.js, Express and PostgreSQL.',
    type: 'work',
  },
  {
    period: 'Ongoing',
    title: 'Undergraduate Student',
    place: 'JK Lakshmipat University',
    text: 'Studying while building full-stack.',
    type: 'education',
  },
];

export const certifications = [
  { title: 'Certificate ka naam', platform: 'Coursera', link: '', image: '' },
];

export const achievements = [
  'Backend developer on the LinkedCRM project during my Practice School-I internship at Saffron Synaptiq',
  'Wrote Swagger/OpenAPI documentation covering all LinkedCRM backend routes',
  
];
