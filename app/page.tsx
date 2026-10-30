import { projects } from "../lib/content";
import SkillCarousel from "./skill-carousel";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header>
        <a className="brand" href="#" aria-label="Masmur home">
          <img src="/logo.png" alt="" width="30" height="30" /> MTH <small>PORTFOLIO / V.01</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact ↗</a>
        </nav>
      </header>
      <main id="main">
        <section className="hero">
          <h1>Masmur Toloni<br/>Harefa<span className="cursor" aria-hidden="true" /></h1>
          <p className="intro">Information Systems graduate building web applications and data analysis projects.</p>
          <div className="actions">
            <a className="button primary" href="#projects">View projects</a>
            <button className="button" disabled aria-describedby="resume-status">Download resume</button>
            <span id="resume-status" className="sr-only">The resume PDF is not available yet.</span>
          </div>
        </section>
        <section id="skills" className="skills-section" aria-label="Skills">
          <SkillCarousel />
        </section>
        <section id="projects">
          <div className="heading">
            <h2>Projects, with context.</h2>
            <p className="muted">Selected work in software engineering<br/>and data analytics.</p>
          </div>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.title}>
                <div className="copy">
                  <p className="eyebrow">{p.track}</p>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.summary}</p>
                  <div className="project-result"><strong>{p.metric}</strong><span>{p.metricNote}</span></div>
                  <div className="tags">{p.stack.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <a className="project-link" href={p.repo} target="_blank" rel="noreferrer" aria-label={`View ${p.title} on GitHub`}>View on GitHub ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="about">
          <div>
            <h2>At the intersection of<br/>systems and questions.</h2>
          </div>
          <div>
            <p>I’m Masmur, an Information Systems fresh graduate exploring entry-level opportunities in software engineering and data analytics.</p>
            <p className="muted">My projects explore practical problems through software, data, and careful investigation.</p>
            <p className="note placeholder">PORTRAIT &amp; EXTENDED BIO / TO BE ADDED</p>
          </div>
        </section>
        <section id="contact">
          <h2 className="contact-title">Let’s build what’s next<span>.</span></h2>
          <p className="muted">Open to entry-level software engineering and data analytics roles.</p>
          <div className="contacts">
            <a href="mailto:masmurharefa03@gmail.com">Email<small>masmurharefa03@gmail.com</small></a>
            <a href="https://github.com/masmur71" target="_blank" rel="noreferrer">GitHub<small>github.com/masmur71</small></a>
            <a href="https://linkedin.com/in/masmurharefa" target="_blank" rel="noreferrer">LinkedIn<small>linkedin.com/in/masmurharefa</small></a>
          </div>
        </section>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Masmur Toloni Harefa</span>
        <span>BUILT WITH INTENT. STILL IN PROGRESS.</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}
