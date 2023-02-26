import React from 'react'
import client from 'lib/client'
import { PortableText } from '@portabletext/react'
import {
  Section,
  LargeProjectCard,
  ServiceHeader,
  LargeSectionHeading,
  ServiceProcess,
  ServiceSolution,
  Faqs,
} from 'components'

async function getServices(solution: any) {
  const services = await client.fetch(
    `*[_type == "service" && slug.current == "${solution}"]{..., faqs[]->, solutions[]->}`,
  )
  return services
}

export default async function Page({ params: { solution } }) {
  const servicesData = getServices(solution)

  const [service] = await Promise.all([servicesData])
  const serviceData = service[0]

  return (
    <>
      <ServiceHeader
        name={serviceData?.name}
        summary={serviceData?.summary}
        image={serviceData?.image}
      />
      <Section variant="dark">
        <div>
          <LargeSectionHeading
            heading="Work"
            description={`Some of my recent ${serviceData?.name} work.`}
          />
          <LargeProjectCard content={serviceData?.projects} />
        </div>
      </Section>
      <Section>
        <div className="portable-text-service-content">
          <PortableText value={serviceData?.content} />
        </div>
      </Section>
      <Section variant="dark">
        <ServiceProcess content={serviceData?.process} />
      </Section>
      <Section variant="dark">
        <ServiceSolution content={serviceData?.solutions} />
      </Section>
      <Section variant="dark">
        <>
          <LargeSectionHeading
            heading={`FAQ's`}
            description="Frequently asked questions"
          />
          <Faqs content={serviceData?.faqs} />
        </>
      </Section>
    </>
  )
}
