'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { Image, Link, GridList } from 'components'
import urlFor from 'lib/sanity.image'

interface Props {
  content: Content[]
  aspectRatio?: string
}

interface Content {
  image: string
  name: string
  heading: string
  paragraph: string
  button_link: string
  tags: Tag[]
  _id: string
}
interface Tag {
  heading: string
}

const ArticleCard: FC<Props> = (props) => {
  return (
    <GridList marginBottom="16">
      {props.content.map((content: any) => (
        <StyledArticleCard className="project-card" key={content._id}>
          <Image
            src={urlFor(content.main_image).url()}
            alt=""
            aspectRatio="169"
            marginBottom="32"
          />
          <CardHeader>
            <h3>{content.name}</h3>
            <p>{content.summary}</p>
          </CardHeader>
          <Link
            text="View"
            href={`blog/${content.slug.current}`}
            variant="large-black"
            showChevron
          />
        </StyledArticleCard>
      ))}
    </GridList>
  )
}

const StyledArticleCard = styled.article`
  // small-black
  width: 100%;
  h3 {
    margin-bottom: var(--size-4);
    max-width: var(--text-width);
  }
  span {
    font-size: 2.5rem;
  }
  p {
    margin-bottom: 0px;
    max-width: var(--text-width);
  }
`
const CardHeader = styled.div`
  margin-bottom: var(--size-8);
`

export default ArticleCard
