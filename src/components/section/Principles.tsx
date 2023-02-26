'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import queries from 'styles/queries'

interface Props {
  content: Content[]
}

interface Content {
  heading: string
  name: string
  paragraph: string
}

const Principles: FC<Props> = (props) => {
  return (
    <StyledPrinciples>
      {props.content.map((principle) => (
        <Principle key={principle.name}>
          <h3>
            <span className="gradient-text-1">{principle.name} - </span>
            {principle.heading}
          </h3>
          <p>{principle.paragraph}</p>
        </Principle>
      ))}
    </StyledPrinciples>
  )
}

const StyledPrinciples = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--size-16) var(--size-64);
  h3 {
    max-width: var(--text-width-xsmall);
    margin-bottom: var(--size-8);
  }
  span {
    color: var(--text-color-secondary);
  }
  p {
    color: var(--accent-5);
    margin-bottom: var(--size-10);
    max-width: var(--text-width-small);
  }
  @media (${queries.desktop}) {
    grid-template-columns: 1fr;
    h3 {
      max-width: 100%;
    }
    p {
      max-width: 100%;
    }
  }
`
const Principle = styled.div``

export default Principles
