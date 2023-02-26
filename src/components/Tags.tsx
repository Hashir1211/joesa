'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { Tag } from 'components'
import about from '../../../public/portrait.jpg'

interface Props {
  tags: Tags[]
  className: string
}

type Tags = {
  text: string
  variant?: any
  href: string | object
}

const ContactCard: FC<Props> = (props) => {
  return (
    <StyledTags className={props.className}>
      {props.tags.map((tag: any) => (
        <Tag text={tag.text} href="/" variant="small-grey" />
      ))}
    </StyledTags>
  )
}
const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: var(--size-2);
  flex-wrap: wrap;
`

export default ContactCard
