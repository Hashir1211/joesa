'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import queries from 'styles/queries'
import { Container } from 'components'

interface Props {
  size?: number
  children?: JSX.Element
}

const Header: FC<Props> = ({ children }) => {
  return (
    <StyledHeader>
      <Container>{children}</Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  padding: var(--size-16) 0 0 0;
  padding-top: calc(var(--navbar-height) + var(--size-12));
`

export default Header
