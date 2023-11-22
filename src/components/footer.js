import React from "react"
import { StyledSocialContainer, StyledContainer, StyledFooter, StyledItem, StyledSocialItem, Datos, RS, Policies, Credits, CreditsNote, FooterIcons, Logo, CompanyTittle, ServicesTittle, SocialTittle, CompanyLiks, Liks, ServiceLiks, SocialLiks, Tittle } from "../styles/js/footer"
import { AvedaCompleto, FacebookIcon, InstagramIcon, MapsIcon } from "../images/icons";
import { colors } from "../utils/const"
import { Flecha, GEFoot, GEWeb } from "../assets/Home";
import { motion } from "framer-motion";
import { Link } from "gatsby";




const Footer = ({ children }) => (
    <>
        <StyledFooter>
            <StyledContainer >
                <Logo><GEFoot className="logo-footer" fill={colors.white} /></Logo>
                <Datos>
                    <p className="direccion">
                        3143 W. Fullerton Ave. Chicago, IL
                    </p>
                    <p className="tel1" >
                        <a id="footerPhone" aria-label="Footer Phone" href="tel:773-799-8843">773-799-8843</a>
                    </p>
                    <p className="email">
                        <a id="footerEmail1" aria-label="Footer Email 1" href="mailto:gaiaevolution@icloud.com">
                            gaiaevolution@icloud.com
                        </a>
                    </p>

                </Datos>
                <CompanyTittle>
                    <Tittle><h3>COMPANY</h3></Tittle>
                </CompanyTittle>
                <ServicesTittle>
                    <Tittle><h3>SERVICES</h3></Tittle>
                </ServicesTittle>
                <CompanyLiks>
                    <Liks>
                        <Link to="/" id="footerabout" aria-label="Gaia Evolution About page link"> About </Link>
                        <a id="footerEmail" aria-label="Footer email" href="mailto:gaiaevolution@icloud.com">Contact Us</a>
                        <Link to="/policies" id="footerpolicies"> Policies </Link>
                        <a id="footersitemap" aria-label="Gaia Evolution sitemap" href="https://gaiaevolutionspaandsalon.com/sitemap-index.xml">Sitemap</a>
                    </Liks>
                </CompanyLiks>
                <ServiceLiks>
                    <Liks>
                        <Link to="/skin" id="footerskin"> Skin Care </Link>
                        <Link to="/body" id="footerbody"> Body Care </Link>
                        <Link to="/hair" id="footerhair"> Hair Care </Link>
                        <a id="avedaShopFooter" aria-label="Aveda Shop Footer" href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631"
                            rel="noreferrer"
                            target="_blank">
                            Aveda Shop</a>
                    </Liks>
                </ServiceLiks>
                <SocialTittle>
                    <Tittle><h3>SOCIAL</h3></Tittle>
                </SocialTittle>
                <SocialLiks>
                    <RS>
                        <FooterIcons>
                            <a id="footerfacebook" aria-label="Gaia Evolution Facebook link" href="https://www.facebook.com/GaiaEvolutionGroup/" rel="noreferrer" target="_blank">
                                <FacebookIcon fill={colors.white} className="svgAboutFoo" />
                            </a>
                            <a id="footerinsta" aria-label="Gaia Evolution Instagram link"href="https://www.instagram.com/gaiaevolution/" rel="noreferrer" target="_blank">

                                <InstagramIcon fill={colors.white} className="svgAboutFoo" />
                            </a>
                            <a id="footermaps" aria-label="Gaia Evolution GoogleMaps link"href="https://www.google.com/maps/place/Gaia+Evolution+Spa+and+Salon/@41.9245235,-87.7068398,19z/data=!3m2!4b1!5s0x880fcd657178d7e3:0x4804758ad15f5cf!4m5!3m4!1s0x880fcd65725634f9:0xf6193b2710f612ea!8m2!3d41.9245235!4d-87.7062926" rel="noreferrer" target="_blank">
                                <MapsIcon fill={colors.white} className="svgAboutFoo" />
                            </a>

                        </FooterIcons>
                    </RS>
                </SocialLiks>
                <Credits>
                    <CreditsNote><motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.3, delay: .9, ease: "backInOut" }}> © Gaia Evolution Spa & Salon  {(new Date().getFullYear())} | <a id="luckyDuckyStudio" aria-label="Lucky Ducky Studio" href="https://luckyducky.studio/" rel="noreferrer" target="_blank">Lucky Ducky Studio</a></motion.p></CreditsNote>
                </Credits>

            </StyledContainer>
        </StyledFooter>

    </>
)


export default Footer