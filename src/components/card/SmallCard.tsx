'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { Button, Image } from 'components'
import NextImage from 'next/image'
import urlFor from 'lib/sanity.image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface Props {
  content: Content[]
  aspectRatio?: string
}

interface Content {
  image: string
  name: string
  heading: string
  paragraph: string
  button_link: string
  slug: string
  tags: Tag[]
}
interface Tag {
  heading: string
}

const SmallCard: FC<Props> = (props) => {
  return (
    <>
      <StyledSmallCard key={props.content.name}>
        <Overlay></Overlay>
        <NextImage
          src={urlFor(props.content.image)?.url()}
          fill
          style={{ objectFit: 'cover' }}
          alt=""
        />

        <Text>
          <h5>
            {props.content.name} — {props.content.heading}
          </h5>
          <Button
            text="View"
            href={`/projects/${props.content.slug.current}`}
            variant="small-white"
          />
        </Text>
      </StyledSmallCard>
    </>
  )
  SmallCard.displayName = 'SwiperSlide'
}

const StyledSmallCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  padding-top: 300px;
`
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 0;
`
const Text = styled.div`
  z-index: 2;
  position: absolute;
  left: 24px;
  bottom: 24px;
  h5 {
    color: var(--text-color-secondary) !important;
  }
`

export default SmallCard
