'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { Image, Button, GridList } from 'components'
import urlFor from 'lib/sanity.image'

interface Props {
  content: Content[]
  aspectRatio?: string
}

interface Content {
  image: string
  name: string
  heading: string
  summary: string
  button_link: string
  tags: Tag[]
  _id: string
}
interface Tag {
  heading: string
}

const ProductCard: FC<Props> = (props) => {
  return (
    <GridList marginBottom="16" columns="1fr 1fr 1fr" desktopColumns="1fr 1fr">
      {props.content.map((content: any) => (
        <StyledProductCard className="project-card" key={content._id}>
          <Image
            src={urlFor(content.image).url()}
            alt=""
            aspectRatio="32"
            marginBottom="32"
            objectFit="contain"
          />
          <CardHeader>
            <h3 className="h4">{content.name}</h3>
            <p>{content.summary}</p>
          </CardHeader>
          <CardFooter>
            <Button
              className="lemonsqueezy-button"
              text={`Download Now $${content.price}`}
              href={`https://ultimatenotion.lemonsqueezy.com/checkout/buy/${content?.lemonsqueezy_url}?embed=1`}
            />
          </CardFooter>
        </StyledProductCard>
      ))}
    </GridList>
  )
}

const StyledProductCard = styled.article`
  // small-black
  width: 100%;
  h3 {
    margin-bottom: var(--size-3);
  }
  span {
    font-size: 2.5rem;
  }
  p {
    margin-bottom: 0px;
    max-width: var(--text-width);
  }
`
const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--size-8);
  div {
    color: var(--accent-5);
  }
`
const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
`

export default ProductCard
