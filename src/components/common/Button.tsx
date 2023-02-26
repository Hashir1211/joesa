'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface Props {
  text: string
  variant?: any
  href: string | object
  className?: string
  spacing?: string
  type?: string
  onClick?: any
  rel?: string
  target?: string
}

const Button: FC<Props> = (props) => {
  function preventDefault() {
    preventDefault()
  }
  return (
    <Link
      href={props.href}
      type={props.type}
      onClick={props.onClick}
      className={props.className}
      rel={props.rel}
      target={props.target}
    >
      <StyledButton className={`${props.variant} ${props.spacing}`}>
        {props.text}
      </StyledButton>
    </Link>
  )
}

const StyledButton = styled.button`
  // black
  background: var(--background-color-secondary);
  color: var(--text-color-secondary);
  font-size: 1rem;
  font-weight: 700;
  padding: 10px 24px;
  border: 1px solid var(--background-color-secondary);
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  /* Style sub-classes */
  &.large-black {
    font-size: 1.125rem !important;
    padding: 14px 40px;
  }
  &.white {
    background: var(--background-color-primary);
    color: var(--text-color-primary);
    border: 1px solid var(--background-color-primary);
  }
  &.small-white {
    background: var(--background-color-primary);
    color: var(--text-color-primary);
    font-size: 0.875rem;
    padding: 10px 24px;
    border: 1px solid var(--background-color-primary);
  }
  &.small-black {
    background: var(--background-color-secondary);
    color: var(--text-color-secondary);
    font-size: 0.875rem;
    padding: 10px 24px;
  }
  &.large-white {
    background: var(--background-color-primary);
    color: var(--text-color-primary);
    font-size: 1.25rem;
    padding: 14px 36px;
    border: 1px solid var(--background-color-primary);
  }
  &.large-black {
    background: var(--background-color-secondary);
    color: var(--text-color-secondary);
    font-size: 1.25rem;
    padding: 14px 36px;
  }
  &.product {
    background: var(--background-color-secondary);
    color: var(--text-color-secondary);
    font-size: 1.25rem;
    padding: 14px 36px;
  }
  &.large-gradient {
    background: var(--background-color-primary);
    color: var(--gradient-text-5);
    font-size: 1.25rem;
    padding: 14px 36px;
  }
  &.success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }
  &.link {
    color: #337ab7;
    background-color: transparent;
    border: none;
    border-radius: 0;
    font-weight: 400;
  }
  &.large {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  }
  &.disabled {
    color: #ddd;
    background-color: #aaa;
    border: 1px solid #aaa;
  }
  &.link-light {
    color: var(--text-color-link-light);
    background-color: transparent;
    padding: 0;
  }
  &.link-dark {
    color: var(--text-color-link-dark);
    background-color: transparent;
    padding: 0;
  }
`

export default Button
