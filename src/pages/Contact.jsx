import { useState } from 'react'
import PageWrapper from '../components/PageWrapper.jsx'
import Reveal from '../components/Reveal.jsx'

const inputClasses =
  'w-full rounded-2xl border border-brown/15 bg-cream px-5 py-3.5 text-sm text-brown placeholder:text-brown/40 outline-none transition-colors duration-300 focus:border-olive'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageWrapper>
      {/* Header */}
      <section className="bg-beige px-5 pb-16 pt-36 text-center md:pt-44">
        <Reveal>
          <p className="text-xs uppercase tracking-widest2 text-olive">Kontakt</p>
          <h1 className="mt-4 font-serif text-5xl font-bold text-brown md:text-7xl">
            Komm <em className="text-olive">vorbei.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-brown/70">
            Mitten in Saarbrücken, mitten im Vibe. Wir freuen uns auf dich.
          </p>
        </Reveal>
      </section>

      {/* Info + map */}
      <section className="bg-cream px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest2 text-olive">
                  Adresse
                </p>
                <address className="mt-3 font-serif text-2xl not-italic leading-snug text-brown md:text-3xl">
                  Fröschengasse 13–17
                  <br />
                  66111 Saarbrücken
                </address>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest2 text-olive">
                  Öffnungszeiten
                </p>
                <p className="mt-3 font-serif text-2xl text-brown md:text-3xl">
                  Mo–Sa · 9–18 Uhr
                </p>
                <p className="mt-2 text-sm text-brown/60">
                  Sonntags: Tattoo-Termine mit @sorry.mom.tats
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest2 text-olive">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/kooa_concept"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block font-serif text-2xl text-brown underline decoration-matcha decoration-2 underline-offset-8 transition-colors hover:text-olive md:text-3xl"
                >
                  @kooa_concept
                </a>
              </div>
            </div>
          </Reveal>

          {/* Styled map block */}
          <Reveal delay={0.15}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Fr%C3%B6schengasse+13-17%2C+66111+Saarbr%C3%BCcken"
              target="_blank"
              rel="noreferrer"
              aria-label="KOOA auf Google Maps öffnen"
              className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl bg-olive/15 transition-shadow duration-500 hover:shadow-xl hover:shadow-olive/10 md:aspect-auto md:h-full md:min-h-[420px]"
            >
              {/* stylized map lines */}
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute left-1/4 top-0 h-full w-[3px] rotate-6 bg-olive/40" />
                <div className="absolute left-2/3 top-0 h-full w-[2px] -rotate-12 bg-olive/30" />
                <div className="absolute left-0 top-1/3 h-[3px] w-full -rotate-3 bg-olive/40" />
                <div className="absolute left-0 top-2/3 h-[2px] w-full rotate-2 bg-olive/30" />
              </div>
              <div className="relative text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-olive text-2xl text-cream shadow-lg shadow-olive/30 transition-transform duration-500 group-hover:scale-110">
                  📍
                </span>
                <p className="mt-4 font-serif text-xl font-semibold text-brown">
                  Fröschengasse 13–17
                </p>
                <p className="mt-1 text-sm italic text-brown/60">
                  In Google Maps öffnen →
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal className="text-center">
            <h2 className="font-serif text-4xl font-bold text-brown md:text-5xl">
              Schreib uns.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-brown/70">
              Fragen zu Events, Workshops oder einfach Lust auf Hallo sagen?
              Wir lesen alles — versprochen.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            {sent ? (
              <div className="mt-12 rounded-3xl bg-cream p-12 text-center">
                <span className="text-4xl" aria-hidden="true">
                  🍵
                </span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-brown">
                  Danke dir!
                </h3>
                <p className="mt-3 text-brown/70">
                  Deine Nachricht ist angekommen. Wir melden uns — bis dahin:
                  same good vibes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-12 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-widest2 text-olive">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Wie heißt du?"
                      className={inputClasses}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-widest2 text-olive">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="deine@email.de"
                      className={inputClasses}
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-widest2 text-olive">
                    Nachricht
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Was liegt dir auf dem Herzen?"
                    className={`${inputClasses} resize-none`}
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brown px-8 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive md:w-auto"
                >
                  Nachricht senden
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  )
}
