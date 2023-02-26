import client from 'lib/client'

export async function queryMeta(page) {
  const data = await client.fetch(`*[_type == "page" && page == '${page}'][0]`)
  return data
}
