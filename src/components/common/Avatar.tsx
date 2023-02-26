'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import AvatarImg from '../../../public/avatar.png'

interface Props {
  size?: number
  className?: string
  showStatus?: boolean
}

type Types = {
  size?: number
  showStatus?: boolean
}

const Avatar: FC<Props> = (props) => {
  return (
    <StyledAvatar className={props.className}>
      <Status showStatus={props.showStatus} />
      <ImageContainer size={props.size}>
        <Image src={AvatarImg} alt="" fill />
      </ImageContainer>
    </StyledAvatar>
  )
}

const StyledAvatar = styled.div<Types>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const ImageContainer = styled.div<Types>`
  border-radius: var(--border-radius-circle);
  background-image: linear-gradient(90deg, white, white), var(--gradient-5);
  background-clip: padding-box, border-box;
  background-origin: border-box;
  border: 0.5px solid transparent;
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.size ? `${props.size}px` : '64px')};
  height: ${(props) => (props.size ? `${props.size}px` : '64px')};
`
const Status = styled.div<Types>`
  display: ${(props) => (props.showStatus ? `flex` : 'none')};
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: #29cc9c;
  top: 0;
  right: 0;
  z-index: 3;
`

export default Avatar
