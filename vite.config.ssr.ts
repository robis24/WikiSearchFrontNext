import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { UserConfig } from 'vite'

const config: UserConfig = {
  define: {
    'process.env': {}
  },
  build: {
      outDir: 'resources',
      lib: {
        entry: resolve(__dirname, 'renderer/main.ts'),
        name: 'wikisearch',
        fileName: 'wikisearch',
      }
},
  plugins: [vue()]
}

export default config
