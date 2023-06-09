export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['initialStoreState', 'pageProps', 'urlPathname']

import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { createVueApp } from './app'
import logoUrl from './logo.svg'
import type { PageContextServer } from './types'

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const { app, store } = createVueApp(Page, pageProps, pageContext)

  const appHtml = await renderToString(app)

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

  const documentHtml = escapeInject`<div id="app">${dangerouslySkipEscape(appHtml)}</div>`
  const initialStoreState = store.state.value

  return {
    documentHtml,
    pageContext: {
      initialStoreState
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
