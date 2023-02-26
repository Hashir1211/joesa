'use client'

import React, { FC } from 'react';
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
  heading: string,
  subheading: string,
  centered?: boolean,
  textColor?: string,
}

type Types = {
  centered?: boolean,
  textColor?: string,
}

const SectionHeading: FC<Props> = (props) => {
  return (
    <StyledSectionHeading centered={props.centered} textColor={props.textColor}>
        <h2>{props.heading}</h2>
        <p>{props.subheading}</p>
    </StyledSectionHeading>
  )
}

const StyledSectionHeading = styled.div<Types>`
    color: ${props => props.textColor};
    width: 100%;
    text-align: ${(props) => props.centered ? 'center' : 'left'};
    justify-content: ${(props) => props.centered ?  'center' : 'left'};
    margin-bottom: var(--size-16);
    h2 {
      margin-bottom: var(--size);
    }
    p {
    display: inline-block;
    max-width: var(--text-width-half);
    color: var(--accent-2);
    }
`

export default SectionHeading
