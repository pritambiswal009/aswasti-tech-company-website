import { Link } from 'react-router-dom'

export default function ServiceCard({ icon, title, description, link = '/services', className = '', ...rest }) {
  return (
    <div className={`service-card${className ? ' ' + className : ''}`} {...rest}>
      <div className="sc-icon">{icon}</div>
      <h3 className="sc-title">{title}</h3>
      <p className="sc-desc">{description}</p>
      <Link to={link} className="sc-link">
        Learn more <span>→</span>
      </Link>
    </div>
  )
}

