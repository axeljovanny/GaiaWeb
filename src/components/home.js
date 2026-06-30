import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { motion, useTransform, useViewportScroll } from "framer-motion";
// Swiper
import SwiperF from "./swiper"
// Style componets
import { BannerProducts, BannerSvg, BookHome, BookHomeDesc, BookNowHome, CircleNature, Gift, ImageTratamients, ImageWedo, ImgMap, ImgSkin, ImgsWedo, LogoPrincipal, PhoneLogo, Scroll, Social, StyledHome, StyledMaps, StyledProducts, StyledSkin, StyledSvg, StyledTratamient, StyledWedo, StyledWedoSection, TextHair, TextMaps, TextSkin, TextWedo, TransMap } from "../styles/js/home.js"
// Constantes
import { colors } from "../utils/const"
// SVG
import { MapsIcon, FacebookIcon, InstagramIcon, TiktokIcon } from "../images/icons"
import { Circle, Phone, GEWeb, GEMovil, Skin, Hair, Flecha, Body, Favorite, FavoriteMovil, CTVTS, CircleMovil, ScrollArrow } from "../assets/Home"
// CSS
import "../styles/css/home.css"
import { IFondoHeader, IWedoArco, IWedoArcoMovil, IWedoHoja } from "./imagesComponets"
import { BookNow, DescBodyTittle } from "../styles/js/body.js";
import { BookNowDesc, DescBook } from "../styles/js/skin.js";

const page = "https://book.salonbiz.com/widget/#/welcome?comToken=c6615t202407091845p58fJw38866o38Aaju4sA" 


const Hero = ({ children }) => {
    const handleBookNowClick = () => {
        const phoneNumber = 'tel:773-799-8843';
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': process.env.GATSBY_GA_ADS_CONVERSION_ID,
                'event_callback': () => {
                    window.location.href = phoneNumber;
                },
            });
        } else {
            // Si no se encuentra gtag (por alguna razón), redirige de todos modos
            window.location.href = phoneNumber;

        }
    };

    return (

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
                    <BookHome>
                        <a href={page} aria-label="Book Now" rel="noreferrer" target="_blank">
                            <BookHomeDesc>Book Now</BookHomeDesc>
                        </a>
                    </BookHome>
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
                <PhoneLogo >
                    <button className="buttonM" id="phoneNumber">
                        <Phone fill={colors.softWhite} className="phone" onClick={handleBookNowClick} />
                    </button>
                    <button className="buttonW" id="phoneMovil" aria-label="Phone Movil"
                        onClick={handleBookNowClick}>773-799-8843
                    </button>
                </PhoneLogo>
                <Scroll>
                    <ScrollArrow fill={colors.darkGreen} className="scroll" />
                    <ScrollArrow fill={colors.white} className="scroll-movil" />
                </Scroll>
            </StyledHome >
        </>

    )
}

const Wedo = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 1500], [110, -50]);
    const y2 = useTransform(scrollY, [0, 3100], [0, 30]);
    const page = "https://book.salonbiz.com/widget/#/welcome?comToken=c6615t202407091845p58fJw38866o38Aaju4sA" 


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
                    <motion.h1 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Organic Beauty and Wellness Services</motion.h1>
                    <motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Professional Cosmetologists &amp; Estheticians</motion.h2>
                    <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>What we do? We are a group of professional Cosmetologists &amp; Estheticians. That are hard working and staying up to date with the latest trends and technology in the beauty industry to bring our clients the best experience possible. Gaia Evolution Spa &amp; Salon was created with the concept of rescue the use of natural &amp; organic sources from our professional lines...</motion.p>
                    <BookNow>
                        <a href={page} aria-label="Book Now" rel="noreferrer" target="_blank">
                            <BookNowDesc>Book Now</BookNowDesc>
                        </a>
                    </BookNow>
                </TextWedo>
                <ImgsWedo>
                    <ImageWedo initial={{ opacity: 0, y: 10 }} animate={{ y: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} style={{ y: y1 }}>
                        <IWedoArco />
                    </ImageWedo>
                    <ImageWedo initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} style={{ y: y2 }}>
                        <IWedoHoja />
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
                        quality='85'
                    />
                </ImageTratamients>
            </ImgSkin>
            <TextSkin>
                    <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} >
                        Our goal at Gaia Evolution is to provide effective, natural skincare solutions that promote skin wellness and holistic health. Through our partnership with Aveda, we prioritize the use of organic, vegan, and cruelty-free products, ensuring that our clients experience the best of natural skincare and beauty.
                    </motion.p>
                    <Link id="skinPage" to="/skin">Go to Skin Care Services<Flecha className="flecha" stroke={colors.green} /></Link>
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
                <Hair className="HairSvg" fill={colors.softWhite} />
            </StyledSvg>
            <TextHair>
                    <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                        Gaia Evolution is an Aveda Exclusive Salon. Aveda is a naturally derived line, some ingredients are Certified Organic, 100% Vegan &amp; Cruelty Free. Its natural components do a fantastic job taking care of the hair integrity and providing incredible results. You will find a wide variety of products for any hair type or concerns. Haircuts and color services are completely customized for each guest through a previous consultation.
                    </motion.p>
                    <Link id="hair" to="/hair">Go to Hair Care Services<Flecha className="flecha" stroke={colors.softWhite} /></Link>
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
                        quality='85'
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
                        quality='85'
                    />
                </ImageTratamients>
            </ImgSkin>
            <TextSkin>
                    <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                        We are dedicated to offering holistic and natural solutions that genuinely enhance the quality of life and overall well-being. Our range of services, body wraps, and body detoxification for weight loss and spiritual growth, is tailored to achieve just that.
                    </motion.p>
                    <Link id="body" to="/body">Go to Body Care Services<Flecha className="flecha" stroke={colors.green} /></Link>
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
                    loading="lazy"
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
                    quality='85'
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
