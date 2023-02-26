import React from 'react'
import client from 'lib/client'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { SimplePageHeader, FullImage } from 'components'

async function getProjects(slug: any) {
  const projects = await client.fetch(
    `*[_type == "project" && slug.current == "${slug}"][0]`,
  )
  return projects
}

export default async function Page({ params: { slug } }) {
  const projectData = getProjects(slug)
  const [project] = await Promise.all([projectData])

  return (
    <>
      <NextSeo
        useAppDir={true}
        title={project?.seo?.title}
        description={project?.seo?.description}
      ></NextSeo>
      <SimplePageHeader
        portableText
        title={project?.name}
        heading={project?.heading}
        description={project?.summary}
        tags={project?.tags}
        buttonText="View website"
        buttonHref={project?.links?.website}
      />
      <FullImage image={project?.image} />
    </>
  )
}
