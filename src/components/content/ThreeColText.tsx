'use client'
import React, { FC } from 'react';
import styled from 'styled-components'
import queries from 'styles/queries'

interface Props {
  content: Content[],
}

interface Content {
  heading: string,
  overline: string,
  paragraph: string,
}

const ThreeColText: FC<Props> = (props) => {
  return (
    <StyledThreeColText>
      {props.content.map((content) => (
        <Column key={content.heading}>
          <h3>{content.heading}</h3>
          <div className='overline'>{content.overline}</div>
          <p>{content.paragraph}</p>
        </Column>
      ))}
    </StyledThreeColText>
  )
}

const StyledThreeColText = styled.div` 
display: flex;
color: var(--text-color-primary) !important;
  gap: var(--gap);
  flex-direction: row;
  @media (${queries.desktop}) {
    flex-direction: column;
    gap: var(--gap-large);
  }
 `
const Column = styled.div`
  width: var(--width-33p);
  h3 {
    margin-bottom: var(--size-2);
  }
  p {
    max-width: var(--text-width);
  }
  @media (${queries.desktop}) {
    width: var(--width-100p);
  }
  
`


export default ThreeColText
