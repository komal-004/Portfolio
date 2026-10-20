import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Skills from '../sections/Skills.jsx';
import Projects from '../sections/Projects.jsx';
import Resume from '../sections/Resume.jsx';
import Journey from '../sections/Journey.jsx';
import Certifications from '../sections/Certifications.jsx';
import Contact from '../sections/Contact.jsx';

export default function Home() {
  const { hash } = useLocation();

  // jump to a section when arriving with /#section
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Journey />
      <Certifications />
      <Contact />
    </>
  );
}
