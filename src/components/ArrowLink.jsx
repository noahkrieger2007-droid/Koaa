import { Link } from 'react-router-dom'

/**
 * Button/Link mit Pfeil-Mikrointeraktion: Der Pfeil schiebt sich beim
 * Hover nach, der Text rückt leicht auf.
 */
const variants = {
  solid:
    'bg-brown text-cream hover:bg-olive',
  cream:
    'bg-cream text-olive hover:bg-beige',
  matcha:
    'bg-matcha text-charcoal hover:bg-cream',
  outline:
    'border border-brown/30 text-brown hover:border-olive hover:text-olive',
  outlineLight:
    'border border-cream/30 text-cream hover:border-matcha hover:text-matcha',
}

export default function ArrowLink({
  to,
  href,
  children,
  variant = 'solid',
  className = '',
}) {
  const classes = `group/btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`
  const inner = (
    <>
      <span className="transition-transform duration-300 group-hover/btn:-translate-x-0.5">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="inline-block -translate-x-1 opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
      >
        →
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={to} className={classes}>
      {inner}
    </Link>
  )
}
