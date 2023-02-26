import React from 'react'
import { queryMeta } from 'lib/queries'
import { NextSeo } from 'next-seo'
import { Header, AboutHeader } from 'components'
const meta = await queryMeta(`Profile`)

export default async function Page() {
  return (
    <>
      <NextSeo
        useAppDir={true}
        title={meta?.seo?.title}
        description={meta?.seo?.description}
      />
      <Header>
        <AboutHeader />
      </Header>
    </>
  )
}
