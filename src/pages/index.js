import React, { useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
// Componentes
import { Navbar } from "../components/navbar";
import { Bodycare, Haircare, Hero, Maps, Products, Skincare, Wedo } from "../components/home";
import { Footer } from "../components"
// Estilos
import { AdvImage, Gift, StyledHair, StyledSkin } from "../styles/js/home";
// Constantes
// CSS
import '../styles/css/home.css'
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { SEO } from "../components/seo";
import PromoBanner from "../components/promoBanner";

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


const IndexPage = ({ data }) => {
  const canonicalUrl = "https://gaiaevolutionspaandsalon.com";
  const { siteUrl } = data.site.siteMetadata;

  const [isOpen, setIsOpen] = useState(false);
  const itemVariants = {
    open: {
      opacity: 1,
      x: "20%",
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 1, x: "75%", transition: { duration: 0.2 } }
  };

  const giftcardurl ="https://book.salonbiz.com/widget/#/booking/purchase-gift-card?comToken=c6615t202407091845p58fJw38866o38Aaju4sA";

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Layout>
      {/* <PromoBanner/>*/}
        <Hero />
        <Wedo />
        <StyledSkin>
          <Skincare />
        </StyledSkin>
        <StyledHair>
          <Haircare />
        </StyledHair>
        <StyledSkin>
          <Bodycare />
        </StyledSkin>
        <Products />
        <Maps />
        
        
        <Footer></Footer> 
        <Navbar siteTitle="index" />
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
      </Layout>

    </>
  )
};

export default IndexPage

export const Head = () => <SEO/> 
