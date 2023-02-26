'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import NextImage from 'next/image'
import { Link, Avatar, Image, Header } from 'components'
import about from '../../../public/portrait.jpg'
import { PortableText } from '@portabletext/react'
import urlFor from 'lib/sanity.image'
import queries from 'styles/queries'

interface Props {
  name: string
  summary: string
  image: string
}

interface Content {
  name: string
  summary: string
}

const ServiceHeader: FC<Props> = (props) => {
  return (
    <StyledServiceHeader>
      <Text>
        <h1 className="mb-6 hero-heading-service">
          Freelance
          <br />
          <span className="gradient-text-5">{props?.name}</span>
        </h1>
        <div className="portable-text">
          <PortableText id="portable-text" value={props.summary} />
        </div>
      </Text>
      <ImageContainer>
        <NextImage
          src={urlFor(props?.image)?.url()}
          alt=""
          fill
          objectFit="contain"
        />
      </ImageContainer>
    </StyledServiceHeader>
  )
}

const StyledServiceHeader = styled.div`
  padding: 0 var(--page-padding);
  padding-top: calc(var(--navbar-height) + var(--size-12));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: var(--background-color-secondary);
  color: var(--text-color-secondary);
  overflow: hidden;
  @media (${queries.tablet}) {
    padding: 0 calc(var(--page-padding) / 1.5);
    padding-top: calc(var(--navbar-height) + var(--size-12));
  }
  @media (${queries.mobile}) {
    padding: 0 calc(var(--page-padding) / 2);
    padding-top: calc(var(--navbar-height) + var(--size-12));
  }
`
const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`
const Text = styled.div`
  text-align: center;
  margin-bottom: var(--size-16);
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: var(--size-8);
  }
  p {
    max-width: var(--text-width-xlarge);
  }
`
export default ServiceHeader
