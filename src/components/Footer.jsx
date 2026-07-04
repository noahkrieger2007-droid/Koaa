import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl font-bold tracking-widest2">KOOA</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/60">
            Your favorite matcha spot. Coffeeshop, Concept Store &amp; gute
            Energie — mitten in Saarbrücken. Same good vibes, jeden Tag.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest2 text-matcha">Finde uns</p>
          <address className="mt-3 text-sm not-italic leading-relaxed text-cream/80">
            Fröschengasse 13–17
            <br />
            66111 Saarbrücken
          </address>
          <p className="mt-3 text-sm text-cream/80">Mo–Sa · 9–18 Uhr</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest2 text-matcha">Bleib dabei</p>
          <a
            href="https://instagram.com/kooa_concept"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-cream/80 underline decoration-matcha underline-offset-4 transition-colors hover:text-matcha"
          >
            @kooa_concept
          </a>
          <ul className="mt-4 space-y-2 text-sm text-cream/60">
            <li>
              <Link to="/menu" className="transition-colors hover:text-matcha">
                Menü
              </Link>
            </li>
            <li>
              <Link to="/events" className="transition-colors hover:text-matcha">
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-matcha">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-cream/40 md:px-8">
          © {new Date().getFullYear()} KOOA Concept · Saarbrücken · Mit viel
          Matcha gemacht 🍵
        </p>
      </div>
    </footer>
  )
}
