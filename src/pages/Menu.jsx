import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper.jsx'
import Reveal from '../components/Reveal.jsx'
import Squiggle from '../components/Squiggle.jsx'
import ArrowLink from '../components/ArrowLink.jsx'
import { categories } from '../data/menu.js'

function MenuItem({ item, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group border-b border-brown/10 py-6 transition-colors duration-300 last:border-b-0 hover:border-matcha/40"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-xl font-semibold text-brown transition-colors group-hover:text-olive md:text-2xl">
          {item.name}
          {item.veg && (
            <span
              className="ml-2 align-middle text-sm"
              title="Vegetarisch"
              aria-label="Vegetarisch"
            >
              🌿
            </span>
          )}
        </h3>
        <span
          aria-hidden="true"
          className="hidden flex-1 border-b border-dotted border-brown/25 md:block"
        />
        {item.price && (
          <span className="whitespace-nowrap font-serif text-lg text-olive">
            {item.price} €
          </span>
        )}
      </div>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-brown/60">
        {item.desc}
      </p>
    </motion.li>
  )
}

export default function Menu() {
  const [active, setActive] = useState('coffee')
  const category = categories.find((c) => c.id === active)

  return (
    <PageWrapper>
      {/* Header */}
      <section className="bg-beige px-5 pb-16 pt-36 text-center md:pt-44">
        <Reveal>
          <p className="text-xs uppercase tracking-widest2 text-olive">Menü</p>
          <h1 className="mt-4 font-serif text-5xl font-bold text-brown md:text-7xl">
            Neue Getränke.
            <br />
            <Squiggle>
              <em className="text-olive">Neues Deli.</em>
            </Squiggle>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-brown/70">
            Alles frisch, vieles saisonal — und immer mit einem Löffel guter
            Laune serviert.
          </p>
        </Reveal>
      </section>

      {/* Tabs */}
      <section className="bg-cream px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div
            role="tablist"
            aria-label="Menü-Kategorien"
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  active === cat.id
                    ? 'text-cream'
                    : 'text-brown/70 hover:text-olive'
                }`}
              >
                {active === cat.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-olive"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{cat.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-14"
            >
              <p className="text-center font-serif italic text-brown/60">
                {category.intro}
              </p>

              {category.id === 'specials' ? (
                <div className="mt-10 rounded-3xl bg-beige p-10 text-center md:p-16">
                  <span className="text-4xl" aria-hidden="true">
                    ✨
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-semibold text-brown">
                    Frag uns nach unseren aktuellen Specials
                  </h2>
                  <p className="mx-auto mt-4 max-w-sm leading-relaxed text-brown/60">
                    Auf unserer Tafel steht immer etwas Neues — saisonale
                    Drinks, Deli-Experimente und kleine Überraschungen. Am
                    besten direkt am Tresen fragen oder auf Instagram
                    vorbeischauen.
                  </p>
                  <a
                    href="https://instagram.com/kooa_concept"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block rounded-full bg-olive px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-matcha"
                  >
                    @kooa_concept
                  </a>
                </div>
              ) : (
                <ul className="mt-8">
                  {category.items.map((item, i) => (
                    <MenuItem key={item.name} item={item} index={i} />
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>

          <p className="mt-14 text-center text-xs text-brown/50">
            🌿 = vegetarisch · Viele Drinks auch mit Hafer- oder Kokosmilch —
            sag einfach Bescheid.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beige px-5 py-20 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-bold text-brown md:text-4xl">
            Lust bekommen?
          </h2>
          <p className="mt-3 text-brown/70">
            Fröschengasse 13–17 · Mo–Sa 9–18 Uhr
          </p>
          <div className="mt-8">
            <ArrowLink to="/contact" variant="solid">
              Komm vorbei
            </ArrowLink>
          </div>
        </Reveal>
      </section>
    </PageWrapper>
  )
}
