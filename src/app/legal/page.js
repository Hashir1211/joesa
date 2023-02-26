// 'use client'

import React from 'react'
import { queryMeta } from 'lib/queries'
import { NextSeo } from 'next-seo'
import { Section, SimplePageHeader } from 'components'
import { PortableText } from '@portabletext/react'
const meta = await queryMeta(`Legal`)

export default async function Page() {
  return (
    <>
      <NextSeo
        useAppDir={true}
        title={meta?.seo?.title}
        description={meta?.seo?.description}
      />
      <SimplePageHeader
        title="Legal"
        description="Here you can find legal information that covers this site's cookie policies and terms and conditions."
      />
      <Section>
        <PortableText value={``} />
      </Section>
    </>
  )
}
