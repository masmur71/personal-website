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
          <div>
            <p className="eyebrow">● INFORMATION SYSTEMS GRADUATE</p>
            <h1>Masmur Toloni<br/>Harefa<span>.</span></h1>
            <p className="intro">Building applications.<br/>Making sense of data.</p>
            <p className="muted description">Information Systems graduate who builds web applications and data analysis projects.</p>
            <div className="actions">
              <a className="button primary" href="#projects">View projects ↘</a>
              <button className="button" disabled>Download resume ↓</button>
            </div>
            <p className="note">RESUME PDF / COMING SOON</p>
          </div>
        </section>
        <section id="skills" className="skills-section" aria-labelledby="skills-title">
          <div className="heading">
            <div>
              <p className="eyebrow">01 / TOOLKIT</p>
              <h2 id="skills-title">Skills backed by practice.</h2>
            </div>
            <p className="muted">Tools I reach for when building, analysing and shipping.</p>
          </div>
          <SkillCarousel />
        </section>
        <section id="projects">
          <div className="heading">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>Projects, with context.</h2>
            </div>
            <p className="muted">Three spaces for work in progress.<br/>Real case studies are on the way.</p>
          </div>
          <div className="projects">
            {projects.map((p, i) => (
              <article key={p.title}>
                <div className="preview" aria-label="Conceptual placeholder graphic">
                  <small>PREVIEW / PLACEHOLDER</small>
                  {i === 0 ? (
                    <div className="window"><div>— — —</div><p/><p/><p/></div>
                  ) : i === 1 ? (
                    <div className="bars">{[35, 60, 45, 80, 65, 95, 75].map((h, n) => <i key={n} style={{ height: h + "%" }}/>)}</div>
                  ) : (
                    <div className="plus">+</div>
                  )}
                  <span className="index">0{i + 1}</span>
                </div>
                <div className="copy">
                  <p className="eyebrow">{p.track}</p>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.summary}</p>
                  <div className="tags"><span>Stack TBD</span><span>Details pending</span></div>
                  <details>
                    <summary>Case study outline +</summary>
                    <dl>
                      {["Problem", "My role (solo)", "Key decisions", "Result / findings", "GitHub & demo / visual proof"].map((t) => (
                        <div key={t}><dt>{t}</dt><dd>To be added with verified project details.</dd></div>
                      ))}
                    </dl>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="about">
          <div>
            <p className="eyebrow">03 / BEHIND THE WORK</p>
            <h2>At the intersection of<br/>systems and questions.</h2>
          </div>
          <div>
            <p>I’m Masmur, an Information Systems fresh graduate exploring entry-level opportunities in software engineering and data analytics.</p>
            <p className="muted">This portfolio is taking shape. The projects above are placeholders; completed work, decisions, and outcomes will be documented as they become available.</p>
            <p className="note placeholder">PORTRAIT &amp; EXTENDED BIO / TO BE ADDED</p>
          </div>
        </section>
        <section id="contact">
          <p className="eyebrow">04 / GET IN TOUCH</p>
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
