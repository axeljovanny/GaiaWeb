import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
      <meta
        name="keywords"
        content="Gaia Evolution, Spa, Salon, Beauty, Wellness, Organic, Illinois, Natural, Rejuvenation, Relaxation, Health, Haircuts, Facials, Massages, Manicure, Pedicure"
      />
    </>
  )
}