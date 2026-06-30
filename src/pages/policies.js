import React from "react"


import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Policies } from "../components/policies";
import { Navbar } from "../components/navbar";
import { SEO } from "../components/seo";
import { CANONICAL } from "../utils/urls";
import AnnouncementBar from "../components/AnnouncementBar";





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


  return (
    <>
      <GatsbyImage image={image} alt="" className="masthead" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1}} />
      <AnnouncementBar />
      <Navbar siteTitle="about" />
      <div className="content">
        <Policies></Policies>
      </div>
    </>
  )
};


export default PoliciesPage

export const Head = () => (
  <SEO title={"Gaia Evolution Policies & Guidelines"} description={"Learn about Gaia Evolution's policies for a positive guest experience. Review our guidelines to make the most of your visit."} canonical={CANONICAL.policies} />
)