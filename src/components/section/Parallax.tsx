'use client'

import React, { FC } from 'react';
import styled from 'styled-components'
import { Link, Avatar, Image, Button } from 'components'
import Banner from '../../../public/store-banner.png'

interface Props {
  content: Content[],
}

interface Content {
  heading: string,
  overline: string,
  paragraph: string,
}

const Parallax: FC<Props> = (props) => {
  return (
    <StyledParallax>
      <Image src={Banner} alt='' aspectRatio='222'/>
    </StyledParallax>
  )
}

const StyledParallax = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
 `

export default Parallax
