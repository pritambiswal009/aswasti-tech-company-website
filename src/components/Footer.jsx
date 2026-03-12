import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand-col">
          <div className="footer-logo-wrap">
            <div className="footer-logo-icon">A</div>
            <span className="footer-brand-name">Aswasti Technology</span>
          </div>
          <p className="footer-tagline">
            Innovative Software Solutions for Modern Businesses. We build
            digital products that drive growth and transformation.
          </p>
          <div className="footer-socials">
            {['in', '𝕏', 'f', '⌥'].map((s, i) => (
              <div key={i} className="social-btn">{s}</div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">Mobile App Dev</Link></li>
            <li><Link to="/services">Cloud Solutions</Link></li>
            <li><Link to="/services">UI/UX Design</Link></li>
            <li><Link to="/services">IT Consulting</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <span className="fci-icon">📞</span>
              <span>+91 94376 11129</span>
            </div>
            <div className="footer-contact-item">
              <span className="fci-icon">✉️</span>
              <span>aswasthiorissa@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <span className="fci-icon">📍</span>
              <span>Odisha, India</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <span>© {year} Aswasti Technology. All rights reserved.</span>
        <span>Built with ❤️ for Modern Businesses</span>
      </div>
    </footer>
  )
}
