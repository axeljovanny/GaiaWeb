import React from "react"
import { StyledSocialContainer, StyledContainer, StyledFooter, StyledItem, StyledSocialItem, Datos, RS, Policies, Credits, CreditsNote, FooterIcons } from "../styles/js/footer"
import { FacebookIcon, InstagramIcon, MapsIcon } from "../images/icons";
import { colors } from "../utils/const"
import { Flecha, GEFoot, GEWeb } from "../assets/Home";
import { Link } from "gatsby";
import { motion } from "framer-motion";




const Footer = ({ children }) => (
    <>
        <StyledFooter>
            <StyledContainer >
                <GEFoot className="logo-footer" fill={colors.white} />
                <RS>
                    <FooterIcons>
                        <a href="https://www.facebook.com/GaiaEvolutionGroup/" rel="noreferrer" target="_blank">
                            <FacebookIcon fill={colors.white} className="svgAbout" />
                        </a>
                        <a href="https://www.instagram.com/gaiaevolution/" rel="noreferrer" target="_blank">

                            <InstagramIcon fill={colors.white} className="svgAbout" />
                        </a>
                        <a href="https://www.google.com/maps/place/Gaia+Evolution+Spa+and+Salon/@41.9245235,-87.7068398,19z/data=!3m2!4b1!5s0x880fcd657178d7e3:0x4804758ad15f5cf!4m5!3m4!1s0x880fcd65725634f9:0xf6193b2710f612ea!8m2!3d41.9245235!4d-87.7062926" rel="noreferrer" target="_blank">
                            <MapsIcon fill={colors.white} className="svgAbout" />
                        </a>

                    </FooterIcons>
                </RS>
                <Datos>
                    <p className="tel1" >
                        <a href="tel:773-799-8843">773-799-8843</a>
                    </p>
                    <p className="email">
                        <a href="mailto:gaiaevolution@icloud.com">
                            gaiaevolution@icloud.com
                        </a>
                    </p>
                    <p className="direccion">
                        3143 W. Fullerton Ave. Chicago, IL
                    </p>
                </Datos>
                <Policies>
                    <Link to="/policies" >READ POLICIES <Flecha className="flecha" stroke={colors.softWhite} /></Link>
                </Policies>
                <Credits>
                    <CreditsNote><motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.3, delay: .9, ease: "backInOut" }}> © Gaia Evolution Spa & Salon  {(new Date().getFullYear())} | <a href="https://luckyducky.studio/" rel="noreferrer" target="_blank">Lucky Ducky Studio</a></motion.p></CreditsNote>
                </Credits>

            </StyledContainer>
        </StyledFooter>

    </>
)


export default Footer