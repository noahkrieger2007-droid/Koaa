import { motion } from 'framer-motion'

/**
 * Handgezeichnete Wellen-Unterstreichung, die sich beim Erscheinen
 * selbst zeichnet. Um das Schlüsselwort einer Headline legen.
 */
export default function Squiggle({ children, color = '#8BAF5A' }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        className="absolute -bottom-[0.12em] left-0 w-full"
        viewBox="0 0 220 14"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M3 9 C 30 3, 55 12, 82 8 S 135 3, 162 8 S 205 11, 217 6"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
        />
      </svg>
    </span>
  )
}
