import ImageUrlBuilder from '@sanity/image-url'
import client from './client'

const builder = ImageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function urlFor(source) {
  if (source) {
    return builder.image(source)
  }
  return
}
