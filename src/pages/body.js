import React, { useState } from "react"
import { StyledServiceContent, StyledServicePage, StyledServiceTittle, StyledServiceDesc, StyledServicePhoto, StyledServiceNote, StyledNote, TextTittle, StyledSVG, StyledServiceMobileContent, StyledService, DescBook } from "../styles/js/skin";
import '../styles/css/services.css'
import { motion } from "framer-motion";
import { colors } from "../utils/const";
import '../styles/css/skin.css'

import { BodyMobileService, BodyService, useBodyService } from "../components/body";
import { ServiceNav } from "../components/servnav";
import Galery from "../components/galeria";
import { Helmet } from "react-helmet";
import { SEO } from "../components/seo";


const initialTitle = 'SPECIAL';

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

const BodyPage = () => {
  const canonicalUrl = "https://gaiaevolutionspaandsalon.com/body";
  const bodyServices = useBodyService()

  const [type, setType] = useState(initialTitle);

  const result = bodyServices.map(({ node }) => node.type)
  const sort = result.filter((item,
    index) => result.indexOf(item) === index);

  // console.log(sort);


  return (
    <html lang="en">
      <StyledServicePage >
        <Helmet>
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <ServiceNav siteTitle="body"></ServiceNav>
        <StyledServiceContent>
          <StyledServiceTittle>
            {sort.map((data) => {
              return (
                <TextTittle key={data}>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
                    <motion.button whileHover={{ scale: 1.1, color: colors.accentBlue }} whileTap={{ scale: 0.9 }} transition={{ ease: "linear" }} onClick={() => setType(data)}>
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
          <StyledServiceDesc >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .2 }}>
              <BodyService type={type} />
            </motion.div>
          </StyledServiceDesc>
          <StyledServicePhoto>
            <Galery />
          </StyledServicePhoto>

        </StyledServiceContent>
        <StyledServiceMobileContent>
          <StyledService>
            <h1>Body care</h1>
            <h2>Services</h2>
          </StyledService>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .2 }}>
            <BodyMobileService />
          </motion.div>
        </StyledServiceMobileContent>
        <StyledServiceNote>
          <StyledNote><motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.3, delay: .5, ease: "backInOut" }}>Aveda and Eminence work as high quality organic products that are used to pamper your skin, body, and soul with their natural ingredients and holistic properties.</motion.p></StyledNote>
          <StyledNote><motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.3, delay: .9, ease: "backInOut" }}> © Gaia Evolution Spa & Salon  {(new Date().getFullYear())} | <a href="https://luckyducky.studio/" rel="noreferrer" target="_blank">Lucky Ducky Studio</a></motion.p></StyledNote></StyledServiceNote>
        {/* <StyledServiceFooter>
      </StyledServiceFooter> */}
      </StyledServicePage>
    </html>
  )
};


export default BodyPage

export const Head = () => (
  <SEO title={"Holistic Wellness for Body & Soul"} description={"Experience holistic solutions for a better life at Gaia Evolution. From reiki to body wraps, our services promote spiritual growth and well-being."} />
)