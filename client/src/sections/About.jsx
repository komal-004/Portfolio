import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { profile } from '../data/portfolio.js';

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading number="01" title="About me" />

        <div className="about-grid">
          <Reveal x={-40} y={0} className="about-photo-wrap">
            <div className="about-photo">
              {photoFailed ? (
                <span className="photo-fallback">{profile.name.charAt(0)}</span>
              ) : (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  onError={() => setPhotoFailed(true)}
                />
              )}
            </div>
          </Reveal>

          <Reveal x={40} y={0} delay={0.1}>
            {profile.bio.map((p) => (
              <p key={p} className="about-text">{p}</p>
            ))}

            <dl className="facts">
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{profile.status}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
