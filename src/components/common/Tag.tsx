'use client'

import React, { FC } from 'react';
import styled from 'styled-components'
import Link from 'next/link';

interface Props {
  text: string;
  variant?: any;
  href: string | object;
  target?: string;
  className?: string;
}

const Tag: FC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <StyledTag className={`${props.variant}`}>
          {props.text}
      </StyledTag>
    </Link>

  )
}

const StyledTag = styled.div` // black
  background: var(--background-color-secondary);
  color: var(--text-color-secondary);
  font-size: 1rem;
  font-weight: 700;
  padding: 10px 24px;
  border: 1px solid var(--background-color-primary);
  border-radius: var(--border-radius-meduim);
  cursor: pointer;
  display: inline-block;
/* Style sub-classes */
&.small-grey {
  color: var(--text-color-primary);
  background-color: var(--accent-4);
  font-size: 0.875rem;
  font-weight: 700;
  padding: 16px 24px;
  :hover {
    background: linear-gradient(white, white) padding-box, var(--gradient-1) border-box;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: var(--border-radius-meduim);
  }
}
`;

export default Tag
