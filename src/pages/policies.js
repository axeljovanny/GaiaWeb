import React from "react"


import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import { Policies } from "../components/policies";
import { Navbar } from "../components/navbar";
import { Helmet } from "react-helmet";
import { SEO } from "../components/seo";





const PoliciesPage = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
          query {
            backgroundImage123: file(relativePath: {eq: "fondo3.jpg"}) {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  width: 2000
                  webpOptions: {quality: 90}
                  layout: CONSTRAINED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        `
  )
  const image = getImage(backgroundImage123)
  const canonicalUrl = "https://gaiaevolutionspaandsalon.com/policies";


  return (
    <html lang="en">
      <BgImage image={image} className="masthead" />
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navbar siteTitle="about" />
      <div className="content">
        <Policies></Policies>
      </div>
    </html>
  )
};


export default PoliciesPage

export const Head = () => (
  <SEO title={"Gaia Evolution Policies & Guidelines"} description={"Learn about Gaia Evolution's policies for a positive guest experience. Review our guidelines to make the most of your visit."} />
)