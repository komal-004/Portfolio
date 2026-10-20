# Personal Portfolio (MERN)

A full-stack personal portfolio built with the MERN stack: a React single-page frontend, an Express REST API, and MongoDB (Mongoose) for storing contact-form messages.

**Live site:** _add your Vercel/Netlify link here_
**API:** _add your Render/Railway link here_

## Features

- Animated hero with typewriter effect and a Download CV button
- About, Skills (animated bars with tooltips), Projects (cards with tech filter), Education & Experience timeline, Certifications & Achievements
- Resume download in **PDF** and **DOCX**, served by an Express route
- Contact form saved to MongoDB through `POST /api/contact`
- Dark / light mode toggle (remembers your choice)
- Fully responsive, scroll-triggered animations with Framer Motion

## Tech stack

| Part | Tools |
| --- | --- |
| Frontend | React 18, React Router, Framer Motion, Vite |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |

## Folder structure

```
/client   React app (Vite)
/server   Express API
  /models   Mongoose schemas
  /routes   contact + cv routes
  /files    Komal_CV.pdf, Komal_CV.docx
  /scripts  generateCV.js
```

## Run locally

Requirements: Node.js 18+ and a MongoDB connection string (a free MongoDB Atlas cluster works).

```bash
# 1. Backend
cd server
npm install
cp .env.example .env      # then put your real MONGODB_URI in .env
npm run dev               # runs on http://localhost:5000

# 2. Frontend (new terminal)
cd client
npm install
cp .env.example .env      # VITE_API_URL=http://localhost:5000
npm run dev               # runs on http://localhost:5173
```

## Environment variables

`server/.env`

| Name | Purpose |
| --- | --- |
| `PORT` | Port for the API (default 5000) |
| `MONGODB_URI` | MongoDB connection string |
| `CLIENT_URL` | Allowed frontend origin(s) for CORS, comma separated |

`client/.env`

| Name | Purpose |
| --- | --- |
| `VITE_API_URL` | Base URL of the deployed backend |

`.env` files are listed in `.gitignore` and must never be committed.

## API

| Method | Route | Description |
| --- | --- | --- |
| POST | `/api/contact` | Saves `{ name, email, message }` to MongoDB |
| GET | `/api/cv/pdf` | Downloads the PDF resume |
| GET | `/api/cv/docx` | Downloads the Word resume |

## Updating the content

- All text on the site (bio, skills, projects, certificates, timeline) is in `client/src/data/portfolio.js`.
- Put your photo at `client/public/profile.jpg`.
- To change the resume, edit `server/scripts/generateCV.js` and run `npm run generate-cv` inside `/server`, or simply replace the two files in `server/files/` (keep the same names).

## Deployment

1. **Backend (Render or Railway):** root directory `server`, build command `npm install`, start command `npm start`. Add `MONGODB_URI` and `CLIENT_URL` (your frontend URL) as environment variables.
2. **Frontend (Vercel or Netlify):** root directory `client`, build command `npm run build`, output directory `dist`. Add `VITE_API_URL` pointing to the deployed backend.
