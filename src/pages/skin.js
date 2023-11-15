import React, { useState } from "react"
import { StyledServiceContent, StyledServicePage, StyledServiceTittle, StyledServiceDesc, StyledServicePhoto, StyledServiceNote, StyledNote, TextTittle, StyledSVG, StyledServiceMobileContent, StyledService, DescBook } from "../styles/js/skin";
import '../styles/css/skin.css'
import { motion } from "framer-motion";
import { colors } from "../utils/const";

import { SkinMobileService, SkinService, useSkinService } from "../components/skin";
import { ServiceNav } from "../components/servnav";
import Galery from "../components/galeria";
import { SEO } from "../components/seo";
import { Helmet } from "react-helmet";
import { Trans } from "react-i18next";



const initialTitle = 'GAIA SIGNATURE';

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


const SkinPage = () => {
  const services = useSkinService()
  const canonicalUrl = "https://gaiaevolutionspaandsalon.com/skin";


  const [type, setTitle] = useState(initialTitle);

  const result = services.map(({ node }) => node.type)
  const sort = result.filter((item,
    index) => result.indexOf(item) === index);


  return (
    <StyledServicePage >
       <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <ServiceNav siteTitle="skin"></ServiceNav>
      <StyledServiceContent>
        <StyledServiceTittle>
        {sort.map((data) => {
            return (
              <TextTittle key={data}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
                  <motion.button whileHover={{ scale: 1.1, color: colors.accentBlue }} whileTap={{ scale: 0.9 }} transition={{ ease: "linear" }} onClick={() => setTitle(data)}>
                    {data}
                  </motion.button>
                </motion.div>
              </TextTittle>
            )
          })}
        </StyledServiceTittle>
        <StyledSVG>
          <div>
            <motion.svg
              width="3"
              height="400"
              viewBox="0 0 2 542"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M1 0V542"
                stroke="black"
                strokeWidth=".3"
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
          </div>
        </StyledSVG>
        <StyledServiceDesc>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .2 }}>
            <SkinService type={type} />
          </motion.div>
        </StyledServiceDesc>
        <StyledServicePhoto>
          <Galery />
        </StyledServicePhoto>
      </StyledServiceContent>
      <StyledServiceMobileContent>
        <StyledService>
          <h1>Skin care</h1>
          <h2>Services</h2>
        </StyledService>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .2 }}>
          <SkinMobileService />
        </motion.div>
      </StyledServiceMobileContent>
      <StyledServiceNote>
        <StyledNote><motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.3, delay: .5, ease: "backInOut" }}>All facial treatments are customized to treat individual skin care needs and include skin analysis, cleansing, exfoliation, and treatment mask, and are completed with the application of serums, moisturizers and/or sun protection. A skin care prescription will be designed and recommended to help maintain the health and integrity of the skin. Add on services are charged separately.</motion.p></StyledNote>
        <StyledNote><motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.3, delay: .9, ease: "backInOut" }}> © Gaia Evolution Spa & Salon  {(new Date().getFullYear())} | <a href="https://luckyducky.studio/" rel="noreferrer" target="_blank">Lucky Ducky Studio</a></motion.p></StyledNote>
      </StyledServiceNote>
    </StyledServicePage>
  )
};


export default SkinPage

export const Head = () => (
  <SEO title={"Naturally Beautiful Skin Care"} description={"Gaia Evolution offers naturally derived skin care. Explore certified organic, vegan, and cruelty-free products. Our services enhance your skin's integrity."}/>
)
