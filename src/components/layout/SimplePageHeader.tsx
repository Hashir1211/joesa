'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import queries from 'styles/queries'
import { Header, Tags, Button } from 'components'
import { PortableText } from '@portabletext/react'

interface Props {
  title?: string
  heading?: string
  description?: string
  portableText?: boolean
  tags?: Tags[]
  buttonText?: string
  buttonHref?: string
}

interface Tags {
  text: string
  href?: string
  variant?: string
}

const SimplePageHeader: FC<Props> = (props) => {
  return (
    <Header>
      <StyledSimplePageHeader>
        <Flex>
          {props.heading ? (
            <h2>
              {props.title} - {props.heading}
            </h2>
          ) : (
            <h1>{props.title}</h1>
          )}

          {props.portableText ? (
            <PortableText value={props.description} />
          ) : (
            <p>{props.description}</p>
          )}
          {props.buttonHref && (
            <Button
              spacing="mt-8"
              text={props?.buttonText}
              href={props?.buttonHref}
              variant="large-black"
              rel="noopener noreferrer"
              target="_blank"
            />
          )}
          {props?.tags?.text && <Tags className="mt-20" tags={props?.tags} />}
        </Flex>
      </StyledSimplePageHeader>
    </Header>
  )
}

const StyledSimplePageHeader = styled.div`
  p {
    max-width: var(--text-width-large);
  }
`
const Flex = styled.div``

export default SimplePageHeader
