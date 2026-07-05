import PageWrapper from '../components/PageWrapper.jsx'
import Reveal from '../components/Reveal.jsx'

/**
 * Platzhalter für die Pflichtseiten. Vor dem Livegang mit den echten
 * Unternehmensdaten füllen (siehe Hinweisboxen) — in Deutschland sind
 * Impressum und Datenschutzerklärung gesetzlich vorgeschrieben.
 */
function LegalLayout({ title, children }) {
  return (
    <PageWrapper>
      <section className="bg-beige px-5 pb-12 pt-36 md:pt-44">
        <Reveal className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl font-bold text-brown md:text-5xl">
            {title}
          </h1>
        </Reveal>
      </section>
      <section className="bg-cream px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-8 leading-relaxed text-brown/80">
          {children}
        </div>
      </section>
    </PageWrapper>
  )
}

function Todo({ children }) {
  return (
    <div className="rounded-2xl border border-matcha/50 bg-matcha/10 p-5 text-sm text-brown/70">
      <strong className="text-olive">Vor Livegang ausfüllen:</strong> {children}
    </div>
  )
}

export function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <Todo>
        Vollständiger Name der Inhaber:in bzw. Firmenname mit Rechtsform,
        ladungsfähige Anschrift, E-Mail, Telefonnummer sowie ggf. USt-IdNr.
        und Handelsregisterangaben (§ 5 DDG).
      </Todo>
      <div>
        <h2 className="font-serif text-2xl font-semibold text-brown">
          Angaben gemäß § 5 DDG
        </h2>
        <p className="mt-3">
          KOOA Concept
          <br />
          [Name der Inhaber:in / Rechtsform]
          <br />
          Fröschengasse 13–17
          <br />
          66111 Saarbrücken
        </p>
      </div>
      <div>
        <h2 className="font-serif text-2xl font-semibold text-brown">Kontakt</h2>
        <p className="mt-3">
          E-Mail: [E-Mail-Adresse]
          <br />
          Telefon: [Telefonnummer]
        </p>
      </div>
      <div>
        <h2 className="font-serif text-2xl font-semibold text-brown">
          Umsatzsteuer-ID
        </h2>
        <p className="mt-3">
          [USt-IdNr. gemäß § 27a UStG, falls vorhanden]
        </p>
      </div>
    </LegalLayout>
  )
}

export function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <Todo>
        Diese Erklärung ist ein Grundgerüst und muss vor dem Livegang an das
        tatsächliche Hosting und die eingesetzten Dienste angepasst werden
        (z.&nbsp;B. Hoster benennen, Kontaktformular-Verarbeitung, ggf.
        Instagram-Einbindungen). Im Zweifel rechtlich prüfen lassen.
      </Todo>
      <div>
        <h2 className="font-serif text-2xl font-semibold text-brown">
          1. Verantwortliche Stelle
        </h2>
        <p className="mt-3">
          [Name und Kontaktdaten wie im Impressum]
        </p>
      </div>
      <div>
        <h2 className="font-serif text-2xl font-semibold text-brown">
          2. Hosting &amp; Server-Logs
        </h2>
        <p className="mt-3">
          Diese Website wird bei [Hoster] gehostet. Beim Aufruf werden
          technisch notwendige Daten (IP-Adresse, Zeitpunkt, aufgerufene
          Seite) in Server-Logs verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </div>
      <div>
        <h2 className="font-serif text-2xl font-semibold text-brown">
          3. Schriftarten
        </h2>
        <p className="mt-3">
          Alle Schriftarten werden lokal von diesem Server geladen. Es
          findet keine Verbindung zu Google-Servern statt.
        </p>
      </div>
      <div>
        <h2 className="font-serif text-2xl font-semibold text-brown">
          4. Kontaktformular
        </h2>
        <p className="mt-3">
          Wenn du uns über das Formular schreibst, verarbeiten wir deine
          Angaben (Name, E-Mail, Nachricht) zur Beantwortung deiner Anfrage
          (Art. 6 Abs. 1 lit. b DSGVO). [An tatsächliche Verarbeitung
          anpassen, sobald das Formular angebunden ist.]
        </p>
      </div>
      <div>
        <h2 className="font-serif text-2xl font-semibold text-brown">
          5. Deine Rechte
        </h2>
        <p className="mt-3">
          Du hast das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit und
          Widerspruch sowie auf Beschwerde bei einer Aufsichtsbehörde.
        </p>
      </div>
    </LegalLayout>
  )
}
