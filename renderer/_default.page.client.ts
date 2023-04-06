export { render }

import { createApp } from './app'
import type { PageContextClient } from './types'

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const instance = createApp(Page, pageProps, pageContext)

  // document.getElementById("page")?.innerHTML === ""

  
    const app = instance.app
    instance.store.state.value = pageContext.initialStoreState

    app.mount('#app')
  


}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
