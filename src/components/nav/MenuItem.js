import * as React from "react";
import { Contacto, Item, Logo, OverlayFooter, OverlayMenu, StyledIcons } from "../../styles/js/servnav";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FacebookIcon, InstagramIcon, MapsIcon } from "../../images/icons";
import { colors } from "../../utils/const";
import { motion } from "framer-motion"


const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
            duration: 1

        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
            duration: 1

        }
    }
};


export const MenuItem = ({ toggle }) => {
    return (
        <>
            <StyledIcons variants={variants}>
                <motion.a id="facebookMenu" 
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.facebook.com/GaiaEvolutionGroup/" rel="noreferrer" target="_blank">
                    <FacebookIcon fill={colors.white} className="svgAbout" />
                </motion.a>
                <motion.a id="instagramMenu"
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.instagram.com/gaiaevolution/" rel="noreferrer" target="_blank">

                    <InstagramIcon fill={colors.white} className="svgAbout" />
                </motion.a >
                <motion.a id="mapsMenu" 
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.google.com/maps/place/Gaia+Evolution+Spa+and+Salon/@41.9245235,-87.7068398,19z/data=!3m2!4b1!5s0x880fcd657178d7e3:0x4804758ad15f5cf!4m5!3m4!1s0x880fcd65725634f9:0xf6193b2710f612ea!8m2!3d41.9245235!4d-87.7062926" rel="noreferrer" target="_blank">
                    <MapsIcon fill={colors.white} className="svgAbout" />
                </motion.a >
            </StyledIcons>
            <OverlayMenu variants={variants}>
                <Item>
                    <Link id="homeMenu" to="/">
                        HOME
                    </Link>
                </Item>
                <Item>
                    <Link id="skinMenu" to="/skin">
                        SKIN CARE
                    </Link>
                </Item>
                <Item>
                    <Link id="hairMenu" to="/hair">
                        HAIR CARE
                    </Link>
                </Item>
                <Item>
                    <Link id="bodyMenu" to="/body">
                        BODY CARE
                    </Link>
                </Item>
                <Item>
                    <Link id="aboutMenu" to="/" aria-label="Gaia Evolution About page link">
                        ABOUT
                    </Link>
                </Item>
                <Item>
                    <a id="avedaShopMenu" href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631"
                        rel="noreferrer"
                        target="_blank"> AVEDA SHOP</a>
                </Item>
                <Item>
                    <Link id="policiesMenu" to="/policies">
                        POLICIES
                    </Link>
                </Item>
            </OverlayMenu>
            <OverlayFooter variants={variants}>
                <Logo>
                    <StaticImage
                        className="logoFooter"
                        src="../../images/logo.png"
                        alt="gaia logo nav"
                        loading="eager"
                        width={120}
                        placeholder="blurred"
                        formats={['auto', 'webp', 'avif']}
                        quality={70}
                    />
                </Logo>
                <Contacto>
                    <a id="phoneMenu" href="tel:773-799-8843">773-799-8843</a>
                    <a href="mailto:gaiaevolution@icloud.com">
                        gaiaevolution@icloud.com
                    </a>
                    <p> 3143 W. Fullerton Ave. Chicago, IL</p>
                </Contacto>
            </OverlayFooter> </>

    );
};