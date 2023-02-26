'use client'

import React, { FC } from 'react';
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
    src: any,
    alt: string,
    aspectRatio?: string,
    objectFit?: string,
    marginBottom?: string,
    darkOverlay?: number,
    borderRadius?: number,
}

type Types = {
  aspectRatio?: string;
  marginBottom?: string;
  darkOverlay?: number;
  borderRadius?: number;
}

const CardImage: FC<Props> = (props) => {
  return (
    <ImageContainer aspectRatio={props.aspectRatio} marginBottom={props.marginBottom} borderRadius={props.borderRadius}>
        {props.darkOverlay && <Overlay darkOverlay={props.darkOverlay}></Overlay>}
        <Image src={props.src} alt={props.alt} fill style={{objectFit: props.objectFit ? props.objectFit : 'cover'}}/>
    </ImageContainer>
  )
}

const ImageContainer = styled.div<Types>`
    border-radius: ${props => props.borderRadius ? `${props.borderRadius}px` : 'var(--border-radius)' };
    background-color: black;
    position: relative;
    object-fit: cover;
    width: 100%;
    overflow: hidden;
    padding-top: ${(props) => props.aspectRatio ?  `var(--aspect-ratio-${props.aspectRatio})` : 'var(--aspect-ratio-219)'};
    margin-bottom: ${(props) => `${props.marginBottom}px`};
`
const Overlay = styled.div<Types>`
  background-color: black;
  opacity: ${props => props.darkOverlay};;
  z-index: 1;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`

export default CardImage
