'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { PortableText } from '@portabletext/react'
import { Link, Image, Container, RowList } from 'components'
import urlFor from 'lib/sanity.image'
import queries from 'styles/queries'

interface Props {
  content: Content[]
}

interface Content {
  name: string
  image: string
  summary: string
}

const ServiceCard: FC<Props> = (props) => {
  return (
    <RowList rowGap="16">
      {props.content.map((content: any) => (
        <>
          <StyledServiceCard key={content?.name}>
            <Text>
              <h2 className="">{content?.name}</h2>
              <div className="portable-text mb-16">
                <PortableText value={content?.summary} />
              </div>
              <Link
                href={`services/${content?.slug?.current}`}
                text="Details"
                variant="large-dark"
                showChevron
              />
            </Text>
            <ImageContainer>
              <Image
                src={urlFor(content?.image)?.url()}
                alt=""
                objectFit="contain"
                aspectRatio="710"
              />
            </ImageContainer>
          </StyledServiceCard>
        </>
      ))}
    </RowList>
  )
}

const StyledServiceCard = styled.div`
  color: var(--text-color-secondary);
  background-color: var(--background-color-secondary);
  border-radius: var(--border-radius-large);
  display: flex;
  align-items: center;

  padding: var(--size-16);
  gap: var(--size-16);
  @media (${queries.desktop}) {
    align-items: start;
    flex-direction: column-reverse;
  }
  @media (${queries.tablet}) {
    padding: calc(var(--size-16) / 1.5);
    gap: calc(var(--size-16) / 1.5);
  }
  @media (${queries.mobile}) {
    padding: calc(var(--size-16) / 2);
    gap: calc(var(--size-16) / 2);
  }
`
const Text = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    margin-bottom: var(--size-8);
  }
  #portable-text {
    margin-bottom: var(--size-16);
  }
  @media (${queries.desktop}) {
    width: 100%;
  }
`
const ImageContainer = styled.div`
  width: 40%;
  @media (${queries.desktop}) {
    width: var(--width-66p);
  }
`
const StyledPortableText = styled(PortableText)`
  p {
    font-size: 1.5rem;
  }
`

export default ServiceCard
