'use client'

import React, { FC } from 'react';
import styled from 'styled-components'
import { Link, Avatar, Image, Button } from 'components'
import {BsCheckCircleFill} from 'react-icons/bs'

interface Props {
  name: string,
}

const Feature: FC<Props> = (props) => {
  return (
    <StyledFeature>
      <BsCheckCircleFill size={18}/>
      <div>{props.name}</div>
    </StyledFeature>
  )
}

const StyledFeature = styled.div`
  color: var(--accent-1);
  font-size: 1.375rem; 
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--size-4);
`

export default Feature
