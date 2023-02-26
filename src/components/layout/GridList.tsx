'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { Link, Image } from 'components'
import urlFor from 'lib/sanity.image'
import queries from 'styles/queries'
import { type } from 'os'

interface Props {
  children: React.ReactNode
  marginBottom: string
  columns?: string
  tabletColumns?: string
  desktopColumns?: string
}
type Types = {
  marginBottom: string
  columns?: string
  tabletColumns?: string
  desktopColumns?: string
}

const GridList: FC<Props> = (props) => {
  return (
    <StyledGridList
      marginBottom={props.marginBottom}
      columns={props.columns}
      tabletColumns={props.tabletColumns}
      desktopColumns={props.desktopColumns}
    >
      {props.children}
    </StyledGridList>
  )
}

const StyledGridList = styled.div<Types>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns ? `${props.columns}` : '1fr 1fr'};
  grid-gap: var(--size-16) var(--size-8);
  margin-bottom: ${(props) =>
    props.marginBottom ? `var(--size-${props.marginBottom})` : '0'};
  @media (${queries.desktop}) {
    grid-template-columns: ${(props) =>
      props.desktopColumns ? `${props.desktopColumns}` : '1fr 1fr'};
  }
  @media (${queries.tablet}) {
    grid-template-columns: ${(props) =>
      props.tabletColumns ? `${props.tabletColumns}` : '1fr'};
  }
`

export default GridList
