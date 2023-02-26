// 'use client'

import React from 'react'

import { NextSeo } from 'next-seo'
import client from 'lib/client'
import { queryMeta } from 'lib/queries'
import { Section, ProductCard, SimplePageHeader, Parallax } from 'components'

export default async function Page() {
  const products = await client.fetch(`*[_type == "product"]`)
  const meta = await queryMeta(`Store`)

  return (
    <>
      <NextSeo
        useAppDir={true}
        title={meta?.seo?.title}
        description={meta?.seo?.description}
      />
      <SimplePageHeader
        title="Store"
        description="Blazing fast light house scores. iPad Pro features an Ultra Wide camera with a 12MP sensor and a 122‑degree field of view, perfect for capturing photos and video for social posts, FaceTime calls with Centre Stage, or epic Pxortrait mode selfies. And it works with the TrueDepth camera to securely unlock iPad Pro with Face ID."
      />
      <Section>
        <Parallax />
      </Section>
      <Section>
        <ProductCard content={products} />
      </Section>
    </>
  )
}

//  export default Page
