import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const { pathname } = useLocation()

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Scroll-aware background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on outside click / Escape key
  useEffect(() => {
    if (!mobileOpen) return
    const handleKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    const handleClick = (e) => {
      if (!e.target.closest('.navbar')) setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('click', handleClick)
    }
  }, [mobileOpen])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact Us' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">A</div>
          <span className="brand-name">Aswasti <span>Technology</span></span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={to === '/'}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="nav-cta">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get In Touch →
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-menu-inner">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => isActive ? 'active' : ''}
              end={to === '/'}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <div className="mobile-menu-cta">
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
              Get In Touch →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
