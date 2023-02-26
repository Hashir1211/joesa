import { NextSeo, DefaultSeo } from 'next-seo'

export default async function Head() {
  return (
    <>
      <NextSeo useAppDir={true} titleTemplate="%s" />
    </>
  )
}
