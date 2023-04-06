import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  base: 'http://localhost:3000/',
  server: {
    origin: 'http://localhost:3000',
  },
  ssr: {
    noExternal: [
      'vue-banana-i18n',
    ],
  },
  plugins: [vue(), ssr({
   // baseAssets: 'http://localhost:3000/'
  })]
}

export default config
