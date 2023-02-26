'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import queries from 'styles/queries'

interface Props {
  content: Content[]
}

interface Content {
  name: string
  description: string
  order: string
}

const ServiceProcess: FC<Props> = (props) => {
  return (
    <StyledServiceProcess>
      {props?.content?.map((process) => (
        <Process>
          <Order>{process.order}</Order>
          <Text>
            <h3 className="gradient-text-5">{process.name}</h3>
            <p>{process.description}</p>
          </Text>
        </Process>
      ))}
    </StyledServiceProcess>
  )
}

const StyledServiceProcess = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-color-secondary);
  row-gap: var(--size-24);
  h3 {
    color: var(--text-color-secondary);
    max-width: var(--text-width-xsmall);
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: var(--size-2);
  }
  p {
    max-width: var(--text-width-small);
  }
`
const Process = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--size-8);
  align-items: center;
  width: 100%;
  :nth-child(even) {
    justify-content: end;
  }
`
const Order = styled.div`
  font-size: 11.25rem;
  font-weight: 900;
`
const Text = styled.div``

export default ServiceProcess
