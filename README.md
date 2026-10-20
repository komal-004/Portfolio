# Personal Portfolio Website

This is my personal portfolio, built as the MERN Stack course assignment. It has a React frontend, an Express backend and a MongoDB database. The site shows who I am, my skills and projects, and lets visitors download my CV or send me a message through a contact form.

- **Live site:** https://portfolio-theta-rust-lo1ql2t132.vercel.app
- **Backend API:** https://portfolio-2-0vtm.onrender.com

The backend is hosted on Render's free plan, so the first request after a long gap (a CV download or the contact form) can take around 30 to 50 seconds while the server wakes up.

## What the site has

- Hero section with a typewriter effect and a Download CV button
- About section with my photo, location and current status
- Skills grouped into Frontend, Backend and Tools, with animated bars and a hover tooltip showing the level
- Projects shown as cards with tech badges, GitHub and live links, and a filter by technology
- Resume download in both PDF and Word (.docx), served from the Express backend
- Education and experience timeline
- Certifications and achievements
- Contact form that saves messages to MongoDB
- Dark and light mode toggle (the choice is remembered)
- Responsive layout for mobile, tablet and desktop
- Scroll animations using Framer Motion

## Tech stack

- **Frontend:** React 18, React Router, Framer Motion, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)

## Folder structure

```
Portfolio/
├── client/                React app
│   ├── public/            favicon, profile photo
│   └── src/
│       ├── components/    navbar, footer, reusable pieces
│       ├── sections/      Hero, About, Skills, Projects, ...
│       ├── pages/         Home and 404 page
│       ├── hooks/         theme toggle, typewriter effect
│       └── data/          portfolio.js (all the text content)
└── server/                Express API
    ├── models/            Mongoose schema for messages
    ├── routes/            contact and CV routes
    ├── files/             Komal_CV.pdf and Komal_CV.docx
    └── index.js
```

## Running it locally

You need Node.js (v18 or newer) and a MongoDB connection string. I used a free cluster on MongoDB Atlas.

**1. Clone the repository**

```bash
git clone https://github.com/komal-004/Portfolio.git
cd Portfolio
```

**2. Start the backend**

```bash
cd server
npm install
```

Copy `.env.example` to `.env` and fill in your own values (see the table below), then run:

```bash
npm run dev
```

The server runs on http://localhost:5000 and prints "MongoDB connected" when the database connection works.

**3. Start the frontend** (in a second terminal)

```bash
cd client
npm install
```

Copy `.env.example` to `.env`, then run:

```bash
npm run dev
```

The site opens at http://localhost:5173.

## Environment variables

`server/.env`

| Variable | What it is for |
| --- | --- |
| `PORT` | Port the API runs on (5000 by default) |
| `MONGODB_URI` | MongoDB connection string |
| `CLIENT_URL` | Frontend URL that is allowed to call the API (CORS) |

`client/.env`

| Variable | What it is for |
| --- | --- |
| `VITE_API_URL` | URL of the backend (for local use: http://localhost:5000) |

The `.env` files are listed in `.gitignore`, so my database credentials are not in this repository. Only the `.env.example` files are committed.

## API routes

| Method | Route | What it does |
| --- | --- | --- |
| POST | `/api/contact` | Saves a message (name, email, message) in MongoDB |
| GET | `/api/cv/pdf` | Downloads my CV as a PDF |
| GET | `/api/cv/docx` | Downloads my CV as a Word file |

## Deployment

- **Backend (Render):** root directory `server`, build command `npm install`, start command `npm start`. `MONGODB_URI` and `CLIENT_URL` are set in Render's environment settings.
- **Frontend (Vercel):** root directory `client`, build command `npm run build`, output directory `dist`. `VITE_API_URL` is set to the Render URL.
- **Database:** MongoDB Atlas, with network access opened so that Render can connect.

## Changing the content

All the text on the site (bio, skills, projects, certificates and timeline) is in `client/src/data/portfolio.js`. My photo goes in `client/public/profile.jpg`. The CV files can be replaced inside `server/files/` as long as the file names stay `Komal_CV.pdf` and `Komal_CV.docx`.

## Author

Komal, student at JK Lakshmipat University.

GitHub: https://github.com/komal-004
