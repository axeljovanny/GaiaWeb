import * as React from "react"
import { Navbar } from "../components/navbar";
import { Footer } from "../components";
import { Link } from "gatsby"
import AnnouncementBar from "../components/AnnouncementBar";
import { colors } from "../utils/const";
import { SEO } from "../components/seo";
import { CANONICAL } from "../utils/urls";

const pageStyles = {
    display: "flex",
    width: "100vw",
    height: "60vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const NotFoundPage = () => (
    <>
        <AnnouncementBar />
            <Navbar siteTitle="index" />
            <main style={pageStyles}>
                <h1>Página no encontrada</h1>
                <p>
                    Lo sentimos, la página a la que quieres entrar no existe, pero puedes ir a nuestro Inicio.
                </p>
                <p><Link to="/" style={{color:colors.accentBlue}}>Visitar Inicio</Link>.</p>
                
            </main>
            <Footer></Footer>
    </>
);

export default NotFoundPage;

export const Head = () => (
    <SEO title={"Página no encontrada"} canonical={CANONICAL.notFound} />
)