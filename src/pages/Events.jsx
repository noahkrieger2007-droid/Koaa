import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper.jsx'
import Reveal from '../components/Reveal.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import Marquee from '../components/Marquee.jsx'
import Squiggle from '../components/Squiggle.jsx'
import ArrowLink from '../components/ArrowLink.jsx'

const events = [
  {
    name: 'Matcha Rave',
    date: 'Bald · Datum folgt',
    desc: 'Matcha statt Mate, Beats statt Buzz. Ein Abend mit DJ-Set, Iced Matcha Specials und der besten Crowd der Stadt. Tanzbar, koffeinfrei glücklich.',
    img: 'Abendstimmung im Café, grünes Licht, DJ-Pult zwischen Pflanzen, Menschen mit Iced Matcha in der Hand',
    tone: 'dark',
  },
  {
    name: 'Spenden Flohmarkt',
    date: 'Bald · Datum folgt',
    desc: 'Secondhand-Schätze für den guten Zweck: Kleidung, Keramik, Kleinigkeiten. Der Erlös wird gespendet — bring gern eigene Stücke vorbei.',
    img: 'Kleiderständer und Tische mit Secondhand-Fundstücken vor dem Café, Sonnenlicht, handgeschriebene Preisschilder',
    tone: 'beige',
  },
  {
    name: 'Schmuck Workshop',
    date: 'Regelmäßig · mit @lani.workshops',
    desc: 'Perlen aussuchen, fädeln, glänzen: Gestalte dein eigenes Schmuckstück — Matcha und gute Musik inklusive. Plätze sind begrenzt, schnell sein lohnt sich.',
    img: 'Workshoptisch mit Perlenschalen in Erdtönen, Hände bei der Arbeit, Matcha Latte und Notizbuch daneben',
    tone: 'matcha',
  },
]

export default function Events() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="bg-beige px-5 pb-16 pt-36 text-center md:pt-44">
        <Reveal>
          <p className="text-xs uppercase tracking-widest2 text-olive">Events</p>
          <h1 className="mt-4 font-serif text-5xl font-bold text-brown md:text-7xl">
            Hier ist immer
            <br />
            <Squiggle>
              <em className="text-olive">was los.</em>
            </Squiggle>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-brown/70">
            Workshops, Flohmärkte, Raves — KOOA ist mehr als Kaffee. Das steht
            als Nächstes an:
          </p>
        </Reveal>
      </section>

      {/* Event grid */}
      <section className="bg-cream px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.name} delay={i * 0.15}>
              <motion.article
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-beige shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-olive/10">
                <ImagePlaceholder
                  label={event.img}
                  tone={event.tone}
                  rounded="rounded-none"
                  className="aspect-[4/3] w-full"
                />
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs uppercase tracking-widest2 text-olive">
                    {event.date}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold text-brown">
                    {event.name}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brown/70">
                    {event.desc}
                  </p>
                  <a
                    href="https://instagram.com/kooa_concept"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block self-start rounded-full border border-brown/25 px-6 py-2.5 text-sm font-medium text-brown transition-colors duration-300 group-hover:border-olive group-hover:text-olive"
                  >
                    Mehr erfahren
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Laufband */}
      <Marquee
        words={[
          'Matcha Rave',
          'Spenden Flohmarkt',
          'Schmuck Workshop',
          'Same good vibes',
          '@kooa_concept',
        ]}
      />

      {/* Instagram CTA */}
      <section className="relative overflow-hidden bg-olive px-5 py-24 text-center text-cream md:py-28">
        <div className="animate-blob pointer-events-none absolute -left-20 -top-16 h-64 w-64 rounded-blob bg-matcha/25" />
        <div className="animate-blob-slow pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-blob bg-cream/10" />
        <Reveal className="relative">
          <p className="text-xs uppercase tracking-widest2 text-cream/70">
            Nichts verpassen
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-serif text-4xl font-bold md:text-5xl">
            Alle Dates zuerst auf Instagram.
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-cream/80">
            Neue Events, Workshop-Anmeldungen und spontane Specials posten wir
            immer zuerst dort. Folg uns und bleib im Loop.
          </p>
          <div className="mt-9">
            <ArrowLink
              href="https://instagram.com/kooa_concept"
              variant="cream"
              className="font-semibold"
            >
              @kooa_concept folgen
            </ArrowLink>
          </div>
        </Reveal>
      </section>
    </PageWrapper>
  )
}
