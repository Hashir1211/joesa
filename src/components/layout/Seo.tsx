'use client'

import React, { FC } from 'react'
import { Container } from 'components'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'

interface Props {
  data: any
}

const Seo: FC<Props> = (props) => {
  return (
    <>
      {props?.data?.map((seo: any) => (
        <NextSeo title={seo?.title} description={seo?.description} />
      ))}
    </>
  )
}

export default Seo
