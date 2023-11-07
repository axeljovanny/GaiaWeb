import React from "react"
import "../styles/css/imagenes.css"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/css/home.css"


//TODO: Poner bien las descripciones de los ALT en cada imagen

export function IFondoHeader() {
    return <StaticImage
        src="../images/Backgrounds/Home.jpg"
        alt="Fondo de header, imagen de una planta"
        layout="fullWidth"
        loading="eager"
        placeholder="blurred"
        quality='100'
        formats={['auto', 'webp']}
        style={{
            position: 'absolute',
            zIndex: '-1',
            top: 0,
            left: 0,
            width: '100%',
            height: '95%',
        }}
    />

}

export function IFondoAbout() {
    return <StaticImage
        src="../images/Backgrounds/About.jpg"
        alt="Fondo de header, imagen de una planta"
        layout="fullWidth"
        loading="eager"
        placeholder="blurred"
        quality='100'
        formats={['auto', 'webp']}
        style={{
            position: 'absolute',
            zIndex: '-1',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        }}
    />

}

export function IWedoArco() {
    return <StaticImage
    src="../images/Home/PNG/WWDArco.png"
        alt="Gaia evolution reception Spa Image"
        loading="lazy"
        placeholder="blurred"
        quality='90'
        formats={['auto', 'webp']}
        className="HomeWD2"
        style={{
            position: "absolute"
        }}
    />
}
export function IWedoArcoMovil() {
    return <StaticImage
    src="../images/Home/PNG/WWDArcoMovil.png"
    alt="Gaia evolution reception Spa Image"
        loading="eager"
        placeholder="blurred"
        quality='90'
        formats={['auto', 'webp']}
        className="HomeWDMovil"
        style={{
            position: "absolute"
        }}
    />
}
export function IWedoHoja() {
    return <StaticImage
    src="../images/Home/PNG/WWDHoja.png"
    alt="Gaia evolution Spa products Image"
        loading="eager"
        placeholder="blurred"
        quality='90'
        formats={['auto', 'webp']}
        className="HomeWD1"
        style={{
            position: "absolute"
        }}
    />
}
