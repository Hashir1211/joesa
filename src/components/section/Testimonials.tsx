'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import queries from 'styles/queries'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { Link } from 'components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import urlFor from 'lib/sanity.image'

interface Props {
  content: Content[]
}

interface Content {
  heading: string
  text: string
  _id: string
  client_avatar: string
  client_name: string
  client_position: string
  client_linkedin: string
}

const Testimonials: FC<Props> = (props) => {
  return (
    <StyledTestimonials>
      <Swiper
        modules={[Pagination, Autoplay]}
        freeMode={true}
        spaceBetween={192}
        draggable={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          992: {
            slidesPerView: 2,
          },
        }}
      >
        {props.content.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <Testimonial>
              <TestimonialBody>
                <h3>{testimonial.heading}</h3>
                <p>{testimonial.text}</p>
              </TestimonialBody>
              <NextLink
                href={`${testimonial?.client_linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Client>
                  <Avatar>
                    <NextImage
                      src={urlFor(testimonial?.client_avatar)?.url()}
                      alt=""
                      fill
                      objectFit="cover"
                    />
                  </Avatar>
                  <ClientBody>
                    <h3 className="card-heading">{testimonial?.client_name}</h3>
                    <div className="card-subheading">
                      {testimonial?.client_position}
                    </div>
                  </ClientBody>
                </Client>
              </NextLink>

              <Link
                href={`projects/${testimonial?.project?.slug?.current}`}
                text="View project"
                variant="dark"
                showChevron
              />
            </Testimonial>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledTestimonials>
  )
}

const StyledTestimonials = styled.div`
  color: var(--text-color-secondary);
`
const Testimonial = styled.div``

const TestimonialBody = styled.div`
  margin-bottom: var(--size-10);
`
const Client = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--size-4);
  margin-bottom: var(--size-10);
`
const ClientBody = styled.div``
const Avatar = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: var(--border-radius-circle);
`

export default Testimonials
