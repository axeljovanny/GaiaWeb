import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { motion, useTransform, useViewportScroll } from "framer-motion";
// Swiper
import SwiperF from "./swiper"
// Style componets
import { BannerProducts, BannerSvg, CircleNature, Gift, ImageTratamients, ImageWedo, ImgMap, ImgSkin, ImgsWedo, LogoPrincipal, PhoneLogo, Scroll, Social, StyledBannerHome, StyledHome, StyledMaps, StyledProducts, StyledSkin, StyledSvg, StyledTratamient, StyledWedo, StyledWedoSection, TextHair, TextMaps, TextSkin, TextWedo, TransMap } from "../styles/js/home.js"
// Constantes
import { colors } from "../utils/const"
// SVG
import { MapsIcon, FacebookIcon, InstagramIcon, TiktokIcon } from "../images/icons"
import { Circle, Phone, GEWeb, GEMovil, Skin, Hair, Flecha, Body, Favorite, FavoriteMovil, CTVTS, CircleMovil, ScrollArrow } from "../assets/Home"
// CSS
import "../styles/css/home.css"
import { IFondoHeader, IWedoArco, IWedoArcoMovil, IWedoHoja } from "./imagesComponets"
import { Trans } from "react-i18next"

const Hero = ({ children }) => (
    <>
        <IFondoHeader />
        <StyledHome>
            <CircleNature >
                <motion.div
                    className="container"
                    animate={{ rotate: -2160 }}
                    transition={{ repeat: Infinity, duration: 300, ease: "linear" }}
                    whileHover={{ rotate: -4320, speed: 200 }}>
                    <Circle className="circle" fill={colors.green} />
                </motion.div>
                <motion.div
                    className="container"
                    animate={{ rotate: 2160 }}
                    transition={{ repeat: Infinity, duration: 300, ease: "linear" }}
                    whileHover={{ rotate: -4320, speed: 200 }}>
                    <CircleMovil className="circle-movil" fill={colors.green} />
                </motion.div>
            </CircleNature>
            <LogoPrincipal
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.1, ease: "easeInOut", type: "spring", delay: 1 }}>
                <GEWeb className="logo-web" fill={colors.darkGreen} />
                <GEMovil className="logo-movil" fill={colors.darkGreen} />
            </LogoPrincipal>
            <Social initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
                <a id="facebook" href="https://www.facebook.com/GaiaEvolutionGroup" aria-label="Link al Perfil de Gaia Evolution en Facebook" rel="noreferrer" target="_blank">
                    <FacebookIcon fill={colors.darkGreen} className="svgAbout" />
                </a>
                <a id="instagram" href="https://www.instagram.com/gaiaspaandsalon/" aria-label="Link al Perfil de Gaia Evolution en Instagram" rel="noreferrer" target="_blank">

                    <InstagramIcon fill={colors.darkGreen} className="svgAbout" />
                </a>
                <a id="tiktok" href="https://www.tiktok.com/@gaiaevolution" aria-label="Link al Perfil de Gaia Evolution en TikTok" rel="noreferrer" target="_blank">
                    <TiktokIcon fill={colors.darkGreen} className="svgAbout" />
                </a>
            </Social>
            <PhoneLogo>
                <motion.a id="phoneNumber"  aria-label="Phone number"
                    whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                    whileTap={{ scale: 0.9 }} href="tel:773-799-8843">
                    <Phone fill={colors.softWhite} className="phone" />
                </motion.a>
                <motion.a id="phoneMovil" aria-label="Phone Movil"
                    whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                    whileTap={{ scale: 0.9 }} href="tel:773-799-8843">
                    <p>773-799-8843</p>
                </motion.a>
            </PhoneLogo>
            <Scroll>
                <ScrollArrow fill={colors.darkGreen} className="scroll" />
                <ScrollArrow fill={colors.white} className="scroll-movil" />
            </Scroll>
        </StyledHome >
        {/* <StyledBannerHome>
            <p><Trans>PROMO_1</Trans></p>
            <p><Trans>PROMO_DISCOUNT</Trans></p>
            <p><Trans>PROMO_2</Trans></p>
            <p><Trans>PROMO_TERMS</Trans></p>
        </StyledBannerHome> */}
    </>

)

