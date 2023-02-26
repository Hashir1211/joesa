'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { Feature, Button } from 'components'
import urlFor from 'lib/sanity.image'
import { PortableText } from '@portabletext/react'
import NextImage from 'next/image'
import queries from 'styles/queries'

interface Props {
  name: string
  heading: string
  features?: [Features]
  image: string
  price: number
  dark: boolean
}

interface Features {
  name: string
}

const FeaturedProduct: FC<Props> = (props) => {
  return (
    <StyledFeaturedProduct>
      <ImageContainer>
        <NextImage
          src={urlFor(props?.image)?.url()}
          alt={props.name}
          fill
          objectFit="contain"
        />
      </ImageContainer>
      <Features>
        {props?.features?.map((feature) => (
          <Feature name={feature} />
        ))}
      </Features>
      <div id="portable-text" className="h2 mb-8">
        <PortableText value={props.heading} />
      </div>
      {props.dark ? (
        <Button
          text={`Download Now £${props.price}`}
          href="/"
          variant={'large-white'}
        />
      ) : (
        <Button text="text" href="/" />
      )}
    </StyledFeaturedProduct>
  )
}

const StyledFeaturedProduct = styled.div`
  font-size: 1.375rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-4);
  #portable-text {
    h2 {
      max-width: 15ch;
    }
    strong {
      color: var(--accent-1);
    }
  }
`
const ImageContainer = styled.div`
  position: relative;
  height: 40vh;
  width: 100%;
`
const Features = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--size-8);
  margin-bottom: var(--size-2);
  @media (${queries.tablet}) {
  }
`

export default FeaturedProduct
