import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
// `--mode artifact` erzeugt eine einzelne selbst-enthaltene HTML-Datei
// (Fonts/CSS/JS inline) für Vorschau-Zwecke; der normale Build bleibt unverändert.
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'artifact' ? [viteSingleFile()] : [])],
  build:
    mode === 'artifact'
      ? { outDir: 'dist-artifact', assetsInlineLimit: 100_000_000 }
      : {},
}))
