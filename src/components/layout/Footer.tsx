'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { Container, Link } from 'components'
import Image from 'next/image'
import NextLink from 'next/link'
import Behance from '../../../public/social/behance.svg'
import Clutch from '../../../public/social/clutch.svg'
import Dribble from '../../../public/social/dribble.svg'
import Facebook from '../../../public/social/facebook.svg'
import Instagram from '../../../public/social/instagram.svg'
import LinkedIn from '../../../public/social/linkedin.svg'
import Telegram from '../../../public/social/telegram.svg'
import WhatsApp from '../../../public/social/whatsapp.svg'
import queries from 'styles/queries'

interface Props {
  size?: number
  children?: JSX.Element
}

const footerItems = [
  {
    heading: 'Pages',
    links: [
      { text: 'Contact', href: '/contact' },
      { text: 'Projects', href: '/projects' },
      { text: 'Profile', href: '/profile' },
      { text: 'Blog', href: '/blog' },
      { text: 'Store', href: '/store' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { text: 'Web Development', href: '/services/web-development' },
      { text: 'Web Design', href: '/services/web-design' },
      { text: 'SEO', href: '/services/seo' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { text: 'Jewellery', href: '/' },
      { text: 'Restaurants', href: '/' },
      { text: 'Real Estate', href: '/' },
    ],
  },
]

const socialIcons = [
  {
    image: Behance,
    href: 'https://www.behance.net/joematkin',
  },
  {
    image: Clutch,
    href: 'https://clutch.co/profile/joe-matkin',
  },
  {
    image: Dribble,
    href: 'https://dribbble.com/JoeMatkin',
  },
  {
    image: Facebook,
    href: 'https://www.facebook.com/joematkin',
  },
  {
    image: Instagram,
    href: 'https://www.instagram.com/joe.matkin',
  },
  {
    image: LinkedIn,
    href: 'https://www.linkedin.com/in/joematkin',
  },
  {
    image: Telegram,
    href: 'https://www.telegram.me/in/joematkin',
  },
  {
    image: WhatsApp,
    href: 'https://wa.me/7717123455',
  },
]

const Footer: FC<Props> = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <Top>
            <Brand>
              <h2>Joe Matkin</h2>
              <p>
                End-to-End Development agency, building digital products that
                make sense. Represented in USA, UK, Belgium, Switzerland. Main
                headquarters in Ukraine
              </p>
            </Brand>
            {footerItems.map((footerItem) => (
              <Menu key={footerItem.heading}>
                <h3 className="h6 gradient-text-1">{footerItem.heading}</h3>
                <MenuLinks>
                  {footerItem.links.map((link) => (
                    <MenuLink key={link.text}>
                      <Link
                        key={link.href}
                        text={link.text}
                        href={link.href}
                        variant="footer"
                      />
                    </MenuLink>
                  ))}
                </MenuLinks>
              </Menu>
            ))}
          </Top>
          <Bottom>
            <span>
              <Link
                href="/legal"
                text="Privacy Policy & Cookies Policy"
                variant="small-footer"
              />
            </span>
            <SocialLinks>
              <SocialLinksList className="list-style-none">
                {socialIcons.map((icon) => (
                  <NextLink
                    href={icon.href}
                    key={icon.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <SocialLink>
                      <Image src={icon.image} alt="" width={24} height={24} />
                    </SocialLink>
                  </NextLink>
                ))}
              </SocialLinksList>
            </SocialLinks>
            <Copyright>
              @ Copyright Joe Matkin 2023. All rights reserved
            </Copyright>
          </Bottom>
        </Flex>
      </Container>
    </StyledFooter>
  )
}
const StyledFooter = styled.footer`
  padding: var(--size-16) 0;
  background-color: var(--background-color-tertiary);
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
`
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: var(--size-24);
  @media (${queries.tablet}) {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--size-16);
  }
`
const Brand = styled.div`
  // width: var(--width-33p);
  max-width: 320px;
  h2 {
    font-size: 2rem;
    margin-bottom: var(--size-2);
  }
  p {
    font-size: 0.875rem;
    max-width: var(--text-width-small);
  }
  @media (${queries.tablet}) {
    min-width: 100%;
  }
`
const Menu = styled.div``
const MenuLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  margin: 0;
  row-gap: var(--size-2);
  @media (${queries.tablet}) {
  }
`
const MenuLink = styled.li``
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (${queries.tablet}) {
    flex-wrap: wrap;
    gap: 48px;
    justify-content: center;
  }
  span {
    font-size: 0.875rem;
    width: 33.33%;
    color: var(--accent-1) !important;
    @media (${queries.tablet}) {
      width: 100%;
    }
  }

  div {
    @media (${queries.tablet}) {
      width: 100%;
      display: flex;
      justify-content: start;
    }
  }

  address {
    @media (${queries.tablet}) {
      order: -1;
      width: auto;
    }
  }
`
const SocialLinks = styled.address`
  width: 33.33%;
`
const SocialLinksList = styled.ul`
  display: flex;
  justify-content: center;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  gap: 32px;
  flex-wrap: wrap;
`
const SocialLink = styled.li``
const Copyright = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: end;
  font-size: 0.875rem;
  color: var(--accent-1);
`
export default Footer
