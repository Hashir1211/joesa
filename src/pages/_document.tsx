import * as React from 'react'
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import StyledComponentsRegistry from 'lib/registry'
import { ServerStyleSheet } from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html>
        <GlobalStyles />
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <StyledComponentsRegistry>
            <script>0</script>
            <Main />
            <NextScript />
          </StyledComponentsRegistry>
        </body>
      </Html>
    )
  }
}
