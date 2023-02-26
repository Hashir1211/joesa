'use client'

import React from 'react'
import GlobalStyles from 'styles/GlobalStyles'
import {
  Navbar,
  Footer,
  ContactForm,
  Section,
  SectionHeading,
} from 'components/index'
import { Inter } from '@next/font/google'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <header>
        <Navbar variant="dark" />
      </header>
      <Main className={inter.className}>{children}</Main>
    </>
  )
}

const Main = styled.main`
  // padding-top: var(--navbar-height);
`
