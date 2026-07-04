import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper.jsx'
import Reveal from '../components/Reveal.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'

const featured = [
  {
    name: 'Matcha Latte',
    desc: 'Ceremonial Matcha, cremig aufgeschäumt — heiß oder iced. Der Grund, warum du wiederkommst.',
    img: 'Matcha Latte von oben, warmes Licht, Holztisch, zarter Milchschaum-Swirl in Grün',
    tone: 'matcha',
  },
  {
    name: 'Choco Banana',
    desc: 'Sauerteigbrot, Butter, Nutella, Banane, Zimt & Walnüsse. Comfort in seiner besten Form.',
    img: 'Choco Banana Toast, geschmolzene Nutella, Bananenscheiben, Zimtstaub, rustikaler Keramikteller',
    tone: 'brown',
  },
  {
    name: 'Waffel KOOA',
    desc: 'Kokosmilch-Waffel mit frischen Früchten, Erdbeerpüree, Sahne & Walnüssen. Süß, aber mit Stil.',
    img: 'Goldene Kokoswaffel mit Beeren und Puderzucker, weiches Morgenlicht, Leinenserviette',
    tone: 'beige',
  },
]

export default function Home() {
  return (
    <PageWrapper>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-beige px-5 text-center">
        {/* organic background blobs */}
        <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-blob bg-matcha/15" />
        <div className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-blob bg-olive/10" />
        <div className="pointer-events-none absolute right-1/4 top-16 h-24 w-24 rounded-full bg-brown/5" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-olive font-serif text-4xl font-bold text-cream shadow-lg shadow-olive/20 md:h-28 md:w-28 md:text-5xl">
            K
          </span>
          <p className="mt-4 text-xs uppercase tracking-widest2 text-olive">
            Kooa Concept · Saarbrücken
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.6, 0.35, 1] }}
          className="mt-8 max-w-4xl font-serif text-5xl font-bold leading-[1.05] text-brown md:text-7xl lg:text-8xl"
        >
          Your favorite
          <br />
          <em className="text-olive">matcha</em> spot.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-brown/70 md:text-xl"
        >
          Slow mornings, guter Kaffee, kleine Rituale. Coffeeshop &amp; Concept
          Store in der Fröschengasse — same good vibes, jeden Tag.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/menu"
            className="rounded-full bg-brown px-8 py-3.5 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive"
          >
            Zum Menü
          </Link>
          <Link
            to="/concept"
            className="rounded-full border border-brown/30 px-8 py-3.5 text-sm font-medium text-brown transition-all duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive"
          >
            Das Concept
          </Link>
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 animate-bounce text-brown/40"
          aria-hidden="true"
        >
          ↓
        </motion.span>
      </section>

      {/* ── What is KOOA ─────────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="text-xs uppercase tracking-widest2 text-olive">
              Was ist KOOA?
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-brown md:text-5xl">
              Mehr als ein Café.
              <br />
              <em className="text-olive">Ein Gefühl.</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-brown/70">
              KOOA ist Coffeeshop, Concept Store und Treffpunkt in einem.
              Hier gibt&apos;s Matcha-Rituale und Specialty Coffee, handgemachten
              Schmuck aus Workshops und Tattoos am Wochenende. Neue Getränke.
              Neues Deli. Immer dieselbe gute Energie.
            </p>
            <Link
              to="/concept"
              className="mt-8 inline-block text-sm font-semibold text-olive underline decoration-matcha decoration-2 underline-offset-8 transition-colors hover:text-matcha"
            >
              Mehr über unser Concept →
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <ImagePlaceholder
              label="Innenraum von KOOA: warmes Holz, Pflanzen, Menschen am Fenster mit Matcha Latte, weiches Nachmittagslicht"
              tone="olive"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* ── Featured drinks ──────────────────────────────────── */}
      <section className="bg-beige px-5 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-xs uppercase tracking-widest2 text-olive">
              Unsere Favorites
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-brown md:text-5xl">
              Dein Morgen. <em className="text-olive">Dein Matcha.</em>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {featured.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.15}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-cream shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-olive/10">
                  <ImagePlaceholder
                    label={item.img}
                    tone={item.tone}
                    rounded="rounded-none"
                    className="aspect-square w-full transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-serif text-2xl font-semibold text-brown">
                      {item.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brown/70">
                      {item.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 text-center">
            <Link
              to="/menu"
              className="inline-block rounded-full border border-brown/30 px-8 py-3.5 text-sm font-medium text-brown transition-all duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive"
            >
              Ganzes Menü ansehen
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Come find us ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-olive px-5 py-24 text-cream md:py-32">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-blob bg-matcha/25" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-blob bg-cream/10" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-widest2 text-cream/70">
            Come find us
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
            Fröschengasse 13–17
          </h2>
          <p className="mt-4 text-lg text-cream/85">
            66111 Saarbrücken · Mo–Sa 9–18 Uhr
          </p>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-cream/70">
            Komm vorbei, bleib ein bisschen. Der Matcha wartet — und der Platz
            am Fenster auch.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-olive transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige"
          >
            So findest du uns
          </Link>
        </Reveal>
      </section>
    </PageWrapper>
  )
}
