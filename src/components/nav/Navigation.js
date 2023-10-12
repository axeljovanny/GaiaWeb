import React, { useState } from "react"
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

import { Over, Contacto, Item, Logo, OverlayFooter, OverlayMenu, StyledIcons } from "../../styles/js/servnav";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FacebookIcon, InstagramIcon, MapsIcon } from "../../images/icons";
import { colors } from "../../utils/const";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const sidebar = {
    open:{
        backgroundColor: colors.green,
        display: "flex",
        height: "100%",
        transition: {
        duration: .3
      }
    },
    closed: {
        backgroundColor: colors.none,
        display: "none",
        height: 0,
        transition: {
        duration: .3
      }
    }
  };  

export const Navigation = ( {open} ) => {
return(
  <Over 
    animate={open? "open" : "closed"}
    variants={sidebar}>
      <MenuItem variants={variants} />  
  </Over>

);}

