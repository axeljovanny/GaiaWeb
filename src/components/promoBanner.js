import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../styles/css/banner.css'; // Importa tu archivo CSS aquí
import { Banner } from '../styles/js/home';
import { graphql, useStaticQuery } from 'gatsby';
import { colors } from '../utils/const';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';

export const usePromoMovilService = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allGooglePromoSheet {
              edges {
                node {
                  id
                  get
                  promo
                  text
                  conditions
                  condition2
                  button
                  promotext1
                  promotext2
                  promotext3
                  promotext4
                  link
                }
              }
            }
            allGooglePromoWebSheet {
              edges {
                node {
                  promoweb
                  textweb
                  contains
                  price
                  value
                  plus
                  buttonweb
                  text1
                  text2
                  linkweb
                  foto
                }
              }
            }
          }        
`

    )
    return {
        promoSheet: data.allGooglePromoSheet.edges,
        promoWebSheet: data.allGooglePromoWebSheet.edges,
    };
}

const PromoBanner = () => {
    const promo = usePromoMovilService()

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        // Muestra el modal después de 5 segundos
        const timer = setTimeout(() => {
            setModalIsOpen(true);
        }, 3000);

        // Limpia el temporizador al desmontar el componente
        return () => clearTimeout(timer);
    }, []); // Se ejecuta solo una vez al montar el componente

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="modal-content" // Agrega una clase al contenido del modal si es necesario
            overlayClassName={{
                base: 'modal-overlay',
                afterOpen: 'ReactModal__Overlay--after-open',
                beforeClose: 'ReactModal__Overlay--before-close',
            }}
            closeTimeoutMS={2000}>
            {/* <link href='https://unpkg.com/css.gg@2.0.0/icons/css/close.css' rel='stylesheet'></link>
            <a class="gg-close" onRequestClose={() => setModalIsOpen(false)} /> */}

            <Banner>
                {promo.promoWebSheet.map(({ node }) => {
                    return (
                        <div key={node.id}>
                            {
                                <a className="box box--1">
                                    <div className="box__background">
                                        <div className="box__text-line box__text-line--top">
                                            <span>{node.text1}</span>
                                        </div>
                                        <div className="box__text-line box__text-line--bottom">
                                            <span>{node.text2}</span>
                                        </div>
                                    </div>

                                    <div className="box__content">
                                        <div className="box__col">
                                                <span className='promoweb'>{node.promoweb}</span>
                                                <p className='textweb'>{node.textweb}</p>
                                                <p className='contains'>{node.contains}</p>
                                                <p className='price'>{node.price}</p>
                                                <p className='value'>{node.value}</p>
                                                <p className='plus'>{node.plus}</p>
                                                <a href={node.linkweb} aria-label="Link a Gaia Evolution en Google Maps" rel="noreferrer" target="_blank" className="box__btn">{node.buttonweb}</a>
                                        </div>
                                        <div className="box__col__img">
                                            <img src={node.foto} alt="Promo" height={'100%'} />
                                        </div>
                                    </div>
                                </a>
                            }
                        </div>
                    )
                })}

            </Banner>
            <Banner movil>
                {promo.promoSheet.map(({ node }) => {
                    return (
                        <div key={node.id}>
                            {
                                <div className="box box--2">
                                    <svg className="box__background" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Las rutas y otros elementos SVG aquí */}
                                        <path id="line1" d="M251.994 21.5L251.995 190.5C251.995 212.591 269.903 230.5 291.995 230.5L517.5 230.5C539.592 230.5 557.5 248.409 557.5 270.5L557.5 275.5C557.5 297.591 575.409 315.5 597.5 315.5L759 315.5" stroke={colors.darkGreen} strokeWidth="40" strokeLinecap="round" />
                                        <path id="line2" d="M20.5001 451L226 451C248.091 451 266 468.909 266 491L266 530C266 552.091 283.908 570 306 570L475.5 570C497.591 570 515.5 587.909 515.5 610L515.5 776.5" stroke={colors.darkGreen} strokeWidth="40" strokeLinecap="round" />

                                        <text fill={colors.softWhite}>
                                            <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line1">
                                                {node.promotext1}
                                                <animate attributeName="startOffset" from="0%" to="100%" begin="0s" dur="6s" repeatCount="indefinite" />
                                            </textPath>
                                        </text>
                                        <text fill={colors.softWhite}>
                                            <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line1">
                                                {node.promotext2}
                                                <animate attributeName="startOffset" from="0%" to="100%" begin="3s" dur="6s" repeatCount="indefinite" />
                                            </textPath>
                                        </text>
                                        <text fill={colors.softWhite}>
                                            <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line2">
                                                {node.promotext3}
                                                <animate attributeName="startOffset" from="0%" to="100%" begin="0s" dur="6s" repeatCount="indefinite" />
                                            </textPath>
                                        </text>
                                        <text fill={colors.softWhite}>
                                            <textPath startOffset="0%" textAnchor="middle" alignmentBaseline="central" xlinkHref="#line2">
                                                {node.promotext4}
                                                <animate attributeName="startOffset" from="0%" to="100%" begin="3s" dur="6s" repeatCount="indefinite" />
                                            </textPath>
                                        </text>
                                    </svg>

                                    <div className="box__content">
                                        <p className='get'>{node.get}</p>
                                        <span>{node.promo}</span>
                                        <p className='text'>{node.text}</p>
                                        <p className='conditions'>{node.conditions}</p>
                                        <p className='conditions'>{node.condition2}</p>
                                        <a href={node.link} aria-label="Link a Gaia Evolution en Google Maps" rel="noreferrer" target="_blank" className="movil__banner__btn">{node.button}</a>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })}

            </Banner>
            {/* <a className="box box--3">
            <svg className="box__background" viewBox="0 0 540 540" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M420 270C420 352.843 352.843 420 270 420C187.157 420 120 352.843 120 270C120 187.157 187.157 120 270 120C352.843 120 420 187.157 420 270Z"
                    fill="black" />

            </svg>

            <svg className="box__background box__text-svg" viewBox="0 0 540 540" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path id="circle1"
                    d="M440 270C440 363.888 363.888 440 270 440C176.112 440 100 363.888 100 270C100 176.112 176.112 100 270 100C363.888 100 440 176.112 440 270Z"
                    stroke-width="40" />
                <text>
                    <textPath alignment-baseline="middle" href="#circle1" stroke="none" fill="#000">
                        SUPER SALE • BEST OFFER • the full • SUPER SALE • SALE EVENT •
                    </textPath>
                </text>
            </svg>

            <svg className="box__background box__text-svg box__text-svg--reverse" viewBox="0 0 540 540" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path id="circle2" stroke="#000"
                    d="M480 270C480 385.98 385.98 480 270 480C154.02 480 60 385.98 60 270C60 154.02 154.02 60 270 60C385.98 60 480 154.02 480 270Z"
                    stroke-width="40" />


                <text>
                    <textPath alignment-baseline="middle" href="#circle2" stroke="none" fill="#fff">
                        10% 70% 35% 25% 55% 80% 15% 15% 80% 10% 70% 35% 25% 5% 80% 15% 5% 80% 15%
                    </textPath>
                </text>

            </svg>
            <svg className="box__background box__text-svg" viewBox="0 0 540 540" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path id="circle3"
                    d="M520 270C520 408.071 408.071 520 270 520C131.929 520 20 408.071 20 270C20 131.929 131.929 20 270 20C408.071 20 520 131.929 520 270Z"
                    stroke-width="40" />



                <text>
                    <textPath alignment-baseline="middle" href="#circle3" stroke="none" fill="#000">
                        $ $$ $ $$$ $ $$ $$$ $$ $ $$ $ $ $ $$ $$$ $ $$ $ $ $$$ $$ $$ $ $ $$$ $$ $$ $ $ $$$ $ $ $$ $$ $$$
                        $ $ $$$ $$$
                    </textPath>
                </text>
            </svg>



            <div className="box__content">
                get up to <span>25%</span>
                <div className="box__btn">shop now</div>
            </div>
        </a> */}
            {/* <a className="box box--4">
            <div className="box__content">
                70%
                <span>WEEKEND SALE EVENT</span>
                5%
                <span>the full</span>
                20%
                <span>SUPER SALE</span>
                10%
                <span>5% off</span>
                <span>SALE</span>
                70%
                <span>SALE EVENT</span>
                <span>ONE Day</span>!
                10%
                <span>SALE</span>
                <span>the full</span>
                70%! $$
                <span className="box__title box__title--top">Black Friday</span>
                <span>70%</span>$$!
                <span>85% off</span>
                <span className="box__title">shop now</span>$
                <span>5% off</span>$
                <span>50% OFF</span>
                <span>SALE</span>
                70%
                <span>BEST OFFER</span>
                <span>the full</span>$
                30%!
                <span>Limited time</span>
                50%<span>off sale</span>
                <span>special OFFER</span>
            </div>
        </a> */}
        </Modal>
    );
};

export default PromoBanner;