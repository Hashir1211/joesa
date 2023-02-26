'use client'

import React from 'react'
import GlobalStyles from 'styles/GlobalStyles'
import { Navbar, Footer, ContactForm, Section, SectionHeading } from 'components'
import { Inter } from '@next/font/google'
import { NextSeo, DefaultSeo } from 'next-seo'
import SEO from 'lib/seo.config'
import styled from 'styled-components'
import Script from 'next/script'
import StyledComponentsRegistry from 'lib/registry'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <html lang="en" className={inter.className}>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="canonical" href="https://joematkin.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
          <NextSeo
            useAppDir={true}
            facebook={{ appId: '1234567890' }}
            themeColor="#73fa97"
            titleTemplate="%s - Joe Matkin"
            languageAlternates={[
              {
                hrefLang: 'en',
                href: 'https://www.joematkin.com',
              },
            ]}
          />
          <DefaultSeo {...SEO} useAppDir={true} />
          <Script
            src="//code.tidio.co/0fh9pddxd9o03soz1x8oarco6dittwlk.js"
            strategy="afterInteractive"
          ></Script>
          <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategry="defer"></Script>
        </head>
        <body>
          <StyledComponentsRegistry>
            <header>
              <Navbar />
            </header>
            <Main>{children}</Main>
            <Section>
              <SectionHeading
                heading="Contact Me"
                subheading="Whether you want to talk about your project, or have any other questions feel free to contact me."
              />
              <ContactForm />
            </Section>
            <Footer />
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  )
}

const Main = styled.main``
