import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/navbar";
import { Footer } from "../components";

const canonicalUrl = "https://gaiaevolutionspaandsalon.com/404";


const NotFoundPage = () => (
    <>
        <Helmet>
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <Layout>
            <Navbar siteTitle="index" />
            <SEO title="404: Not found" />
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Footer></Footer>
        </Layout>
    </>
);

export default NotFoundPage;