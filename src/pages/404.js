import * as React from "react"
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/navbar";
import { Footer } from "../components";
import { Link } from "gatsby"
import { colors } from "../utils/const";

const pageStyles = {
    display: "flex",
    width: "100vw",
    height: "60vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const canonicalUrl = "https://gaiaevolutionspaandsalon.com/404";


const NotFoundPage = () => (
    <>
        <Helmet>
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <Layout>
            <Navbar siteTitle="index" />
            <main style={pageStyles}>
                <h1 >Pagína no encontrada</h1>
                <p >
                    Lo sentimos mano 😔, la pagína a la que quieres entrar no existe, pero puedes ir a nuetro Inicio.
                </p>
                <p><Link to="/" style={{color:colors.accentBlue}}>Visitar Inicio</Link>.</p>
                
            </main>
            <Footer></Footer>
        </Layout>
    </>
);

export default NotFoundPage;

export const Head = () => <title>Not found</title>