const Wedo = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 1500], [110, -50]);
    const y2 = useTransform(scrollY, [0, 3100], [0, 30]);

    return (
        <StyledWedoSection>
            <ImageWedo movil
                initial={{ opacity: 0, y: 10 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }} style={{ y: y1 }}>
                <IWedoArcoMovil />
            </ImageWedo>
            <StyledWedo>
                <TextWedo>
                    <motion.h1 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}><Trans>WEDO_TITTLE</Trans></motion.h1>
                    <motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}><Trans>WEDO_SUBTITTLE</Trans></motion.h2>
                    <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}><Trans>WEDO_TEXT</Trans></motion.p>
                    <Link id="wedoabout" to="/" aria-label="See More about Gaia Evolution"><Trans>WEDO_LINK</Trans><Flecha className="flecha" stroke={colors.green} /></Link>
                </TextWedo>
                <ImgsWedo>
                    <ImageWedo initial={{ opacity: 0, y: 10 }} animate={{ y: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} style={{ y: y1 }}>
                        <IWedoArco />
                    </ImageWedo>
                    <ImageWedo initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} style={{ y: y2 }}>
                        <IWedoHoja/>
                    </ImageWedo>
                </ImgsWedo>
            </StyledWedo>
        </StyledWedoSection>
    )
}
const Skincare = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 3100], [0, 30]);;
    const y2 = useTransform(scrollY, [0, 3200], [110, -40]);

    return (
        <StyledTratamient>
            <ImageTratamients movil
                initial={{ opacity: 0 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                style={{ y: y2, bottom: 0, left: 0 }}>
                <StaticImage
                    className="Skin"
                    src="../images/Home/PNG/SkinCareMovil.png"
                    alt="Spa Image"
                    placeholder="blurred"
                    loading="lazy"
                    formats={['auto', 'webp']}
                    quality='90'
                    style={{
                        position: "absolute"
                    }}
                />
            </ImageTratamients>
            <StyledSvg
                initial={{ opacity: 0 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                style={{ y: y1 }}>
                <Skin className="SkinSvg" fill={colors.green} />
            </StyledSvg>
            <ImgSkin>
                <ImageTratamients
                    initial={{ opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    style={{ y: y2 }}>
                    <StaticImage
                        className="Skin"
                        imgClassName=""
                        src="../images/Home/PNG/SkinCare.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </ImageTratamients>
            </ImgSkin>
            <TextSkin>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} >
                    <Trans>SKIN_TEXT</Trans>
                </motion.p>
                <Link id="skinPage" to="/skin"><Trans>SKIN_LINK</Trans><Flecha className="flecha" stroke={colors.green} /></Link>
            </TextSkin>
        </StyledTratamient>
    )
}
const Haircare = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 4100], [0, 30]);;
    const y2 = useTransform(scrollY, [0, 4200], [110, -40]);

    return (
        <StyledTratamient>
            <ImageTratamients movil
                initial={{ opacity: 0 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                style={{ y: y2, bottom: 0, right: 0 }}>
                <StaticImage
                    className="Hair"
                    src="../images/Home/PNG/HairCareMovil.png"
                    alt="Spa Image"      
                    placeholder="blurred"
                    breakpoints={[750, 1080, 1366, 1920]}
                    loading="eager"
                    formats={['auto', 'webp']}
                    quality='90'
                    style={{
                        position: "absolute"
                    }}
                />
            </ImageTratamients>
            <StyledSvg
                initial={{ opacity: 0 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                style={{ y: y1 }}>
                <Hair className="HairSvg" fill={colors.softWhite} />
            </StyledSvg>
            <TextHair>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                <Trans>HAIR_TEXT</Trans>
                </motion.p>
                <Link id="hair" to="/hair"><Trans>HAIR_LINK</Trans><Flecha className="flecha" stroke={colors.softWhite} /></Link>
            </TextHair>
            <ImgSkin>
                <ImageTratamients
                    initial={{ opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    style={{ y: y2 }}>
                    <StaticImage
                        className="Skin"
                        imgClassName=""
                        src="../images/Home/PNG/HairCare.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </ImageTratamients>
            </ImgSkin>
        </StyledTratamient>
    )
}
const Bodycare = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 6100], [0, 30]);;
    const y2 = useTransform(scrollY, [0, 6200], [110, -40]);


    return (

        <StyledTratamient>
            <ImageTratamients movil
                initial={{ opacity: 0 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                style={{ y: y2, bottom: 0, left: 0 }}>
                <StaticImage
                    className="Skin"
                    src="../images/Home/PNG/BodyCareMovil.png"
                    alt="Spa Image"
                    placeholder="blurred"
                    loading="lazy"
                    formats={['auto', 'webp']}
                    quality='90'
                    style={{
                        position: "absolute"
                    }}
                />
            </ImageTratamients>
            <StyledSvg
                initial={{ opacity: 0 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                style={{ y: y1 }}>
                <Body className="SkinSvg" fill={colors.green} />
            </StyledSvg>
            <ImgSkin>
                <ImageTratamients
                    initial={{ opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    style={{ y: y2 }}>
                    <StaticImage
                        className="Skin"
                        imgClassName=""
                        src="../images/Home/PNG/BodyCare.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </ImageTratamients>
            </ImgSkin>
            <TextSkin>
                <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                <Trans>BODY_TEXT</Trans>
                </motion.p>
                <Link id="body" to="/body"><Trans>BODY_LINK</Trans><Flecha className="flecha" stroke={colors.green} /></Link>
            </TextSkin>
        </StyledTratamient>
    )
}
const Products = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 7100], [0, 30]);;
    const y2 = useTransform(scrollY, [0, 7200], [110, -70]);

    return (
        <>
            <BannerProducts>
                <StaticImage
                    className="Favorite"
                    src="../images/Home/PNG/FPArco.png"
                    alt="Spa Image"
                    placeholder="blurred"
                    loading="eager"
                    formats={['auto', 'webp']}
                    quality='90'
                    style={{
                        position: "absolute"
                    }}
                />
                <BannerSvg
                    initial={{ opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: .5 }}
                    viewport={{ once: true }}
                    style={{ y: y1 }}>
                    <Favorite className="ProductsSvg" fill={colors.softWhite} />
                </BannerSvg>
                <BannerSvg movil
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: .5 }}
                    viewport={{ once: true }}
                    style={{ y: y1 }}>
                    <FavoriteMovil className="ProductsSvgMovil" fill={colors.softWhite} />
                </BannerSvg>

            </BannerProducts>
            <StyledProducts>
                <SwiperF></SwiperF>
            </StyledProducts>
        </>
    );
}
const Maps = ({ children }) => {
    return (
        <StyledMaps initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
            <TextMaps movil>
                <a id="googleMap" aria-label="Gaia Evolution in Google Maps" href="https://www.google.com/maps/place/Gaia+Evolution+Spa+and+Salon/@41.9245235,-87.7068398,19z/data=!3m2!4b1!5s0x880fcd657178d7e3:0x4804758ad15f5cf!4m5!3m4!1s0x880fcd65725634f9:0xf6193b2710f612ea!8m2!3d41.9245235!4d-87.7062926" rel="noreferrer" target="_blank"> Gaia Evolution in Google Maps <Flecha className="flecha" stroke={colors.green} /></a >
            </TextMaps>
            <ImgMap>
                <StaticImage
                    src="../images/Home/JPG/Mapa.jpg"
                    alt="Gaia Evolution Maps Ubication"
                    breakpoints={[750, 1080, 1366, 1920]}
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImgMap>
            <TransMap />
            <TextMaps>
                <CTVTS className="CTVTS" fill={colors.green} ></CTVTS>
                <a id="mapMovil" aria-label="Gaia Evolution Googlemaps link" href="https://www.google.com/maps/place/Gaia+Evolution+Spa+and+Salon/@41.9245235,-87.7068398,19z/data=!3m2!4b1!5s0x880fcd657178d7e3:0x4804758ad15f5cf!4m5!3m4!1s0x880fcd65725634f9:0xf6193b2710f612ea!8m2!3d41.9245235!4d-87.7062926" rel="noreferrer" target="_blank"> Gaia Evolution in Google Maps <Flecha className="flecha" stroke={colors.green} /></a >
            </TextMaps>
        </StyledMaps>
    );
}

export { Hero, Wedo, Skincare, Haircare, Bodycare, Products, Maps }
