import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

const TECH_LOGOS = [
  { icon: '⚛️', label: 'React' },
  { icon: '🟢', label: 'Node.js' },
  { icon: '☁️', label: 'AWS' },
  { icon: '🐳', label: 'Docker' },
  { icon: '🔷', label: 'TypeScript' },
  { icon: '🔥', label: 'Firebase' },
]

const SERVICES_PREVIEW = [
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'High-performance, scalable web applications built with modern frameworks and best practices.',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps for iOS & Android that deliver exceptional user experiences.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Secure and scalable cloud infrastructure, migration, and managed services on AWS, Azure & GCP.',
  },
  {
    icon: '💼',
    title: 'IT Consulting',
    description:
      'Strategic technology consulting to align your IT investments with your business objectives.',
  },
]

const WHY_US = [
  {
    icon: '🚀',
    iconClass: 'icon-blue',
    title: 'Innovation-Driven',
    description:
      'We stay ahead of emerging technologies to deliver cutting-edge solutions that give you a competitive edge.',
  },
  {
    icon: '🛡️',
    iconClass: 'icon-violet',
    title: 'Reliable & Secure',
    description:
      'Our solutions are built with enterprise-grade security and 99.9% uptime SLAs to keep your business running smoothly.',
  },
  {
    icon: '👥',
    iconClass: 'icon-cyan',
    title: 'Expert Team',
    description:
      'Our seasoned developers, designers, and architects bring decades of combined experience across diverse industries.',
  },
  {
    icon: '⚡',
    iconClass: 'icon-emerald',
    title: 'Agile Delivery',
    description:
      'Rapid, iterative delivery with full transparency so you always know where your project stands.',
  },
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orb orb-3" />
        <div className="hero-orb orb-4" />

        <div className="hero-container">
          {/* Left content */}
          <div>
            <div className="hero-eyebrow">
              <span className="live-dot" />
              Trusted Software Partner · Est. 2019
            </div>

            <h1 className="hero-title">
              <span className="grad-text">Aswasti</span>
              <br />Technology
            </h1>

            <p className="hero-desc">
              Innovative Software Solutions for Modern Businesses. We design,
              build, and scale digital products that transform your vision
              into reality.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project →
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>

            {/* Trusted by */}
            <div className="hero-trust">
              <span className="hero-trust-label">Trusted by</span>
              <div className="trust-avatars">
                <div className="trust-avatar a">JD</div>
                <div className="trust-avatar b">SK</div>
                <div className="trust-avatar c">PR</div>
                <div className="trust-avatar d">AM</div>
              </div>
              <div className="trust-stat">
                50+ Clients
                <span>across India</span>
              </div>
            </div>
          </div>

          {/* Right visual card */}
          <div className="hero-visual">
            <div style={{ position: 'relative' }}>
              <div className="hero-glass-card">
                <div className="card-header">
                  <div className="card-icon-wrap">💻</div>
                  <div className="card-status-badge">Live</div>
                </div>

                <div className="card-title">Full-Stack Solutions</div>
                <div className="card-subtitle">Web · Mobile · Cloud · AI</div>

                <div className="card-bars">
                  {[
                    { label: 'Web Development', pct: '92%', cls: 'bar-blue' },
                    { label: 'Mobile Apps', pct: '87%', cls: 'bar-cyan' },
                    { label: 'Cloud & DevOps', pct: '79%', cls: 'bar-violet' },
                  ].map(({ label, pct, cls }) => (
                    <div key={label} className="card-bar-row">
                      <div className="card-bar-label">
                        <span>{label}</span>
                        <span>{pct}</span>
                      </div>
                      <div className="bar-track">
                        <div className={`bar-fill ${cls}`} style={{ width: pct }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-footer-stats">
                  <div className="mini-stat"><strong>100+</strong><span>Projects</span></div>
                  <div className="mini-stat"><strong>50+</strong><span>Clients</span></div>
                  <div className="mini-stat"><strong>5+</strong><span>Years</span></div>
                </div>
              </div>

              <div className="hero-pill pill-top-right">
                <span className="pill-icon">🚀</span> Agile Delivery
              </div>
              <div className="hero-pill pill-bottom-left">
                <span className="pill-icon">🔒</span> 99.9% Uptime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH LOGOS ───────────────────────────────────── */}
      <div className="logos-strip reveal">
        <div className="logos-label">Technologies We Master</div>
        <div className="logos-row">
          {TECH_LOGOS.map(({ icon, label }) => (
            <div key={label} className="logo-chip">
              <span className="chip-icon">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* ─── SERVICES PREVIEW ─────────────────────────────── */}
      <section className="services-sec">
        <div className="container">
          <div className="section-header reveal">
            <div className="tag-pill light"><span className="dot" />What We Do</div>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-sub">
              From concept to deployment, we deliver end-to-end technology
              services tailored to your business needs.
            </p>
          </div>
          <div className="service-cards-grid">
            {SERVICES_PREVIEW.map((s, i) => (
              <ServiceCard key={s.title} {...s} className="reveal" data-delay={String(i * 120)} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn btn-primary">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────── */}
      <section className="why-sec">
        <div className="container">
          <div className="why-grid">
            <div className="reveal-left">
              <div style={{ marginBottom: '40px' }}>
                <div className="tag-pill dark">Why Aswasti</div>
                <h2 className="section-title dark">
                  Why <span className="grad">Choose Us?</span>
                </h2>
                <p className="section-sub dark">
                  We combine technical excellence with a deep understanding of
                  business to deliver solutions that truly make a difference.
                </p>
              </div>
              <div className="why-items">
                {WHY_US.map((item) => (
                  <div key={item.title} className="why-item">
                    <div className={`why-item-icon ${item.iconClass}`}>{item.icon}</div>
                    <div className="why-item-text">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-panel reveal-right" data-delay="150">
              <div className="stats-panel-title">
                Powering Digital Transformation Since 2019
              </div>
              <p className="stats-panel-sub">
                Numbers that reflect our commitment to delivering world-class
                software solutions.
              </p>
              <div className="stats-grid">
                {[
                  ['100+', 'Projects Delivered'],
                  ['50+', 'Happy Clients'],
                  ['15+', 'Expert Developers'],
                  ['99.9%', 'Uptime SLA'],
                ].map(([num, label]) => (
                  <div key={label} className="stat-box">
                    <div className="stat-box-num">{num}</div>
                    <div className="stat-box-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA CARD ─────────────────────────────────────── */}
      <section className="cta-sec">
        <div className="cta-card reveal-scale">
          <div className="tag-pill dark" style={{ marginBottom: '20px' }}>Ready to Build?</div>
          <h2>Let's Create Something Extraordinary</h2>
          <p>
            Tell us about your project and our team will get back to you within
            24 hours with a tailored proposal.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-white">
              Start a Project →
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
