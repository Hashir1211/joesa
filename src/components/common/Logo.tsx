'use client'

import React, { FC } from 'react';
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
  text: string;
}

const Logo: FC<Props> = (props) => {
  return (
    <StyledLogo>
        <Image src='' alt=''/>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
    
`

export default Logo
