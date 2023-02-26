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

const AboutHeader: FC<Props> = (props) => {
  return (
    <StyledAboutHeader>
      <Avatar className="mb-16" size={320} />
      <Text>
        <h1 className="mb-6">Joe Matkin</h1>
        <p className="mb-8">
          From seven people and Upwork-based projects to the{' '}
          <strong>market-leading position and global recognition</strong>, we
          have come a long way to prove there is more to us than affordable
          rates and acceptable English. We learned from every wrong turn and
          bump on the road and grew stronger than we could’ve possibly imagined
        </p>
        <Link
          text="View LinkedIn"
          href="https://linkedin.com/in/joematkin"
          showChevron
          rel="noopener noreferrer"
          target="_blank"
        />
      </Text>
    </StyledAboutHeader>
  )
}

const StyledAboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--navbar-height));
`
const Text = styled.div`
  text-align: center;
  p {
    max-width: var(--text-width-large);
  }
`

export default AboutHeader
