'use client'

import React, { FC } from 'react';
import styled from 'styled-components'
import { Link, Avatar, Image, Button } from 'components'
import about from '../../../public/portrait.jpg'

interface Props {
  content: Content[],
}

interface Content {
  heading: string,
  overline: string,
  paragraph: string,
}

const Callout: FC<Props> = (props) => {
  return (
    <StyledCallout>
      <h2 className='hero-heading-large mb-12'>Let’s <span className='gradient-text-5'>build</span> your<br/>
      dream project.</h2>
      <Button href='/' text='Book Call' variant='large-black'/>
    </StyledCallout>
  )
}

const StyledCallout = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
 `

export default Callout
