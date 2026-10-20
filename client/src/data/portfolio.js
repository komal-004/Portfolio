
 // All the text on the site lives here. Edit this file to update your portfolio.

export const API_URL = (
  import.meta.env.VITE_API_URL || 'http://localhost:5000'
).replace(/\/$/, '');

export const profile = {
  name: 'Komal',
  roles: ['Backend Developer', 'Full-Stack Developer', 'Blockchain Enthusiast'],
  designation: 'Backend Developer Intern at Saffron Synaptiq',

  bio: [
    'I am a student at JK Lakshmipat University and an early-stage developer with hands-on experience across full-stack and blockchain work.',
    'I completed my Practice School-I internship at Saffron Synaptiq, where I worked on the backend of LinkedCRM, a CRM platform for LinkedIn marketing campaigns.',
  ],

  location: 'India',
  status: 'Student · Intern',
  email: 'komaljangid0909@gmail.com',
  photo: '/profile.jpg',

  github: 'https://github.com/komal-004',
  linkedin: 'https://www.linkedin.com/in/komal-jangid-74363831a/',
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
      { name: 'Express.js', level: 60 },
      { name: 'MongoDB', level: 70 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MySQL', level: 70 },
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'Git & GitHub', level: 75 },
      { name: 'Docker', level: 60 },
      { name: 'Swagger / OpenAPI', level: 70 },
      { name: 'JWT Authentication', level: 65 },
    ],
  },
];

export const levelLabel = (n) =>
  n >= 80 ? 'Advanced' : n >= 65 ? 'Intermediate' : 'Learning';

export const projects = [
  {
    name: 'CRM Digital Marketing',
    description:
      'A CRM platform for managing LinkedIn marketing campaigns and generating leads. Worked on backend functionality using Node.js and Express, JWT authentication, LinkedIn OAuth integration, and Swagger/OpenAPI documentation for API routes.',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Swagger'],
    github: '#',
    live: '#',
  },
  {
    name: 'Smart Public Transport & Ticketing System',
    description:
      'Implemented backend functionality using JavaScript with MySQL integration for secure data storage, helping improve passenger convenience, transparency, and efficiency in public transport services.',
    tech: ['JavaScript', 'MySQL', 'React', 'HTML', 'CSS'],
    github: 'https://github.com/komal-004/Smart-Public-Transport-and-Ticketing-System.git',
    live: '#',
  },
  {
    name: 'Face Detection',
    description:
      'Built a face detection application using Python and computer vision techniques to identify faces and draw real-time bounding boxes around detected faces.',
    tech: ['Python', 'Computer Vision', 'OpenCV'],
    github: '#',
    live: '#',
  },
  {
    name: 'Stock Price Prediction',
    description:
      'Developed a Python-based stock price prediction application using Linear Regression on historical stock data.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Linear Regression'],
    github: '#',
    live: '#',
  },
];

export const timeline = [
  {
    period: 'Practice School-I',
    title: 'Backend Developer Intern',
    place: 'Saffron Synaptiq',
    text: 'Worked on the LinkedCRM project, contributing to backend development using Node.js and Express, authentication, LinkedIn OAuth integration, and Swagger/OpenAPI documentation.',
    type: 'work',
  },
  {
    period: 'Ongoing',
    title: 'Undergraduate Student',
    place: 'JK Lakshmipat University',
    text: 'Pursuing a B.Tech in Computer Science and Engineering while developing skills in backend development, full-stack technologies, and software engineering.',
    type: 'education',
  },
];

export const certifications = [];

export const achievements = [
  'Contributed to backend development for the LinkedCRM project during my Practice School-I internship at Saffron Synaptiq.',
  'Created Swagger/OpenAPI documentation for LinkedCRM backend API routes.',
];
