'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { Button, Image, RowList } from 'components'
import urlFor from 'lib/sanity.image'
import { PortableText } from '@portabletext/react'
import queries from 'styles/queries'
import useWindowSize from 'hooks/useWindowDimensions'

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
}
interface Tag {
  heading: string
}

const ProjectCard: FC<Props> = (props) => {
  // const { height, width } = useWindowDimensions() || {}
  const windowSize = useWindowSize() || {}
  return (
    <RowList>
      {props?.content?.map((content: any) => (
        <StyledProjectCard className="project-card" key={content?.name}>
          <Image
            src={urlFor(content?.image)?.url()}
            alt=""
            aspectRatio={`${windowSize?.width < 992 ? '169' : '219'}`}
            darkOverlay={0.2}
            borderRadius={16}
          />
          <Text>
            <CardHeader>
              <Categories>
                <Category>Web Design • Branding • SEO</Category>
              </Categories>

              <h3>
                {content?.name} <span className="hide-tablet"> - {content?.heading}</span>
              </h3>
              <div className="hide-mobile">
                <PortableText value={content?.summary} />
              </div>
            </CardHeader>
            <CardFooter>
              <Button text="View" href={`projects/${content?.slug?.current}`} variant="white" />
            </CardFooter>
          </Text>
        </StyledProjectCard>
      ))}
    </RowList>
  )
}

const StyledProjectCard = styled.article`
  // small-black
  position: relative;
  h3 {
    margin-bottom: var(--size-8);
    max-width: var(--text-width);
    @media (${queries.mobile}) {
      margin-bottom: var(--size-8);
    }
    @media (${queries.mobile}) {
      margin-bottom: 0;
    }
  }
  p {
    margin-bottom: 0px;
    max-width: var(--text-width);
  }
`
const CardHeader = styled.div`
  margin-bottom: var(--size-8);
`
const CardBody = styled.div`
  margin-bottom: var(--size-12);
`
const CardFooter = styled.div``
const Text = styled.div`
  z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  padding: 64px;
  width: 100%;
  height: 100%;
  top: 0;
  @media (${queries.desktop}) {
    padding: var(--size-12);
  }
  @media (${queries.tablet}) {
    padding: var(--size-8);
  }
  @media (${queries.mobile}) {
    padding: var(--size-6);
  }
`
const Categories = styled.div`
  margin-bottom: var(--size);
  font-weight: 500;
`
const Category = styled.div``

export default ProjectCard
