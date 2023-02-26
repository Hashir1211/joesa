import React from 'react'
import client from 'lib/client'
import { Section, ProjectCard, SimplePageHeader } from 'components'

async function getData(slug: any) {
  const products = await client.fetch(
    `*[_type == "product" && slug.current == "${slug}"][0]`,
  )
  return products
}

export default async function Page({ params: { slug } }) {
  // Initiate both requests in parallel
  const data = getData(slug)

  // Wait for the promises to resolve
  const [product] = await Promise.all([data])

  return <>{product && <h1>{product.name}</h1>}</>
}
