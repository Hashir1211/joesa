'use client'

import React, { FC, useState } from 'react';
import styled from 'styled-components'
import { BsPlusCircle, BsPlusCircleFill  } from 'react-icons/bs'

interface Props {
  question: string,
  answer: string,
  category?: string,
}

const FaqItem: FC<Props> = (props) => {
  const handleClick = () => {
    setFaqItemToggle(true)
  }

  const handleSecondCLick = () => {
    setFaqItemToggle(false)
  }

  const [faqItemToggle, setFaqItemToggle] = useState(false)
  return (
    <StyledFaqItem>
        <div className='overline'>{props.category}</div>
      <FaqItemHeader>
        <h3 className='h3'>{props.question}</h3>
        <>{faqItemToggle == true ? <BsPlusCircleFill onClick={handleSecondCLick} size={22}/> : <BsPlusCircle onClick={handleClick} size={22}/> }</>
      </FaqItemHeader>

      <FaqItemBody className={faqItemToggle ? 'open' : 'close'}>
        {props.answer}
      </FaqItemBody>
    </StyledFaqItem>
  )
}

const StyledFaqItem = styled.div`
  padding-bottom: var(--size-4);
  border-bottom: 1px solid var(--accent-3);
`
const FaqItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--size-4);

  h3 {
    margin-bottom: 0;
  }
`
const FaqItemBody = styled.div`
  display: none;
  &.open {
    transition: .3s;
    display: inline-flex; 
  }
`

export default FaqItem
