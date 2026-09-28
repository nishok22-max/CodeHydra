import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Relative base so the build works from any static host or sub-path.
export default defineConfig({ base: './', plugins: [react(), tailwindcss()] })
