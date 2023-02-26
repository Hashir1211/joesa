'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import queries from 'styles/queries'
import { Header, Link, Feature, Button } from 'components'
import { PortableText } from '@portabletext/react'

interface Props {
  name: string
  heading: string
  summary: string
  showLink?: boolean
  portableText?: boolean
  linkText?: string
  linkHref?: string
  features?: [{}]
  buttonHref?: string
  buttonText?: string
}

const ProductPageHeader: FC<Props> = (props) => {
  return (
    <Header>
      <StyledProductPageHeader>
        <Text>
          {props.features && (
            <FeatureContainer>
              {props.features?.map((feature) => (
                <Feature name={feature.name} />
              ))}
            </FeatureContainer>
          )}
          {props.heading ? <h1>{props.heading}</h1> : <h1>{props.name}</h1>}
          {props.portableText ? (
            <div className="portable-text-large mb-16">
              <PortableText value={props.summary} />
            </div>
          ) : (
            <p className="body-large">{props.summary}</p>
          )}
          {props.buttonHref && (
            <Button
              href={props.buttonHref}
              text={props.buttonText}
              variant="large-black"
            />
          )}
        </Text>
      </StyledProductPageHeader>
    </Header>
  )
}

const StyledProductPageHeader = styled.div`
  width: 100%;
  margin-bottom: var(--size-16);
  margin-top: var(--size-8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    max-width: var(--text-width-meduim);
  }
  h2 {
    margin-bottom: var(--size-12);
    max-width: var(--text-width-xxsmall);
  }
`
const Text = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    max-width: 20ch;
  }
`
const FeatureContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: var(--size-24);
  row-gap: var(--size-4);
  margin-bottom: var(--size-8);
  @media (${queries.tablet}) {
    column-gap: var(--size-12);
  }
`

export default ProductPageHeader
