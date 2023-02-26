'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { Link, RowList } from 'components'
import urlFor from 'lib/sanity.image'
import { PortableText } from '@portabletext/react'
import NextImage from 'next/image'

interface Props {
  content: Content[]
  reverse?: boolean
}

interface Content {
  image: any
  name: string
  summary: string
  link: string
}
const LargeProjectCard: FC<Props> = (props) => {
  return (
    <RowList rowGap="32">
      {props?.content?.map((content: any) => (
        <StyledLargeProjectCard className="project-card" key={content?.name}>
          <Image>
            <ImageContainer>
              <NextImage
                src={urlFor(content?.service_image)?.url()}
                alt=""
                fill
                objectFit="contain"
              />
            </ImageContainer>
          </Image>

          <Text>
            <div>
              <CardHeader>
                <h3 className="h3-large">{content?.name}</h3>
                <div className="portable-text">
                  <PortableText value={content?.summary} />
                </div>
              </CardHeader>
              <CardFooter>
                <Link
                  text="View"
                  href={`projects/${content?.slug?.current}`}
                  variant="dark"
                  showChevron
                />
              </CardFooter>
            </div>
          </Text>
        </StyledLargeProjectCard>
      ))}
    </RowList>
  )
}
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  width: 50%;
`
const StyledLargeProjectCard = styled.article`
  // small-black
  display: flex;
  justify-content: space-between;
  gap: var(--size-24);
  :nth-child(even) {
    flex-direction: row-reverse;
    ${Text} {
      align-items: start !important;
    }
  }
  h3 {
    margin-bottom: var(--size-12);
    max-width: var(--text-width);
    max-width: 12ch;
  }
  p {
    margin-bottom: 0px;
    max-width: var(--text-width-small);
  }
`
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: var(--aspect-ratio-169);
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--card-box-shadow-white);
`
const Image = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`
const CardHeader = styled.div`
  margin-bottom: var(--size-8);
`
const CardBody = styled.div`
  margin-bottom: var(--size-12);
`
const CardFooter = styled.div``

export default LargeProjectCard
