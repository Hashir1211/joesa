'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import heroPortrait from '../../../public/hero-portrait.jpg'
import Home3 from '../../../public/portrait-1.png'
import queries from 'styles/queries'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Button, SmallCard } from 'components'

interface Props {
  size?: number
  children?: JSX.Element
  projects?: []
}

const HomeHeader: FC<Props> = (props) => {
  console.log('Props', props, 'props')
  return (
    <StyledHeader>
      <Container>
        <Heading>
          <h1 className="hero-heading-large">Joe Matkin</h1>
          <p className="body-large mb-40 width-1000">
            <b>I’m Joe - a designer/developer and creator based in the UK.</b> I
            spend most of my time building and developing, whether it be web
            applications, digital assets or brands. Often I’m doing this from
            some remote location in the middle of nowhere.
          </p>
        </Heading>
        <Grid>
          <Left>
            <LeftImageContainer>
              <Image src={Home3} alt="" fill style={{ objectFit: 'cover' }} />
            </LeftImageContainer>
          </Left>
          <Right>
            {props.projects?.length > 0 && (
              <Swiper
                modules={[Autoplay]}
                freeMode={true}
                spaceBetween={0}
                draggable={true}
                slidesPerView={1}
                observer={true}
                spaceBetween={32}
                autoplay={{
                  delay: 3000,
                }}
              >
                {props?.projects?.map((project) => (
                  <SwiperSlide>
                    <SmallCard content={project} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Right>
        </Grid>
        <Button
          text="Book a call"
          href="https://calendly.com/joematkin/30min"
          variant="large-black"
        ></Button>
      </Container>
    </StyledHeader>
  )
}

const Heading = styled.div`
  margin-bottom: var(--size-10);
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-width: var(--page-width);
  padding: 0 var(--page-padding);
  margin: auto;
  padding-top: var(--navbar-height);
  @media (${queries.tablet}) {
    height: auto;
    padding: 0 calc(var(--page-padding) / 1.5);
    padding-top: calc(var(--navbar-height) + var(--page-padding));
  }
  @media (${queries.mobile}) {
    padding: 0 calc(var(--page-padding) / 2);
    padding-top: calc(var(--navbar-height) + var(--page-padding));
  }
`
const Container = styled.div`
  width: 100%;
`
const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: var(--gap);
  margin-bottom: 48px;

  @media (${queries.tablet}) {
    flex-direction: column;
  }
`
const Left = styled.div`
  width: 60%;
  @media (${queries.tablet}) {
    width: 100%;
  }
`
const LeftImageContainer = styled.div`
  position: relative;
  padding-top: var(--aspect-ratio-169);
  overflow: hidden;
  border-radius: var(--border-radius-large);
`
const Right = styled.div`
  display: flex;
  justify-content: end;
  width: 40%;
  height: 100%;
  flex-direction: column;
  gap: var(--gap);

  @media (${queries.tablet}) {
    display: none;
  }
`
const RightImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  padding-top: var(--aspect-ratio-169);
`
const Text = styled.div`
  z-index: 1;
  position: absolute;
  left: 24px;
  bottom: 24px;
  h5 {
    font-size: var(--size-6);
    font-weight: 700;
    color: var(--text-color-secondary) !important;
  }
`
const RightServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--gap);
  display: none;
`
const Service = styled.div`
  text-align: center;
  aspect-ratio: 1 / 1;
  width: 33.33333%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  box-shadow: var(--card-box-shadow);
`

export default HomeHeader
