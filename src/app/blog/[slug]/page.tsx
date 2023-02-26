import React from 'react'

import { NextSeo } from 'next-seo'
import client from 'lib/client'
import { Section, ProjectCard, SimplePageHeader } from 'components'

async function getData(slug: any) {
  const projects = await client.fetch(
    `*[_type == "blog" && slug.current == "${slug}"][0]`,
  )
  return projects
}

export default async function Page({ params: { slug } }) {
  // Initiate both requests in parallel
  const blogData = getData(slug)

  // Wait for the promises to resolve
  const [blog] = await Promise.all([blogData])

  return <>{blog && <h1>{blog.name}</h1>}</>
}
