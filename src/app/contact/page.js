import React from 'react'
import { NextSeo } from 'next-seo'
import { queryMeta } from 'lib/queries'
import { Header } from 'components'
const meta = await queryMeta(`Contact`)

export default async function Page() {
  return (
    <>
      <NextSeo
        useAppDir={true}
        title={meta?.seo?.title}
        description={meta?.seo?.description}
      />
      <Header></Header>
    </>
  )
}
