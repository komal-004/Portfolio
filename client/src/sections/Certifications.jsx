import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { certifications, achievements } from '../data/portfolio.js';

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <SectionHeading number="06" title="Certifications & achievements" />

        <div className="cert-grid">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <a className="cert-card" href={c.link} target="_blank" rel="noreferrer">
                <div className="cert-thumb">
                  {c.image ? <img src={c.image} alt={`${c.title} certificate`} /> : <span>{c.platform.charAt(0)}</span>}
                </div>
                <h3>{c.title}</h3>
                <p>{c.platform}</p>
                <span className="cert-link">View certificate ↗</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="achievements">
          <h3>Achievements</h3>
          <ul>
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
