import Reveal from './Reveal.jsx';

export default function SectionHeading({ number, title, intro }) {
  return (
    <Reveal className="section-heading">
      <span className="section-number">{number}</span>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}
