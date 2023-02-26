// 'use client'

import React from 'react'
import client from 'lib/client'
import {
  Section,
  FeaturedProduct,
  ProductPageHeader,
  CategoryCard,
  TextImage,
  ProductCard,
} from 'components'

async function getProductCategories(category: any) {
  const productCategories = await client.fetch(
    `*[_type == "product_category" && slug.current == "${category}"][0]{..., product_categories[]->, product_subcategories[]->, featured_products[]->, features[]->}`,
  )
  return productCategories
}

export default async function Page({ params: { category } }) {
  // Initiate both requests in parallel
  const productCategoriesData = getProductCategories(category)
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
        features={[
          { name: 'Increased Productivity' },
          { name: 'Control Your Life' },
          { name: 'Achieve Goals' },
        ]}
        buttonHref="/"
        buttonText="View Templates"
        portableText
      />
      <Section>
        <CategoryCard content={productCategory?.product_subcategories} />
      </Section>
      <Section variant="dark">
        <FeaturedProduct
          name={productCategory?.featured_products[0]?.name}
          heading={productCategory?.featured_products[0]?.featured_heading}
          image={productCategory?.featured_products[0]?.image}
          features={productCategory?.featured_products[0]?.features}
          price={productCategory?.featured_products[0]?.price}
          dark
        />
      </Section>
      <Section>
        <TextImage
          heading={productCategory?.text_image_sections[0]?.heading}
          paragraph={productCategory?.text_image_sections[0]?.paragraph}
          buttonText="Take Control"
          buttonHref="/"
          image={productCategory?.text_image_sections[0]?.image}
        />
      </Section>
      <Section>
        <TextImage
          heading={productCategory?.text_image_sections[1]?.heading}
          paragraph={productCategory?.text_image_sections[1]?.paragraph}
          buttonText="Take Control"
          buttonHref="/"
          image={productCategory?.text_image_sections[1]?.image}
          flexReverse
        />
      </Section>
      <Section>
        <ProductCard content={products} />
      </Section>
    </>
  )
}
