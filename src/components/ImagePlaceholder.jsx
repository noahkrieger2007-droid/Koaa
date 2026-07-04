/**
 * Warm, on-brand image placeholder: tinted block with a centered italic
 * description of the photo that belongs there.
 */
const tones = {
  beige: 'bg-beige text-brown/60',
  olive: 'bg-olive/15 text-olive',
  matcha: 'bg-matcha/20 text-olive',
  brown: 'bg-brown/10 text-brown/60',
  dark: 'bg-brown text-cream/70',
}

export default function ImagePlaceholder({
  label,
  tone = 'beige',
  className = '',
  rounded = 'rounded-3xl',
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden ${rounded} ${tones[tone]} ${className}`}
    >
      <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-current opacity-[0.06]" />
      <div className="absolute -bottom-10 -right-6 h-40 w-40 rounded-blob bg-current opacity-[0.06]" />
      <p className="max-w-[85%] text-center font-serif text-sm italic leading-relaxed md:text-base">
        📷 {label}
      </p>
    </div>
  )
}
