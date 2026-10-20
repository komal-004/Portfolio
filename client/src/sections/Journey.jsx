import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { timeline } from '../data/portfolio.js';

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <SectionHeading number="05" title="Education & experience" />

        <div className="timeline">
          {timeline.map((t, i) => (
            <Reveal key={t.title} x={i % 2 === 0 ? -40 : 40} y={0} className={`timeline-item ${t.type}`}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <span className="timeline-period">{t.period}</span>
                <h3>{t.title}</h3>
                <p className="timeline-place">{t.place}</p>
                <p>{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
