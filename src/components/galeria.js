import React from "react";
/* import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; */
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImage } from "gatsby-plugin-image";
import '../styles/css/galeria.css'
import "./galeria.css";
//imports Swiper
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

export default function Galery() {
    return (
        <>
        <Swiper
        spaceBetween={0}
        effect={"fade"}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/Galeria 1.png"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    formats={['auto', 'webp', 'avif']}
                    quality='90'
                />
        </SwiperSlide>
        <SwiperSlide>
        <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/Galeria 2.png"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    formats={['auto', 'webp', 'avif']}
                    quality='90'
                />
        </SwiperSlide>
        <SwiperSlide>
        <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/Galeria 3.png"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    formats={['auto', 'webp', 'avif']}
                    quality='90'
                />
        </SwiperSlide>
        <SwiperSlide>
        <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/Galeria4.png"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    formats={['auto', 'webp', 'avif']}
                    quality='90'
                />
        </SwiperSlide>
        <SwiperSlide>
        <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/Galeria 5.png"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    formats={['auto', 'webp', 'avif']}
                    quality='90'
                />
        </SwiperSlide>
        <SwiperSlide>
        <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/Galeria 6.png"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    formats={['auto', 'webp', 'avif']}
                    quality='90'
                />
        </SwiperSlide>
        <SwiperSlide>
        <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/Galeria 7.png"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    formats={['auto', 'webp', 'avif']}
                    quality='90'
                />
        </SwiperSlide>
        <SwiperSlide>
        <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/Galeria 8.png"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    breakpoints={[750, 1080, 1366, 1920]}
                    formats={['auto', 'webp', 'avif']}
                    quality='90'
                />
        </SwiperSlide>
      </Swiper>
        </>
    );
}