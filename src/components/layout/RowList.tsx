'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { PortableText } from '@portabletext/react'
import { Link, Image } from 'components'
import urlFor from 'lib/sanity.image'
import queries from 'styles/queries'

interface Props {
  children: React.ReactNode
  rowGap?: string
}
type Types = {
  rowGap?: string
}

const RowList: FC<Props> = (props) => {
  return (
    <StyledColumnList rowGap={props.rowGap}>{props.children}</StyledColumnList>
  )
}

const StyledColumnList = styled.div<Types>`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) =>
    props.rowGap ? `var(--size-${props.rowGap})` : 'var(--size-20)'};
  margin-bottom: var(--size-16);
  @media (${queries.desktop}) {
    row-gap: var(--size-16);
  @media (${queries.tablet}) {
    row-gap: calc(var(--size-16) / 1.5);
  }
  @media (${queries.mobile}) {
    row-gap: calc(var(--size-16) / 2);
  }
`

export default RowList
