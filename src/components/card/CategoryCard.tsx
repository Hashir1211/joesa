'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { Image, Link, GridList, Button } from 'components'
import urlFor from 'lib/sanity.image'
import queries from 'styles/queries'
import { usePathname } from 'next/navigation'

interface Props {
  content: Content[]
  aspectRatio?: string
  dark?: boolean
}

interface Content {
  image: string
  name: string
  summary: string
  buttonText: string
  buttonHref: string
  _id: string
}
interface Tag {
  heading: string
}

type Types = {
  dark?: boolean
}

const CategoryCard: FC<Props> = (props) => {
  const pathname = usePathname()

  return (
    <GridList marginBottom="16" columns="1fr 1fr">
      {props?.content &&
        props?.content?.map((content: any) => (
          <StyledCategoryCard
            className="project-card"
            key={content?._id}
            dark={content?.dark}
          >
            <CardHeader>
              <h2 className="h3">{content?.name}</h2>
              <Image
                src={urlFor(content?.image)?.url()}
                alt=""
                aspectRatio="32"
                marginBottom="40"
              />
            </CardHeader>
            <p>{content?.summary}</p>
            {content?.dark ? (
              <Button
                text="test"
                href={`${pathname}/${content?.slug?.current}`}
                variant="large-white"
              />
            ) : (
              <Button
                text="test"
                href={`${pathname}/${content?.slug?.current}`}
                variant="large-black"
              />
            )}
          </StyledCategoryCard>
        ))}
    </GridList>
  )
}

const StyledCategoryCard = styled.article<Types>`
  // small-black
  padding: var(--size-16) var(--size-16);
  border-radius: var(--border-radius-large);
  width: 100%;
  background-color: ${(props) =>
    props.dark ? 'var(--background-color-secondary)' : 'var(--accent-7)'};
  color: ${(props) =>
    props.dark ? 'var(--text-color-secondary)' : 'var(--text-color-primary)'};
  h2 {
    margin-bottom: var(--size-8);
  }
  span {
    font-size: 2.5rem;
  }
  p {
    margin-bottom: var(--size-12);
    max-width: var(--text-width);
  }
  @media (${queries.desktop}) {
    padding: var(--size-12) var(--size-12);
  }
`
const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--size-8);
  div {
    color: var(--accent-5);
  }
`

export default CategoryCard
