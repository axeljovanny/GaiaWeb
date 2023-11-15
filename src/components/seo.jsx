import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {children}
      <meta
        name="keywords"
        content="Gaia Evolution, Spa, Salon, Beauty, Wellness, Organic, Illinois, Natural, Rejuvenation, Relaxation, Health, Haircuts, Styling, Facials, Massages, Manicure, Pedicure, Aveda, Eminence, Holistic, Skincare, Haircare, Body Treatments, Vegan, Cruelty-Free, Organic Products, Tranquility, Spa Experience, Personalized Services, Illinois Spa, Organic Beauty, Holistic Health"
      />
    </>
  )
}