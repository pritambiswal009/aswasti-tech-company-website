import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

const SERVICES = [
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'We build fast, secure, and scalable web applications using modern frameworks like React, Next.js, Node.js, and more. From simple landing pages to complex enterprise portals, we deliver pixel-perfect experiences.',
  },
  {
    icon: '📱',
    title: 'Mobile Application Development',
    description:
      'Native iOS & Android apps, as well as cross-platform solutions using React Native and Flutter. We focus on intuitive UX and high performance to maximize user engagement and retention.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Cloud architecture, migration, and managed services on AWS, Azure, and Google Cloud. We help you reduce infrastructure costs, improve scalability, and ensure 99.9% availability.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'User-centric design that blends aesthetics with functionality. Our design team creates wireframes, prototypes, and production-ready interfaces that delight users and drive business results.',
  },
  {
    icon: '💼',
    title: 'IT Consulting',
    description:
      'Strategic technology advisory services to align your IT roadmap with business objectives. We assess your current landscape, identify opportunities, and create actionable transformation strategies.',
  },
]

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We start by understanding your goals, audience, and technical requirements.' },
  { step: '02', title: 'Design', desc: 'Our UX team crafts intuitive, visually compelling interfaces and prototypes.' },
  { step: '03', title: 'Development', desc: 'Agile delivery in short sprints with regular demos and feedback loops.' },
  { step: '04', title: 'Launch & Support', desc: 'Smooth deployment with ongoing monitoring, maintenance, and enhancements.' },
]

export default function Services() {
  return (
    <>
      {/* ─── PAGE HERO ─────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="tag-pill dark" style={{ marginBottom: '18px' }}>What We Offer</div>
          <h1>Our <span className="grad">Services</span></h1>
          <p>
            End-to-end technology services designed to accelerate your business
            growth and digital transformation.
          </p>
        </div>
      </section>

      {/* ─── SERVICES GRID ─────────────────────────────── */}
      <section className="services-page-sec">
        <div className="container">
          <div className="section-header reveal">
            <div className="tag-pill light">Solutions</div>
            <h2 className="section-title">Everything You Need to <span className="grad">Succeed</span></h2>
            <p className="section-sub">
              From design to deployment, we cover the full spectrum of digital
              product development.
            </p>
          </div>
          <div className="service-cards-grid">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} link="/contact" className="reveal" data-delay={String((i % 3) * 130)} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ───────────────────────────────────── */}
      <section className="process-sec">
        <div className="container">
          <div className="section-header reveal">
            <div className="tag-pill light">How We Work</div>
            <h2 className="section-title">Our Delivery <span className="grad">Process</span></h2>
            <p className="section-sub">
              A structured, transparent process that keeps projects on-time,
              on-budget, and on-point.
            </p>
          </div>
          <div className="process-steps">
            {PROCESS.map(({ step, title, desc }, i) => (
              <div key={step} className="process-step reveal" data-delay={String(i * 120)}>
                <div className="step-circle">{step}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────── */}
      <section className="cta-sec">
        <div className="cta-card reveal-scale">
          <div className="tag-pill dark" style={{ marginBottom: '20px' }}>Get Started</div>
          <h2>Ready to Start Your Project?</h2>
          <p>
            Tell us about your idea and our team will get back to you within 24
            hours with a tailored proposal.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-white">Request a Quote →</Link>
            <Link to="/about" className="btn btn-secondary">Learn About Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
