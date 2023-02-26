'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { Link, Avatar, Button } from 'components'
import NextImage from 'next/image'
import about from '../../../public/portrait.jpg'
import urlFor from 'lib/sanity.image'
import queries from 'styles/queries'

interface Props {
  heading: string
  paragraph: string
  buttonText: string
  buttonHref: string
  image: string
  flexReverse?: boolean
}

type Types = {
  flexReverse?: boolean
}

const TextImage: FC<Props> = (props) => {
  return (
    <StyledTextImage flexReverse={props.flexReverse}>
      <Text>
        <h3 className="mb-6">{props.heading}</h3>
        <p className="mb-12">{props.paragraph}</p>
        <Button
          text={props.buttonText}
          href={props.buttonHref}
          variant="large-black"
        />
      </Text>
      <Image>
        <ImageContainer>
          <NextImage
            src={urlFor(props?.image)?.url()}
            alt={props.heading}
            fill
            objectFit="contain"
          />
        </ImageContainer>
      </Image>
    </StyledTextImage>
  )
}

const StyledTextImage = styled.div<Types>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.flexReverse ? 'end' : 'start')};
  flex-direction: ${(props) => props.flexReverse && 'row-reverse'};
  gap: var(--size-24);
  @media (${queries.tablet}) {
    flex-direction: column-reverse;
    justify-content: start;
    gap: var(--size-12);
  }
`
const Text = styled.div`
  min-width: 40%;
  p {
    max-width: var(--text-width-small);
  }
  @media (${queries.tablet}) {
    width: 100%;
  }
`
const Image = styled.div`
  display: flex;
  width: 100%;
`
const ImageContainer = styled.div`
  max-width: 50%;
  width: 450px;
  height: 300px;
  position: relative;
  @media (${queries.tablet}) {
    height: 200px;
  }
`

export default TextImage
