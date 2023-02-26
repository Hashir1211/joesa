'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import queries from 'styles/queries'
import { Header, Link } from 'components'
import { PortableText } from '@portabletext/react'

interface Props {
  heading: string
  description: string
  showLink?: boolean
  portableText?: boolean
  linkText?: string
  linkHref?: string
}

const LargeSectionHeading: FC<Props> = (props) => {
  return (
    <StyledLargeSectionHeading>
      <Flex>
        <h2 className="h2-large">{props.heading}</h2>
        {props.portableText ? (
          <div className="portable-text mb-10">
            <PortableText value={props.description} />
          </div>
        ) : (
          <p className="body-large">{props.description}</p>
        )}
        {props.showLink && (
          <Link
            text={props.linkText}
            href={props.linkHref}
            variant="large-dark"
            showChevron
          />
        )}
      </Flex>
    </StyledLargeSectionHeading>
  )
}

const StyledLargeSectionHeading = styled.div`
  margin-bottom: var(--size-24);
  p {
    color: var(--accent-2);
    max-width: var(--text-width-large);
  }
  h2 {
    margin-bottom: var(--size-12);
    max-width: var(--text-width-xxsmall);
  }
`
const Flex = styled.div``

export default LargeSectionHeading
