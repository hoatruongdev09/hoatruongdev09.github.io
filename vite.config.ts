import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
// https://vite.dev/config/
export default defineConfig({
  base: "/",
  resolve: { tsconfigPaths: true },
  plugins: [svgr({
    svgrOptions: {

    }
  }), react(), tailwindcss()],
})
