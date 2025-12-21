import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['lcov', 'json', 'html', 'json-summary'],
      exclude: [ './src/main.tsx', '**/*.cjs', '**/*.d.ts', 'vite.config.ts' ],
    },
  }
})