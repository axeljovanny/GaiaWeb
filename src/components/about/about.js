import React from "react"
import { motion } from "framer-motion"

// Style componets
import { CircleNature, LogoPrincipal, PhoneLogo, Scroll, Social } from "../../styles/js/home.js"
// Constantes
import { colors } from "../../utils/const"
// SVG
import { FacebookIcon, InstagramIcon, TiktokIcon } from "../../images/icons"
import { Phone, GEWeb, GEMovil, ScrollArrow, Circle, CircleMovil } from "../../assets/Home"
// CSS
import "../../styles/css/home.css"
import { HairText, ImgArc, ImgOne, ImgVM, OurServicesText, ReikiText, ServicesText, SkinText, StyledAbout, StyledFirst, StyledFour, StyledPeopleSay, StyledText, StyledThree, StyledTwo, TexFive, TexFive2, TexFour, TexThree, TextOne, TexTwo } from "../../styles/js/about.js"
import { StaticImage } from "gatsby-plugin-image"
import PeopleSay from "./people.js"
import { IFondoAbout } from "../imagesComponets.js"

const HeroAbout = ({ children }) => (
    <>  
        <IFondoAbout/>
        <StyledAbout>
        <CircleNature >
                <motion.div
                    className="container"
                    animate={{ rotate: -2160 }}
                    transition={{ repeat: Infinity, duration: 300, ease: "linear" }}
                    whileHover={{ rotate: -4320, speed: 200 }}>
                    <Circle className="circle" fill={colors.softWhite} />
                </motion.div>
                <motion.div
                    className="container"
                    animate={{ rotate: 2160 }}
                    transition={{ repeat: Infinity, duration: 300, ease: "linear" }}
                    whileHover={{ rotate: -4320, speed: 200 }}>
                    <CircleMovil className="circle-movil" fill={colors.softWhite} />
                </motion.div>
            </CircleNature>
            <LogoPrincipal
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.1, ease: "easeInOut", type: "spring", delay: 1 }}>
                <GEWeb className="logo-web" fill={colors.softWhite} />
                <GEMovil className="logo-movil" fill={colors.softWhite} />
            </LogoPrincipal>
            <Social initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
                <a href="https://www.facebook.com/GaiaEvolutionGroup" aria-label="Link al Perfil de Gaia Evolution en Facebook" rel="noreferrer" target="_blank">
                    <FacebookIcon fill={colors.softWhite} className="svgAbout" />
                </a>
                <a href="https://www.instagram.com/gaiaspaandsalon/" aria-label="Link al Perfil de Gaia Evolution en Instagram" rel="noreferrer" target="_blank">

                    <InstagramIcon fill={colors.softWhite} className="svgAbout" />
                </a>
                <a href="https://www.tiktok.com/@gaiaevolution" aria-label="Link al Perfil de Gaia Evolution en TikTok" rel="noreferrer" target="_blank">
                    <TiktokIcon fill={colors.softWhite} className="svgAbout" />
                </a>
            </Social>
            <PhoneLogo>
                <motion.a
                    whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                    whileTap={{ scale: 0.9 }} href="tel:773-799-8843">
                    <Phone fill={colors.softWhite} className="phone" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                    whileTap={{ scale: 0.9 }} href="tel:773-799-8843">
                    <p>773-799-8843</p>
                </motion.a>
            </PhoneLogo>
            <Scroll>
                {/* <ScrollArrow fill={colors.darkGreen} className="scroll" />
                <ScrollArrow fill={colors.white} className="scroll-movil" /> */}
            </Scroll>
        </StyledAbout >
    </>

)

