import React from "react"
import PropTypes from "prop-types"
import { GlobalStyles } from '../styles/js/index';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from "react-helmet";


import '../styles/css/footer.css'
import '../styles/css/navbar.css'
import { StyleSheetManager } from "styled-components";

if (typeof window !== "undefined") {}


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`);
  return(
    <>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
    </Helmet>
    <GlobalStyles />
    <StyleSheetManager>
        <main>{children}</main>
      </StyleSheetManager>
    </>  
    );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
