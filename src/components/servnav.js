import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { OverlayMenu, StyledHomeReturn, StyledNavbarServ, StyledService, StyledServiceNav, SVG, Text, Overlay, Item, StyledIcons, NavIcon, Line, OverlayFooter, Contacto, Logo } from "../styles/js/servnav"

import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { colors } from "../utils/const"
import { motion } from "framer-motion"
import "../styles/css/skin.css";

import { Flecha } from "../assets/Home"
import { IconNav } from "./navbar"



const draw = {
    hidden: { pathLength: 0 },
    visible: () => {
        return {
            pathLength: 1,
            transition: {
                pathLength: { type: "spring", duration: 1.5, bounce: 0 },
            },
        };
    },
};


const ServiceNav = ({ siteTitle }) => {
    // const [select, setSelect] =useState
    const [toggle, toggleNav] = useState(false);
    return (
        <>
            <StyledServiceNav>
                <StyledHomeReturn>
                    <motion.div
                        whileHover={{ scale: 1.5, color: colors.accentBlue }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ ease: "linear" }}
                    ><Flecha className="flechaHome" stroke={colors.green} />
                    </motion.div>
                    <Link to="/">
                        HOME
                    </Link>
                </StyledHomeReturn>
                <StyledNavbarServ>
                    <Text>
                        <StyledService siteTitle="skin" select={siteTitle}>
                            <Link to="/skin">
                                <motion.p
                                    /* ANIMACION */

                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ ease: "linear" }}
                                >
                                    SKIN CARE
                                </motion.p>
                            </Link>
                        </StyledService>
                        <StyledService siteTitle="hair" select={siteTitle}>
                            <Link to="/hair">
                                <motion.p
                                    /* ANIMACION */

                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ ease: "linear" }}
                                >
                                    HAIR CARE
                                </motion.p>
                            </Link>
                        </StyledService>
                        <StyledService siteTitle="body" select={siteTitle}>
                            <Link to="/body">
                                <motion.p
                                    /* ANIMACION */

                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ ease: "linear" }}
                                >
                                    BODY CARE
                                </motion.p>
                            </Link>
                        </StyledService>
                    </Text>
                    <SVG>
                        <motion.svg
                            width="1050"
                            height="3"
                            viewBox="0 0 1010 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                d="M0 1H1090"
                                stroke="black"
                                strokeWidth=".2"
                                animate={{
                                    pathLength: [0, 1],
                                }}
                                transition={{
                                    times: [0, 1],
                                    duration: 1
                                }}
                                variants={{ draw }}
                            />
                            {<motion.rect />}
                        </motion.svg>

                        {/* CIrculo1 */}

                        <div
                            className="circulo1">
                            <motion.svg

                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .5, duration: .5 }}

                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 26 26"
                            >
                                <circle
                                    id="Elipse_7"
                                    data-name="Elipse 7"
                                    cx="13"
                                    cy="13"
                                    r="13"
                                    fill="#828c7a"
                                />
                            </motion.svg>
                        </div>

                        {/* Circulo2 */}

                        <div
                            className="circulo2">
                            <motion.svg

                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .6, duration: .6 }}

                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 26 26"
                            >
                                <motion.circle
                                    id="Elipse_7"
                                    data-name="Elipse 7"
                                    cx="13"
                                    cy="13"
                                    r="13"
                                    fill="#828c7a"

                                />
                            </motion.svg>
                        </div>

                        {/* Circulo3 */}

                        <div
                            className="circulo3">
                            <motion.svg

                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .7, duration: .7 }}

                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 26 26"
                            >
                                <circle
                                    id="Elipse_7"
                                    data-name="Elipse 7"
                                    cx="13"
                                    cy="13"
                                    r="13"
                                    fill="#828c7a"
                                />
                            </motion.svg>
                        </div>


                    </SVG>
                </StyledNavbarServ>
             
            </StyledServiceNav>
            <IconNav></IconNav>
        </>
    )

}

export { ServiceNav }