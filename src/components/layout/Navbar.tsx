'use client'

import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Button, Avatar, Container, Link } from 'components'
import NextLink from 'next/link'
import queries from 'styles/queries'
import { FiMenu, FiX } from 'react-icons/fi'
import useScrollBlock from 'hooks/useScrollBlock'

interface Props {
  variant: string
}

const navItems = [
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Web Design', href: '/services/web-design' },
      { name: 'SEO', href: '/services/seo' },
    ],
  },
  {
    name: 'Profile',
    href: '/profile',
  },
  {
    name: 'Store',
    href: '/store',
    dropdown: [{ name: 'Notion Templates', href: '/store/notion-templates' }],
  },
]

const Navbar: FC<Props> = (props) => {
  const [navOpen, setNavOpen] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()

  const handleToggle = () => {
    setNavOpen(!navOpen)
    blockScroll()
  }
  const closeMenu = () => {
    setNavOpen(false)
    allowScroll()
  }

  return (
    <StyledNavbar
      className={`${props.variant} ${navOpen ? 'navbar-open' : ''}`}
    >
      <Container>
        <Flex>
          <Menu>
            <Left>
              <Brand className={`${navOpen ? 'navbar-brand' : ''}`}>
                <NextLink href="/">
                  <BrandFlex>
                    <Avatar size={56} />
                    <span>Joe Matkin</span>
                  </BrandFlex>
                </NextLink>
                {!navOpen && (
                  <FiMenu
                    size={28}
                    className={`navbar-mobile ${
                      navOpen ? 'navbar-closed' : ''
                    }`}
                    onClick={handleToggle}
                  />
                )}

                {navOpen && (
                  <FiX
                    size={28}
                    className={`navbar-mobile ${
                      navOpen ? '' : 'navbar-closed'
                    }`}
                    onClick={closeMenu}
                  />
                )}
              </Brand>
            </Left>
            <Links className={`${navOpen ? 'navbar-links' : ''}`}>
              {navItems.map((navItem) => (
                <MenuItem key={navItem.name} onClick={closeMenu}>
                  {props.variant == 'dark' ? (
                    <Link
                      key={navItem.name}
                      href={navItem.href}
                      text={navItem.name}
                      variant="nav-dark"
                    />
                  ) : (
                    <Link
                      key={navItem.name}
                      href={navItem.href}
                      text={navItem.name}
                      variant="nav"
                    />
                  )}
                  <>
                    {navItem.dropdown && (
                      <Dropdown className="navbar-closed">
                        {navItem.dropdown?.map((dropdown) => (
                          <DropdownItem key={dropdown.name}>
                            <Link
                              href={dropdown.href}
                              text={dropdown.name}
                              variant="dropdown"
                            />
                          </DropdownItem>
                        ))}
                      </Dropdown>
                    )}
                  </>
                </MenuItem>
              ))}
            </Links>
          </Menu>
          {props.variant == 'dark' ? (
            <Button
              text="Contact"
              href="/contact"
              variant="white"
              className={`${navOpen ? '' : 'navbar-closed'}`}
            />
          ) : (
            <Button
              text="Contact"
              href="/contact"
              className={`${navOpen ? '' : 'navbar-closed'}`}
            />
          )}
        </Flex>
      </Container>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  z-index: 999;
  padding: 24px 0;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.25);
  border-bottom: 1px solid var(--accent-4);
  position: fixed;
  width: 100%;
  top: 0;
  &.dark {
    color: var(--text-color-secondary) !important;
    background-color: rgba(0, 0, 0, 0.25) !important;
  }
  @media (${queries.desktop}) {
    z-index: 9999999999 !important;
  }
`
const Dropdown = styled.ul`
  list-style: none;
  position: absolute;
  display: none;
  flex-direction: column;
  gap: var(--size-6);
  background-color: var(--background-color-primary);
  padding: var(--size-8);
  box-shadow: var(--card-box-shadow);
  border-radius: var(--border-radius);
`
const DropdownItem = styled.li``
const MenuItem = styled.div`
  &:hover ${Dropdown} {
    display: flex;
  }
`
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (${queries.desktop}) {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
  }
`
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 48px;
  @media (${queries.desktop}) {
    width: 100%;
    flex-direction: column;
    align-items: start;
  }
`
const Links = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;

  display: flex;
  flex-direction: row;
  column-gap: 16px;
  @media (${queries.desktop}) {
    display: none;
    flex-direction: column;
    row-gap: 16px;
  }
`
const StyledLink = styled.li`
  padding: 16px;
  margin: 0px 16px;
  position: relative;
  :hover {
    color: transparent;
    background: var(--gradient-3);
    overflow: hidden;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`
const Left = styled.div`
  width: 100%;
`
const Brand = styled.div`
  display: flex;
  @media (${queries.desktop}) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`
const BrandFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--size-6);
  span {
    font-weight: 700;
  }
  @media (${queries.desktop}) {
    width: 100%;
  }
`

export default Navbar
