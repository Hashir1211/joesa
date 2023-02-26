'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { Link, Avatar, Image } from 'components'
import about from '../../../public/portrait.jpg'

interface Props {
  content: Content[]
}

interface Content {
  heading: string
  overline: string
  paragraph: string
}

const About: FC<Props> = (props) => {
  return (
    <StyledAbout>
      <Header>
        <Avatar className="mb-4" />
        <h2>About me</h2>
        <p className="body-large">
          <span>
            I lead front-end development for companies and agencies, delivering
            web design nationwide.
          </span>
          I provide solutions that work for all clients, including site
          architecture & research, UI/UX design in popular design software such
          as Figma.
        </p>
        <Link text="Learn More" href="/profile" variant="dark" showChevron />
      </Header>
      <Image src={about} alt="" aspectRatio="222" objectFit="cover" />
    </StyledAbout>
  )
}

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--size-16);
  span {
    color: var(--text-color-secondary);
  }
  p {
    color: var(--accent-2);
    margin-bottom: var(--size-10);
  }
`
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: var(--aspect-ratio-169);
`

export default About
