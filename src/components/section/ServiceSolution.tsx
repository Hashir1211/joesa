'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import queries from 'styles/queries'
import { LargeSectionHeading, RowList } from 'components'
import NextImage from 'next/image'
import urlFor from 'lib/sanity.image'

interface Props {
  content: Content[]
}

interface Content {
  name: string
  summary: string
  image: string
}

const ServiceSolution: FC<Props> = (props) => {
  return (
    <>
      <RowList rowGap="64">
        {props?.content?.map((solution) => (
          <StyledServiceSolution>
            <LargeSectionHeading
              heading={solution.name}
              description={solution.summary}
              portableText
              showLink
              linkText={`View`}
              linkHref=""
            />
            <ImageContainer>
              <NextImage
                src={urlFor(solution?.image)?.url()}
                alt=""
                fill
                objectFit="cover"
              />
            </ImageContainer>
          </StyledServiceSolution>
        ))}
      </RowList>
    </>
  )
}

const StyledServiceSolution = styled.div``
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  width: 100%;
  height: 80vh;
  }
`

export default ServiceSolution
