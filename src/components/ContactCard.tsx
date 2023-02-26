'use client'

import React, { FC } from 'react'
import styled from 'styled-components'
import { Link, Avatar, Image, Button } from 'components'
import about from '../../../public/portrait.jpg'
import queries from 'styles/queries'

interface Props {}

const ContactCard: FC<Props> = (props) => {
  function preventDefault() {
    preventDefault()
  }
  return (
    <StyledContactCard>
      <Body>
        <Avatar size={80} />
        <Text>
          <h3 className="card-heading">Joe Matkin</h3>
          <Links>
            <Link href="tel:+44 0717123455" text="+44 07717 123455" variant="regular" />
            <Link href="mailto:hello@joematkin.com" text="hello@joematkin.com" variant="regular" />
          </Links>
        </Text>
      </Body>
      {1 > 2 && (
        <Button
          href="https://calendly.com/joematkin/30min"
          text="Book a call"
          type="button"
          onClick={preventDefault}
        />
      )}
    </StyledContactCard>
  )
}

const StyledContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--size-6) var(--size-12);
  background-color: var(--background-color-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--card-box-shadow);
  border-image: 1px solid var(--gradient-5);
  @media (${queries.mobile}) {
    //padding: var(--size-4) var(--size-8);
  }
`
const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: var(--size-8);
  @media (${queries.mobile}) {
    flex-direction: column;
    align-items: start;
  }
`
const Text = styled.address`
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: var(--size-4);
  }
`
const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-2);
`

export default ContactCard
