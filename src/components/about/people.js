import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStaticQuery, graphql } from "gatsby"

import { Pagination ,Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { CardPeopleSay } from "../../styles/js/about";

export const useReviewsService = () => {
    const data = useStaticQuery(
      graphql`
        query {
          allGoogleReviewsSheet {
            edges {
              node {
                name
                rate
                review
              }
            }
          }
        }
        `
    )
    return data.allGoogleReviewsSheet.edges
  }

export default function PeopleSay() {
    const services = useReviewsService()
    return (
        <>
        <h1>What People Say..</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                modules={[Navigation, Pagination]}
                navigation={true}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: "2%",
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: "2%",
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: "2%",
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: "3%",
                    },
                }}
            >
                {services.map(({ node }) => {
                return (
                    <SwiperSlide key={node.name}>
                      <CardPeopleSay>
                      <h3>{node.name}</h3>
                      <div className="rating ">
                        <a href="#5" title="Give 5 stars">★</a>
                        <a href="#4" title="Give 4 stars">★</a>
                        <a href="#3" title="Give 3 stars">★</a>
                        <a href="#2" title="Give 2 stars">★</a>
                        <a href="#1" title="Give 1 star">★</a>
	                    </div>
                      <p>{node.review}</p>
                    </CardPeopleSay>
                    </SwiperSlide>
                )})}
            </Swiper>
        </>
    );
}