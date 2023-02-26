'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
import queries from 'styles/queries'

interface Props {
  text: string
  variant?: any
  href: string | object
  target?: string
  showChevron?: boolean
  rel?: string
}

const Link: FC<Props> = (props) => {
  return (
    <NextLink href={props.href} rel={props.rel}>
      <StyledLink
        className={`${props.variant}`}
        showChevron={props.showChevron}
      >
        {props.text}
        {props.showChevron && <FiChevronRight size={21} />}
      </StyledLink>
    </NextLink>
  )
}

const StyledLink = styled.div`
  color: var(--text-color-link-light);
  background-color: transparent;
  padding: 0;
  display: inline-flex;
  column-gap: 2px;
  :hover {
    text-decoration: underline;
  }
  /* Style sub-classes */
  &.dark {
    color: var(--text-color-link-dark);
    background-color: transparent;
    padding: 0;
  }
  &.large-dark {
    color: var(--text-color-link-dark);
    padding: 0;
    font-size: 1.125rem;
  }
  &.footer {
    color: var(--primary-text-color);
    font-weight: 400;
    font-size: 1rem;
  }
  &.small-footer {
    font-size: 0.875rem;
    color: var(--accent-1);
  }
  &.regular {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-color-primary);
  }
  &.nav {
    font-size: 1.125rem;
    font-weight: 500;
    text-align: center;
    padding: 16px;
    margin: 0px 16px;
    position: relative;
    color: var(--text-color-primary);
    :hover {
      color: transparent;
      background: var(--gradient-3);
      overflow: hidden;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    @media (${queries.desktop}) {
      padding: 0;
      margin: 0;
      font-size: 2.5rem;
    }
  }
  &.nav-dark {
    color: var(--text-color-secondary);
    font-size: 1.125rem;
    font-weight: 500;
    text-align: center;
    padding: 16px;
    margin: 0px 16px;
    position: relative;
    :hover {
      color: transparent;
      background: var(--gradient-3);
      overflow: hidden;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  &.dropdown {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-color-primary);
    &:hover {
      font-weight: 700;
      text-decoration: none;
    }
  }
`

export default Link
