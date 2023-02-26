'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { FaqItem, Tag } from 'components'

interface Props {
  content: Content[]
  query?: string
  dark?: boolean
  variant?: string
}

interface Content {
  question: string
  answer: string
  faq_category: { name: string }
}

const Faqs: FC<Props> = (props) => {
  return (
    <>
      {/*
      <Filter >
        {props.content.map((category) => (
          {}
          <Tag variant='small-grey' key={category.faq_category.name} href='/' text={category.faq_category.name} />
        ))}
      </Filter>
        */}
      <StyledFaqs className={props.dark}>
        {props?.content?.map((faq) => (
          <FaqItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </StyledFaqs>
    </>
  )
}

const StyledFaqs = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-4);
  &.dark {
  }
`
const Filter = styled.div`
  margin-bottom: var(--size-16);
`

export default Faqs
