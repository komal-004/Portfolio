import { motion } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { skills, levelLabel } from '../data/portfolio.js';

function SkillBar({ name, level, index }) {
  return (
    <div className="skill" tabIndex={0}>
      <div className="skill-top">
        <span>{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-track" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={name}>
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="tooltip" role="tooltip">{levelLabel(level)} · {level}%</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHeading number="02" title="Skills" intro="The tools I work with, grouped by where they sit in the stack." />

        <div className="skills-grid">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.1} className="skill-card">
              <h3>{group.category}</h3>
              {group.items.map((s, i) => (
                <SkillBar key={s.name} {...s} index={i} />
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
