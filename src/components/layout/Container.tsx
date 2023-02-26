'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import queries from 'styles/queries'

interface Props {
  size?: number
  children?: JSX.Element
  variant?: string
}

type Types = {
  variant?: string
}

const Container: FC<Props> = ({ variant, children }) => {
  return <StyledContainer className={variant}>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--page-width);
  padding: 0 var(--page-padding);
  margin: auto;
  @media (${queries.tablet}) {
    padding: 0 calc(var(--page-padding) / 1.5);
  }
  @media (${queries.mobile}) {
    padding: 0 calc(var(--page-padding) / 2);
  }
  &.fluid {
    max-width: 100vw;
    padding: 0;
  }
`

export default Container
