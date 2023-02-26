import React from 'react'
import { NextSeo } from 'next-seo'
import client from 'lib/client'
import { queryMeta } from 'lib/queries'
import { Section, ProjectCard, SimplePageHeader } from 'components'

export default async function Page() {
  const projects = await client.fetch(`*[_type == "project"]`)
  const meta = await queryMeta(`Projects`)
  return (
    <>
      <NextSeo
        useAppDir={true}
        title={meta?.seo?.title}
        description={meta?.seo?.description}
      />
      <SimplePageHeader
        title="Projects"
        description="On this page, I'm featuring a curated selection of my most impressive work, including stunning designs, user-friendly interfaces, and powerful functionality. From e-commerce platforms to content management systems, I have the skills and experience to tackle any project, no matter how complex or challenging."
      />
      <Section>
        <ProjectCard content={projects} />
      </Section>
    </>
  )
}

//  export default Page
