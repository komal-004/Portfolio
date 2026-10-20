import { motion } from 'framer-motion';
import { profile } from '../data/portfolio.js';
import { cvLinks } from '../components/DownloadButtons.jsx';
import useTypewriter from '../hooks/useTypewriter.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="grid-lines" />
      </div>

      <motion.div className="container hero-inner" variants={container} initial="hidden" animate="show">
        <motion.p className="eyebrow" variants={item}>Hello, I'm</motion.p>
        <motion.h1 className="hero-name" variants={item}>{profile.name}</motion.h1>
        <motion.p className="hero-role" variants={item}>
          <span>{typed}</span>
          <span className="cursor" aria-hidden="true">|</span>
        </motion.p>
        <motion.p className="hero-designation" variants={item}>{profile.designation}</motion.p>

        <motion.div className="hero-cta" variants={item}>
          <a className="btn btn-primary" href={cvLinks.pdf} download>
            Download CV
          </a>
          <a
            className="btn btn-ghost"
            href="/#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View projects
          </a>
        </motion.div>
      </motion.div>

      <div className="scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
