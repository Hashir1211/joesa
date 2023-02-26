'use client'

import urlFor from 'lib/sanity.image'
import React, { FC } from 'react'
import styled from 'styled-components'
import NextImage from 'next/image'

interface Props {
  image: string
}

const FullImage: FC<Props> = (props) => {
  return (
    <StyledFullImage className="mt-16">
      <NextImage
        src={urlFor(props?.image)?.url()}
        alt=""
        fill
        objectFit="cover"
      />
    </StyledFullImage>
  )
}
const StyledFullImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: var(--aspect-ratio-219);
`

export default FullImage
