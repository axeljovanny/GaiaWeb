import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
// Componentes
import { Navbar } from "../components/navbar";
import { Bodycare, Haircare, Hero, Maps, Products, Skincare, Wedo } from "../components/home";
import { Footer } from "../components"
// Estilos
import { AdvImage, Gift, StyledHair, StyledSkin } from "../styles/js/home";
// Constantes
// CSS
import '../styles/css/home.css'
import { SEO } from "../components/seo";
import { CANONICAL } from "../utils/urls";
import AnnouncementBar from "../components/AnnouncementBar";

const IndexPage = () => {
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
        <AnnouncementBar />
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

    </>
  )
};

export default IndexPage

export const Head = () => (
  <SEO title={"Gaia Evolution Spa & Salon | Organic and Natural Skin, Hair and Body Care"} description={"Welcome to Gaia Evolution Spa & Salon. Discover organic and natural skin, hair and body services and purchase our products."} canonical={CANONICAL.home} />
) 
