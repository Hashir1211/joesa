'use client'

import React, { FC, useState } from 'react'
import styled from 'styled-components'
import queries from 'styles/queries'
import { ContactCard, Button } from 'components'

interface Props {
  content: Content[]
}

interface Content {
  heading: string
  overline: string
  paragraph: string
}

const sources = [
  { text: 'Instagram', value: 'instagram' },
  { text: 'TikTok', value: 'tiktok' },
  { text: 'LinkedIn', value: 'linkedin' },
  { text: 'Online marketplace', value: 'online-marketplace' },
  { text: 'Google', value: 'google' },
  { text: 'Other', value: 'other' },
]

const ContactForm: FC<Props> = (props) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [source, setSource] = useState('')
  const [subject, setSubject] = useState('Subject')
  const [message, setMessage] = useState('')

  //   Form validation state
  const [errors, setErrors] = useState({})

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send')

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullName.length <= 0) {
      tempErrors['fullName'] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }

  const handleSubmit = async (e) => {
    console.log('form submitted')
    e.preventDefault()

    let isValidForm = handleValidation()

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: email,
        fullname: fullName,
        subject: subject,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      console.log(error)
      return
    }
    console.log(fullName, email, subject, message)
  }

  return (
    <StyledContactForm>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Flex>
            <Left>
              <Field>
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="first"
                  name="fullname"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value)
                  }}
                />
              </Field>

              <Field>
                <label htmlFor="email">E-Mail</label>
                <input
                  type="text"
                  id="last"
                  name="email"
                  placeholder="E-Mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </Field>

              <Field>
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  type="text"
                  id="last"
                  name="phone-number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}
                />
              </Field>
            </Left>
            <Right>
              <Field>
                <label htmlFor="phone-number">
                  Where did you hear ainut me?
                </label>
                <select name="source">
                  {sources.map((source) => (
                    <option key={source.value} value={source.value}>
                      {source.text}
                    </option>
                  ))}
                </select>
              </Field>
              <Field>
                <label htmlFor="messege">Messege</label>
                <textarea
                  name="messege"
                  id=""
                  cols={30}
                  rows={10}
                  placeholder="Tell us about your project or request"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                ></textarea>
              </Field>
            </Right>
            <ContactCardContainer>
              <ContactCard />
            </ContactCardContainer>
          </Flex>
          <Button href="/" type="submit" text="Contact" variant="large-black" />
        </Form>
      </Content>
    </StyledContactForm>
  )
}

const StyledContactForm = styled.div``
const Content = styled.div`
  display: flex;
  flex-direction: row;
`
const Form = styled.form`
  width: 100%;
`
const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--size-8);
  margin-bottom: var(--size-12);
  @media (${queries.tablet}) {
    flex-direction: column;
  }
`
const ContactCardContainer = styled.div`
  display: flex;
  align-items: end;
`
const Left = styled.div`
  width: 50%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--size-6);
  @media (${queries.tablet}) {
    width: 100%;
  }
`
const Right = styled(Left)`
  justify-content: end;
`
const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  width: 100%;
`

export default ContactForm
