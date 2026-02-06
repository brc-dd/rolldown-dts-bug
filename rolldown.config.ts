import { defineConfig } from 'rolldown'
import { dts } from 'rolldown-plugin-dts'
import { dependencies } from './package.json' with { type: 'json' }

export default defineConfig({
  input: ['./src/index.ts'],
  output: {
    dir: 'dist',
    format: 'esm'
  },
  external: Object.keys(dependencies),
  platform: 'node',
  plugins: [dts()]
})
