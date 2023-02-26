// 'use client'

import React from 'react'
import client from 'lib/client'
import { Section, ProductPageHeader, ProductCard } from 'components'

async function getProductCategories(subcategory: any) {
  const productCategories = await client.fetch(
    `*[_type == "product_subcategory" && slug.current == "${subcategory}"][0]{..., product_categories[]->, product_subcategories[]->, featured_products[]->, features[]->}`,
  )
  return productCategories
}

export default async function Page({ params: { subcategory } }) {
  const productCategoriesData = getProductCategories(subcategory)
  const [productCategory] = await Promise.all([productCategoriesData])
  const products = await client.fetch(
    `*[_type == "product" && references('${productCategory?._id}')]`,
  )

  return (
    <>
      <ProductPageHeader
        name={productCategory?.name}
        heading={productCategory?.heading}
        summary={productCategory?.summary}
      />
      <Section variant="header">
        <ProductCard content={products} />
      </Section>
    </>
  )
}

//  export default Page
