import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import { useCycle } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image";

// Estilos
import { StyledLogoContainer, StyledItems, StyledNavbar, ItemNav, LineHome, Mask, Overlay} from "../styles/js/navbar"

//Constantes
import { colors } from "../utils/const"

// NAV
import { MenuToggle } from "./nav/MenuToggle";
import { Navigation } from "./nav/Navigation";
import "./nav/styles.css";
import { AvedaA, AvedaCompleto } from "../images/icons";
import '../styles/css/home.css'
import { Logo } from "../assets/Home";





const Navbar = ({ siteTitle }) => {
    const [toggle, toggleNav] = useState(false);

    if (siteTitle === 'about') {
        return (<>
            <Mask />
            <StyledNavbar>
                <StyledItems>
                    <ItemNav
                        whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                        whileTap={{ scale: 0.9 }}>
                        <Link id="navHairCareAbout" to="/hair"> HAIR CARE </Link>
                    </ItemNav>
                    <ItemNav
                        whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                        whileTap={{ scale: 0.9 }}>
                        <Link id="navSkinCareAbout" to="/skin"> SKIN CARE </Link>
                    </ItemNav>
                    <ItemNav
                        whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                        whileTap={{ scale: 0.9 }}>
                        <Link id="navBodyCareAbout" to="/body"> BODY CARE </Link>
                    </ItemNav>
                </StyledItems>

                <StyledLogoContainer>
                    <Link to="/" id="navhomeAbout">
                        <StaticImage
                            className="logo"
                            src="../images/logo.png"
                            alt="Gaia Evolution Logo - Home Button"
                            loading="eager"
                            layout="constrained"
                            breakpoints={[750, 1080, 1366, 1920]}
                            formats={['auto', 'webp', 'avif']}
                            quality='70'
                        />
                    </Link>
                </StyledLogoContainer>

                <StyledItems>
                    <ItemNav
                        whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                        whileTap={{ scale: 0.9 }}>
                        <Link id="navPoliciesAbout" to="/policies"> POLICIES </Link>
                    </ItemNav>
                    <ItemNav
                        whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                        whileTap={{ scale: 0.9 }}>
                        <Link id="navAboutUs" to="/"> ABOUT US </Link>
                    </ItemNav>
                    <ItemNav
                        whileHover={{ scale: 1.1, priginX: 0, fill: colors.accentBlue }}
                        whileTap={{ scale: 0.9 }}>
                        <a href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631"
                            rel="noreferrer"
                            target="_blank" id="navAvedaShop" aria-label="Gaia Evolution AvedaShop link">
                            <AvedaCompleto fill={colors.white} /></a>
                    </ItemNav>
                </StyledItems>
            </StyledNavbar>
            <IconNav siteTitle="about" />
        </>)
    }

    if (siteTitle === 'index') {
        return (
            <>  <Mask />
                <StyledNavbar>
                    <StyledItems>
                        <ItemNav home
                            whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                            whileTap={{ scale: 0.9 }}>
                            <Link id="navHair" to="/hair"> HAIR CARE </Link>
                        </ItemNav>
                        <ItemNav home
                            whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                            whileTap={{ scale: 0.9 }}>
                            <Link id="navSkin" to="/skin"> SKIN CARE </Link>
                        </ItemNav>
                        <ItemNav home
                            whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                            whileTap={{ scale: 0.9 }}>
                            <Link id="navBody" to="/body"> BODY CARE </Link>
                        </ItemNav>
                    </StyledItems>

                    <StyledLogoContainer>
                        <Link id="navHome" to="/" aria-label="Gaia Evolution Logo - Home Button">
                            <Logo className="logo" fill={colors.darkGreen} />
                        </Link>
                    </StyledLogoContainer>

                    <StyledItems>
                        <ItemNav home
                            whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                            whileTap={{ scale: 0.9 }}>
                            <Link id="navPolicies" to="/policies"> POLICIES </Link>
                        </ItemNav>
                        <ItemNav home
                            whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                            whileTap={{ scale: 0.9 }}>
                            <Link id="navAboutUsHome" to="/about" aria-label="Gaia Evolution About page link"> ABOUT US </Link>
                        </ItemNav>
                        <ItemNav home
                            whileHover={{ scale: 1.1, priginX: 0, fill: colors.accentBlue }}
                            whileTap={{ scale: 0.9 }}>
                            <a id="navAvedaShop" href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631"
                                rel="noreferrer"
                                target="_blank" aria-label="Gaia Evolution AvedaShop link">
                                <AvedaCompleto fill={colors.green} /></a>
                        </ItemNav>
                    </StyledItems>
                </StyledNavbar>
                <IconNav />
            </>
        )
    }

}


const IconNav = ({ siteTitle }) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

    return (
        <Overlay
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}>
            <MenuToggle toggle={() => toggleOpen()} siteTitle={siteTitle} />
            <Navigation open={isOpen} />
        </Overlay>
    );
};


export { Navbar, IconNav }