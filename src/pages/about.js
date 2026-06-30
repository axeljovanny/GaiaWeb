import React, {useState} from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AdvImage, Gift } from "../styles/js/home"

import { Navbar } from "../components/navbar"
import { Footer } from "../components"

// Constantes
import { About, HeroAbout } from "../components/about/about"
import AboutGallery from "../components/about/gallery"
import { SEO } from "../components/seo"
import { CANONICAL } from "../utils/urls"
import AnnouncementBar from "../components/AnnouncementBar"

const AboutPage = () => {
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
    </>
  )
};

export default AboutPage

export const Head = () => (
  <SEO title={"Discover Gaia Evolution's Essence"} description={"Explore the heart of Gaia Evolution. Learn about our commitment to well-being, natural products, and our mission to impact your skin, body, and soul."} canonical={CANONICAL.about} />
)