const About = ({ children }) => (
    <>
        <StyledFirst>
            <StyledText>
                <motion.h1 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>We are a group of professional Cosmetologists & Estheticians</motion.h1>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>That are hard working and staying up to date with the latest trends and technology in the beauty industry to bring our clients the best experience possible. </motion.p>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Gaia Evolution Spa & Salon was created with the concept of rescue the use of natural & organic sources from our professional lines; Aveda & Eminence are used for our skincare, bodycare & haircare services, complementing them with holistic therapies.</motion.p>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}> We created a peaceful athmosphere to enjoy during your service because everything we do at Gaia is done with love, dedication and care to all our guests!</motion.p>
            </StyledText>
        </StyledFirst>
        <StyledTwo>
            <ImgOne>
                <StaticImage
                    className="imgSalon"
                    imgClassName=""
                    src="../../images/About/PNG/Services.png"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    alt="Spa Image"
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
                <StaticImage
                    className="imgSalonMovil"
                    imgClassName=""
                    src="../../images/About/PNG/ServiceMovil.png"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    alt="Spa Image"
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImgOne>
            <TextOne>
                <motion.h1 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Gaia Evolution Group is a highly qualify professionals trained in several fields such as:</motion.h1>
            </TextOne>
            <HairText>
                <ServicesText><motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Cosmetologists (Hair Care Professionals)</motion.h2>
                    <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus lorem. Donec a cursus arcu. Vivamus sed lectus quis metus posuere molestie. Morbi iaculis libero a lacus bibendum, eu pretium metus lacinia. In sit amet magna ac nulla egestas luctus. Praesent et egestas ipsum, sed viverra dolor.</motion.p>
                </ServicesText>
            </HairText>
            <SkinText>
                <ServicesText skin>
                    <motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Estheticians (Skin Care Professionals)</motion.h2>
                    <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum velit nibh, ac convallis odio mattis et. Cras eleifend scelerisque erat, id lacinia nibh dignissim id.</motion.p>
                </ServicesText></SkinText>
            <ReikiText>
                <ServicesText reiki>
                    <motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Reiki (Healing Energy Therapists)</motion.h2>
                    <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum velit nibh, ac convallis odio mattis et. Cras eleifend scelerisque erat, id lacinia asfrssf nibh dignissim id. </motion.p>
                </ServicesText></ReikiText>

        </StyledTwo>
        <StyledThree>
            <OurServicesText initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                <motion.h1 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Our Services</motion.h1>
            </OurServicesText>

            <TexTwo>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Gaia Evolution Group support all individuals to avoid the loss of its inner and outer beauty and as their own  harmony. We believe that human beings deserve quality life in all  aspects: physical, emotional and spiritual. Gaia Group always work though the evolution, innovation and renewal in all areas of our company.</motion.p>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Organic sources for skincare, haircare and complementing with wellness therapies.</motion.p>
            </TexTwo>
            <ImgArc initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                <StaticImage
                    className="imgArco"
                    imgClassName=""
                    src="../../images/About/PNG/OurService.png"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    alt="Spa Image"
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImgArc>
            <ImgArc movil initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                <StaticImage
                    className="imgArcoMovil"
                    imgClassName=""
                    src="../../images/About/PNG/WWDArcoMovil.png"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    alt="Spa Image"
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImgArc>
            <TexThree>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>We are always looking for continues improvement in all our services and areas through constant training of all our staff. </motion.p>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>  Our Group believe that human beings would achieve their full potential through the emotional balance by unifying the Body, Soul and Spirit. </motion.p>
            </TexThree>
            <TexFour >
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>  That is why we have combined and offering to our clients’ various services to select the best preference.</motion.p>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Full potential through the emotional balance by unifying the Body, Soul and Spirit. </motion.p>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>That is why we have combined and offering to our clients’ various services to select the best preference.</motion.p>
            </TexFour>
            <ImgArc initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                <StaticImage
                    className="imgArcoWeb"
                    imgClassName=""
                    src="../../images/About/PNG/OurService.png"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    alt="Spa Image"
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImgArc>

        </StyledThree>
        <StyledFour>
            <ImgVM img="uno">
                <StaticImage
                    className="imgMV"
                    imgClassName=""
                    src="../../images/About/PNG/Mission.png"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    alt="Spa Image"
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImgVM>
            <TexFive>
                <motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>MISSION</motion.h2>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Our mission is to be the leader group highly qualified in the fields of Cosmetology, Skin Care, Healing Energy Therapies. Satisfying our client needs and exceeding their expectations providing an excellent customer
                    service.</motion.p>
            </TexFive>
            <TexFive2>
                <motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>VISION</motion.h2>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Our vision is to be the company chosen for its innovation, development
                    and services through the expansion of human consciousness through
                    the use of natural resources.</motion.p>
            </TexFive2>
            <ImgVM>
                <StaticImage
                    className="imgMV"
                    imgClassName=""
                    src="../../images/About/PNG/Vision.png"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    alt="Spa Image"
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImgVM>
        </StyledFour>
        <StyledPeopleSay>
            <PeopleSay />
        </StyledPeopleSay>


    </>
)

export { HeroAbout, About }
