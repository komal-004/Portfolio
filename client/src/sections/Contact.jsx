import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { API_URL, profile } from '../data/portfolio.js';

const empty = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ state: 'idle', text: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', text: '' });
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || 'Something went wrong.');
      setStatus({ state: 'success', text: data.message });
      setForm(empty);
    } catch (err) {
      setStatus({ state: 'error', text: err.message || 'Could not reach the server.' });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading number="07" title="Get in touch" intro="Have a question or an opportunity? Send me a message." />

        <div className="contact-grid">
          <Reveal x={-30} y={0} className="contact-info">
            <p>You can also reach me directly:</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <ul>
              <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
            </ul>
          </Reveal>

          <Reveal x={30} y={0} delay={0.1}>
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <label>
                Name
                <input name="name" value={form.name} onChange={onChange} required maxLength={100} autoComplete="name" />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={onChange} required maxLength={150} autoComplete="email" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" value={form.message} onChange={onChange} required maxLength={2000} />
              </label>

              <button className="btn btn-primary" type="submit" disabled={status.state === 'loading'}>
                {status.state === 'loading' ? 'Sending…' : 'Send message'}
              </button>

              <p className={`form-status ${status.state}`} role="status" aria-live="polite">
                {status.text}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
