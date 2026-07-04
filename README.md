# KOOA Concept 🍵

Website für **KOOA Concept** — Matcha-Coffeeshop & Concept Store in der
Fröschengasse 13–17, 66111 Saarbrücken.

> Your favorite matcha spot. Same good vibes.

## Seiten

- **Home** (`/`) — Hero, „Was ist KOOA?", Featured Drinks, Come-find-us-CTA
- **Menü** (`/menu`) — Coffee · Drinks · Food · Specials mit Tab-Navigation
- **Concept** (`/concept`) — Coffeeshop · Schmuck Workshops (@lani.workshops) · Tattoo (@sorry.mom.tats)
- **Events** (`/events`) — Eventkarten + Instagram-CTA
- **Kontakt** (`/contact`) — Adresse, Öffnungszeiten, Karte, Kontaktformular

## Tech Stack

- [React 19](https://react.dev/) (Funktionskomponenten + Hooks)
- [React Router](https://reactrouter.com/) für Client-Side-Routing
- [Framer Motion](https://www.framer.com/motion/) für Seiten-Transitions & Scroll-Animationen
- [Tailwind CSS](https://tailwindcss.com/) mit Brand-Farbpalette
- [Vite](https://vite.dev/) als Build-Tool

## Entwicklung

```bash
npm install
npm run dev      # Dev-Server auf http://localhost:5173
npm run build    # Produktions-Build nach dist/
npm run preview  # Produktions-Build lokal testen
```

## Brand-Farben

| Farbe    | Hex       |
| -------- | --------- |
| Beige    | `#F5F0E8` |
| Olive    | `#6B7C4A` |
| Matcha   | `#8BAF5A` |
| Brown    | `#3B2F2F` |
| Cream    | `#FAF7F2` |
| Charcoal | `#1C1C1C` |

Bilder sind aktuell als beschriftete Platzhalter angelegt
(`src/components/ImagePlaceholder.jsx`) — echte Fotos können dort einfach
eingesetzt werden.
