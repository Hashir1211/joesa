'use client'

import React, { FC } from 'react'
import { Container } from 'components'
import styled from 'styled-components'

interface Props {
  children: JSX.Element
  backgroundGradient?: string
  variant?: string
  containerVariant?: string
}

type Types = {
  backgroundGradient?: string
}

const Section: FC<Props> = ({
  children,
  backgroundGradient,
  variant,
  containerVariant,
  ...rest
}) => {
  return (
    <StyledSection backgroundGradient={backgroundGradient} className={variant}>
      <Container variant={containerVariant}>{children}</Container>
    </StyledSection>
  )
}

const StyledSection = styled.section<Types>`
  padding: var(--gap-section) 0;
  width: 100%;
  background: ${(props) =>
    props.backgroundGradient
      ? `var(${props.backgroundGradient})`
      : 'transparent'};
  /* Style sub-classes */
  &.dark {
    color: var(--text-color-secondary) !important;
    background-color: var(--background-color-secondary);
  }
  &.header {
    padding-top: 0;
  }
`

export default Section
