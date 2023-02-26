import React from 'react'
import { NextSeo } from 'next-seo'
import client from 'lib/client'
import { queryMeta } from 'lib/queries'
import { Section, ArticleCard, SimplePageHeader } from 'components'

export default async function Page() {
  const blogs = await client.fetch(`*[_type == "blog"]`)
  const meta = await queryMeta(`Blog`)

  return (
    <>
      <NextSeo
        useAppDir={true}
        title={meta?.seo?.title}
        description={meta?.seo?.description}
      />
      <SimplePageHeader
        title="Blog"
        description="As an experienced Web developer, designer, and SEO expert, I offer a range of professional services to help you enhance your online presence. Whether you need a custom website, an engaging website design, or an effective SEO solution, I have the skills and expertise to deliver high-quality solutions that meet your unique needs. With a focus on collaboration, attention to detail, and a commitment to excellence, I am dedicated to helping you achieve your goals and succeed in the competitive online marketplace."
      />
      <Section>
        <ArticleCard content={blogs} />
      </Section>
    </>
  )
}

//  export default Page
