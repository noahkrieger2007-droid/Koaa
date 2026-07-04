import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper.jsx'
import Reveal from '../components/Reveal.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'

const pillars = [
  {
    tag: '01 · Coffeeshop',
    title: 'Matcha, Kaffee & langsame Morgen',
    text: 'Das Herz von KOOA: Specialty Coffee und ceremonial Matcha, dazu ein kleines Deli mit Sauerteigbrot, Waffeln und saisonalem Obst. Kein Hektik-Kaffee zum Mitrennen — sondern ein Ort, an dem du ankommst, sitzen bleibst und den Tag kurz auf Pause stellst.',
    img: 'Barista gießt Matcha Latte Art, Dampf steigt auf, warme Holztheke, Keramiktassen in Erdtönen',
    tone: 'matcha',
  },
  {
    tag: '02 · Schmuck Workshops',
    title: 'Selbstgemacht glänzt am schönsten',
    text: 'Zusammen mit @lani.workshops finden bei uns regelmäßig Schmuck-Workshops statt. Perlen, Ketten, Ringe — du gestaltest dein eigenes Piece, wir liefern Matcha und gute Musik dazu. Perfekt für einen Nachmittag mit deinen Lieblingsmenschen.',
    img: 'Hände fädeln bunte Perlen an einem Holztisch, verstreute Perlenschalen, warmes Fensterlicht, Matcha Latte am Rand',
    tone: 'beige',
    handle: '@lani.workshops',
  },
  {
    tag: '03 · Tattoo',
    title: 'Feine Linien, gute Geschichten',
    text: 'Am Wochenende wird KOOA zum Studio: @sorry.mom.tats sticht bei uns Fine-Line-Tattoos — Samstag und Sonntag, klein aber fein. Erst Matcha, dann Tinte. Termine und Flash-Designs findest du auf Instagram.',
    img: 'Tattoo-Artist bei der Arbeit an einem Fine-Line-Motiv, konzentrierte Atmosphäre, Pflanzen im Hintergrund, weiches Licht',
    tone: 'olive',
    handle: '@sorry.mom.tats · Sa–So',
  },
]

export default function Concept() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative overflow-hidden bg-beige px-5 pb-20 pt-36 text-center md:pt-44">
        <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-blob bg-matcha/15" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-blob bg-olive/10" />
        <Reveal className="relative">
          <p className="text-xs uppercase tracking-widest2 text-olive">
            Das Concept
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-5xl font-bold leading-tight text-brown md:text-7xl">
            Mehr als ein Café.
            <br />
            <em className="text-olive">Ein Concept Store.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brown/70">
            KOOA ist ein Ort zum Verweilen, Machen und Entdecken. Drei Dinge
            unter einem Dach — verbunden durch dieselbe Idee: Zeit für die
            schönen Kleinigkeiten.
          </p>
        </Reveal>
      </section>

      {/* Pillars — alternating image/text blocks */}
      <section className="bg-cream px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl space-y-24 md:space-y-32">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.tag}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-20"
            >
              <Reveal className={i % 2 === 1 ? 'md:order-2' : ''}>
                <ImagePlaceholder
                  label={pillar.img}
                  tone={pillar.tone}
                  className="aspect-[4/3] w-full md:aspect-[5/4]"
                />
              </Reveal>
              <Reveal delay={0.15} className={i % 2 === 1 ? 'md:order-1' : ''}>
                <p className="text-xs uppercase tracking-widest2 text-olive">
                  {pillar.tag}
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-brown md:text-4xl">
                  {pillar.title}
                </h2>
                <p className="mt-5 max-w-lg leading-relaxed text-brown/70">
                  {pillar.text}
                </p>
                {pillar.handle && (
                  <p className="mt-5 inline-block rounded-full bg-beige px-4 py-2 text-sm font-medium text-olive">
                    {pillar.handle}
                  </p>
                )}
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-brown px-5 py-24 text-center text-cream md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-widest2 text-matcha">
            Same good vibes
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold md:text-5xl">
            Komm rein, schau dich um, bleib ein bisschen.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/events"
              className="rounded-full bg-matcha px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
            >
              Nächste Events
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-matcha hover:text-matcha"
            >
              So findest du uns
            </Link>
          </div>
        </Reveal>
      </section>
    </PageWrapper>
  )
}
