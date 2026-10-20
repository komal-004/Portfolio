import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const techs = useMemo(() => ['All', ...new Set(projects.flatMap((p) => p.tech))], []);
  const visible = projects.filter((p) => filter === 'All' || p.tech.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading number="03" title="Projects" intro="Things I have built, from internship work to my own experiments." />

        <div className="filters" role="group" aria-label="Filter projects by technology">
          {techs.map((t) => (
            <button
              key={t}
              className={`chip ${filter === t ? 'chip-active' : ''}`}
              onClick={() => setFilter(t)}
              aria-pressed={filter === t}
            >
              {t}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                layout
                key={p.name}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <span className="project-index">{String(projects.indexOf(p) + 1).padStart(2, '0')}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul className="badges">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                  <a href={p.live} target="_blank" rel="noreferrer">Live demo ↗</a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
