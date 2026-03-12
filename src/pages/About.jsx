import { Link } from 'react-router-dom'

const VALUES = [
  {
    icon: '🚀',
    title: 'Innovation',
    description:
      'We constantly explore emerging technologies to deliver forward-thinking solutions that keep our clients ahead of the curve.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description:
      'We build long-term relationships based on transparency, honest communication, and delivering on our commitments.',
  },
  {
    icon: '⭐',
    title: 'Excellence',
    description:
      'Every line of code, every design decision, every interaction reflects our relentless commitment to quality.',
  },
  {
    icon: '🌍',
    title: 'Client Focus',
    description:
      'Your success is our success. We take time to deeply understand your business before writing a single line of code.',
  },
  {
    icon: '🔒',
    title: 'Security',
    description:
      'Security is never an afterthought. We embed best practices at every layer of every solution we deliver.',
  },
  {
    icon: '♻️',
    title: 'Sustainability',
    description:
      'We build maintainable, scalable software that grows with your business and stands the test of time.',
  },
]

export default function About() {
  return (
    <>
      {/* ─── PAGE HERO ─────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="tag-pill dark" style={{ marginBottom: '18px' }}>Our Story</div>
          <h1>About <span className="grad">Aswasti</span> Technology</h1>
          <p>
            A modern software company on a mission to empower businesses through
            innovative digital solutions.
          </p>
        </div>
      </section>

      {/* ─── COMPANY INTRO ─────────────────────────────── */}
      <section className="about-intro-sec">
        <div className="container">
          <div className="about-grid">
            <div className="about-text reveal-left">
              <div className="tag-pill light">Who We Are</div>
              <h2 className="section-title">
                Driving Digital <span className="grad">Innovation</span> from Odisha
              </h2>
              <p>
                Aswasti Technology is a modern software company headquartered in
                Odisha, India. We specialize in building high-quality digital
                solutions — from responsive web applications and feature-rich
                mobile apps to scalable cloud infrastructure and strategic IT
                consulting.
              </p>
              <p>
                Founded with the belief that technology should be accessible,
                effective, and beautifully crafted, we have grown into a trusted
                partner for businesses of all sizes. Our diverse team of
                experienced engineers, designers, and consultants collaborate
                closely with clients to transform complex challenges into elegant
                digital products.
              </p>
              <p>
                Whether you are a startup launching your first product or an
                enterprise modernizing legacy systems, Aswasti Technology brings
                the expertise, passion, and commitment needed to make your vision
                a reality.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-primary">Our Services →</Link>
                <Link to="/contact" className="btn btn-outline-dark">Get In Touch</Link>
              </div>
            </div>

            <div className="about-visual-card reveal-right" data-delay="150">
              <div className="about-visual-icon">🏢</div>
              <h3>Aswasti Technology</h3>
              <p>Delivering digital excellence since 2019. Based in Odisha, serving clients across India and beyond.</p>
              <div className="about-stat-grid">
                {[['100+','Projects'],['50+','Clients'],['15+','Experts'],['5+','Years']].map(([num, label]) => (
                  <div key={label} className="about-stat">
                    <strong>{num}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ──────────────────────────── */}
      <section className="mv-sec">
        <div className="container">
          <div className="section-header reveal">
            <div className="tag-pill light">Our Direction</div>
            <h2 className="section-title">Mission &amp; Vision</h2>
          </div>
          <div className="mv-cards">
            <div className="mv-card reveal">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses of all sizes with innovative, reliable, and
                cost-effective software solutions that drive measurable growth and
                lasting competitive advantage. We are committed to delivering
                technology that is not only powerful, but also intuitive —
                enabling our clients to focus on what they do best.
              </p>
            </div>
            <div className="mv-card reveal" data-delay="200">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted digital transformation partner in
                India, recognized for technical excellence, creative problem-solving,
                and an unwavering commitment to client success. We envision a
                future where every business — regardless of size — can harness
                the full power of technology to achieve extraordinary outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ───────────────────────────────── */}
      <section className="values-sec">
        <div className="container">
          <div className="section-header reveal">
            <div className="tag-pill dark">What We Stand For</div>
            <h2 className="section-title dark">Our Core <span className="grad">Values</span></h2>
            <p className="section-sub dark">
              These principles guide every decision we make and every solution we build.
            </p>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className="value-card reveal" data-delay={String((i % 3) * 130)}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────── */}
      <section className="cta-sec">
        <div className="cta-card reveal-scale">
          <div className="tag-pill dark" style={{ marginBottom: '20px' }}>Join Us</div>
          <h2>Let's Build the Future Together</h2>
          <p>
            Ready to partner with a team that is as invested in your success as
            you are? Get in touch today.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-white">Contact Us →</Link>
            <Link to="/services" className="btn btn-secondary">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
