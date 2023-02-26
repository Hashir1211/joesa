import React from 'react'
import { NextSeo } from 'next-seo'
import client from 'lib/client'
import { queryMeta } from 'lib/queries'
import { Section, ServiceCard, SimplePageHeader } from 'components'

export default async function Page() {
  const services = await client.fetch(`*[_type == "service"]`)
  const meta = await queryMeta(`Services`)
  return (
    <>
      <NextSeo
        useAppDir={true}
        title={meta?.seo?.title}
        description={meta?.seo?.description}
      />
      <SimplePageHeader
        title="Services"
        description="As an experienced Web developer, designer, and SEO expert, I offer a range of professional services to help you enhance your online presence. Whether you need a custom website, an engaging website design, or an effective SEO solution, I have the skills and expertise to deliver high-quality solutions that meet your unique needs. With a focus on collaboration, attention to detail, and a commitment to excellence, I am dedicated to helping you achieve your goals and succeed in the competitive online marketplace."
      />
      <Section>
        <ServiceCard content={services} />
      </Section>
    </>
  )
}
