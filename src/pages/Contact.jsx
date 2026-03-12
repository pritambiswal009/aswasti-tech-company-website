import { useState } from 'react'

const CONTACT_DETAILS = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 94376 11129',
    href: 'tel:+919437611129',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'aswasthiorissa@gmail.com',
    href: 'mailto:aswasthiorissa@gmail.com',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Odisha, India',
    href: null,
  },
  {
    icon: '🕐',
    label: 'Business Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) {
      e.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email.'
    }
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setErrors({})
  }

  return (
    <>
      {/* ─── PAGE HERO ─────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="tag-pill dark" style={{ marginBottom: '18px' }}>Get In Touch</div>
          <h1><span className="grad">Contact</span> Us</h1>
          <p>
            Have a project in mind or just want to say hello? We would love to
            hear from you.
          </p>
        </div>
      </section>

      {/* ─── CONTACT SECTION ───────────────────────────── */}
      <section className="contact-sec">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Info */}
            <div className="contact-info-wrap reveal-left">
              <div>
                <h2 className="contact-info-title">
                  Let's Start a <span className="grad">Conversation</span>
                </h2>
                <p className="contact-info-desc">
                  Whether you're planning a new product, modernizing an existing
                  system, or just exploring your options — we're here to help.
                  Reach out and our team will respond within 24 hours.
                </p>
              </div>

              {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
                <div key={label} className="contact-detail-item">
                  <div className="cdi-icon">{icon}</div>
                  <div className="cdi-text">
                    <h4>{label}</h4>
                    {href ? (
                      <a href={href}><p>{value}</p></a>
                    ) : (
                      <p>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Form */}
            <div className="contact-form-card reveal-right" data-delay="150">
              <h3>Send Us a Message</h3>

              {submitted && (
                <div className="form-success">
                  ✅ Thank you! Your message has been sent. We'll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP SECTION ───────────────────────────────── */}
      <section className="map-sec">
        <div className="container">
          <div className="section-header reveal">
            <div className="tag-pill light">Our Location</div>
            <h2 className="section-title">Find <span className="grad">Us</span></h2>
            <p className="section-sub">
              We are based in Odisha, India and serve clients across the country
              and internationally.
            </p>
          </div>
          <div className="map-placeholder reveal" data-delay="150">
            <div className="map-inner">
              <div className="map-icon-wrap">🗺️</div>
              <h3>Aswasti Technology</h3>
              <p>Odisha, India · Serving clients nationwide</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
