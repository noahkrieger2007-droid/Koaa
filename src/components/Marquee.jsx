/**
 * Endloses Laufband im Concept-Store-Stil. Der Inhalt wird verdoppelt,
 * damit die Schleife nahtlos läuft (Animation verschiebt um -50%).
 */
const defaultWords = [
  'Matcha',
  'Specialty Coffee',
  'Concept Store',
  'Same good vibes',
  'Schmuck Workshops',
  'Tattoo Sa–So',
  'Saarbrücken',
]

export default function Marquee({ words = defaultWords, dark = false }) {
  const row = (ariaHidden) => (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center"
    >
      {words.map((word) => (
        <li key={word} className="flex items-center whitespace-nowrap">
          <span className="px-6 font-serif text-lg italic md:px-10 md:text-2xl">
            {word}
          </span>
          <span aria-hidden="true" className="text-matcha">
            ✳
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className={`overflow-hidden border-y py-4 md:py-5 ${
        dark
          ? 'border-cream/10 bg-charcoal text-cream/80'
          : 'border-brown/10 bg-cream text-brown/70'
      }`}
    >
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
