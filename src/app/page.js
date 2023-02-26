import React from 'react'
import client from 'lib/client'
import {
  Section,
  HomeHeader,
  ThreeColText,
  SectionHeading,
  Button,
  ServiceCard,
  ProjectCard,
  ArticleCard,
  Faqs,
  About,
  Principles,
  Testimonials,
} from 'components'

export default async function Page() {
  const services = await client.fetch(`*[_type == "service"]`)
  const featuredProjects = await client.fetch(`*[_type == "project" && featured == true]`)
  const blogs = await client.fetch(`*[_type == "blog"]`)
  const faqs = await client.fetch(`*[_type == "faq"]{..., faq_category->}`)
  const testimonials = await client.fetch(`*[_type == "testimonial"]{..., project->}`)

  return (
    <>
      <HomeHeader projects={featuredProjects} />
      <Section>
        <ThreeColText
          content={[
            {
              heading: 'Experience',
              overline: 'Projects',
              paragraph: `I've been building websites for over 7 years; my first was built when I was 13 years old. Because of this, I'm able to make sure that I'm following best practices that can only be gained through experience.`,
            },
            {
              heading: 'Versatile',
              overline: 'Skills',
              paragraph: `I have a broad spectrum of skills that enable me to ensure that every part of the project is completed to an extremely high standard. High-quality work is what I pride myself on.`,
            },
            {
              heading: 'Perfectionist',
              overline: 'OCD',
              paragraph: `Being a perfectionist ensures that all of my work is near-perfect, with no corners cut. I obsess over producing the best work possible by using best practices and latest/best technologies.`,
            },
          ]}
        />
      </Section>
      <Section>
        <ServiceCard content={services} />
        <Button text="Services" href="/services" variant={'large-black'} />
      </Section>
      <Section>
        <Principles
          content={[
            {
              name: 'Quality',
              heading: 'Over quantity wins',
              paragraph:
                'I take on a limited number of projects at one time. This quality control means I can give each one exactly what it needs – focus and time.',
            },
            {
              name: 'Obsession',
              heading: 'For work and high standards',
              paragraph:
                'A healthy obsession for the services I provide and the quality of which I deliver them.',
            },
            {
              name: 'Minimal',
              heading: 'In thinking, in style.',
              paragraph:
                'Simple, minimal and effective. This is my mantra and method. Clean code, fuss-free interfaces and expert execution, design as it should be.',
            },
            {
              name: 'Considered',
              heading: 'Smart plan followed by hard work',
              paragraph:
                'Hard work without a smart plan is misguided and will therefore result in low-quality output, smart plan first, followed by hard work.',
            },
          ]}
        />
      </Section>
      <Section variant="dark">
        <About />
      </Section>
      <Section>
        <SectionHeading heading="Projects" subheading="Some of my recent projects" />
        <ProjectCard content={featuredProjects} />
        <Button text="Projects" href="/projects" variant={'large-black'} />
      </Section>
      <Section>
        <SectionHeading heading="Blogs" subheading="a paragraph about this section" center />
        <ArticleCard content={blogs} aspectRatio={43} />
        <Button text="All Blogs" href="/blog" variant={'large-black'} />
      </Section>
      <Section variant="dark">
        <Testimonials content={testimonials} />
      </Section>
      <Section>
        <SectionHeading heading="FAQ's" subheading="Frequently asked questions" center />
        <Faqs content={faqs} />
      </Section>
    </>
  )
}
