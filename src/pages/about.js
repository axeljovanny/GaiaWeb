import React, {useState} from "react"
import { graphql, useStaticQuery } from 'gatsby'

import { getImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { AdvImage, Gift } from "../styles/js/home"

import { Navbar } from "../components/navbar"
import { Footer } from "../components"

// Constantes
import { About, HeroAbout } from "../components/about/about"
import AboutGallery from "../components/about/gallery"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { SEO } from "../components/seo"

export const query = graphql`
  query ($language: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const AboutPage = ({ data }) => {

  const { siteUrl } = data.site.siteMetadata;
  const canonicalUrl = "https://gaiaevolutionspaandsalon.com/about";

  const [isOpen, setIsOpen] = useState(false);
  const itemVariants = {
    open: {
      opacity: 1,
      x: "20%",
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 1, x: "75%", transition: { duration: 0.2 } }
  };


  return (
    <Layout>
       <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <HeroAbout />
      <About/>
      <AboutGallery/>
      <Gift 
      initial={false}
      animate={isOpen ? "open" : "closed"} >
        <AdvImage
        href={giftcardurl} rel="noreferrer" target="_blank"
        onHoverStart={() => setIsOpen(!isOpen)}
        onHoverEnd={() => setIsOpen(!isOpen)}
        variants={itemVariants}>
          <StaticImage 
          src="../images/Home/PNG/Tarjeta.png" 
          alt="GiftMovil" 
          placeholder="blurred"
          breakpoints={[750, 1080, 1366, 1920]}
          
          layout="constrained"
          className="gift"
          />
        </AdvImage>
        <AdvImage movil
        href={giftcardurl} rel="noreferrer" target="_blank">
          <StaticImage 
          src="../images/Home/PNG/TarjetaRecortada.png" 
          alt="GiftMovil" 
          placeholder="blurred" 
          layout="constrained"
          breakpoints={[750, 1080, 1366, 1920]}
          className="gift"
          />
        </AdvImage>
      </Gift>
       <Navbar siteTitle="about"/>
      <Footer></Footer>
    </Layout>
  )
};

export default AboutPage

export const Head = () => (
  <SEO title={"Discover Gaia Evolution's Essence"}description={"Explore the heart of Gaia Evolution. Learn about our commitment to well-being, natural products, and our mission to impact your skin, body, and soul."}/>
)
