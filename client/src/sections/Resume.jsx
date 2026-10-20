import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { cvLinks } from '../components/DownloadButtons.jsx';

export default function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <SectionHeading number="04" title="Resume" intro="Take a copy with you. Pick whichever format suits you." />

        <Reveal className="resume-box">
          <div className="resume-option">
            <span className="file-tag">PDF</span>
            <p>Best for reading and printing.</p>
            <a className="btn btn-primary" href={cvLinks.pdf} download>Download PDF</a>
          </div>
          <div className="resume-divider" aria-hidden="true" />
          <div className="resume-option">
            <span className="file-tag">DOCX</span>
            <p>Editable Word version.</p>
            <a className="btn btn-ghost" href={cvLinks.docx} download>Download Word</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
