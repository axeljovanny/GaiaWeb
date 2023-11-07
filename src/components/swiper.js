import React from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination ,Navigation } from "swiper/modules";
import { DescProduct, Rectangulo, Rectangulo2, RectanguloProd, TextProduct } from "../styles/js/home.js"
import { StaticImage } from "gatsby-plugin-image"

//import librerias Framer motion
import { motion } from "framer-motion";


export default function SwiperF() {

    const animTxt = {
        rest: {
          opacity:0,
          transition: {
            duration: .1,
            ease: "easeIn"
          }
        },
        hover: {
          opacity:1,
          transition: {
            duration: .5,
            type: "tween",
            ease: "easeOut"
          }
        }
      };

      const animImg = {
        rest: {
          scale:1,
          rotate:0,
          transition: {
            duration: .1,
            ease: "easeIn"
          }
        },
        hover: {
          scale:1.1,
          rotate:-8,
          transition: {
            duration: 0.1,
            type: "tween",
            ease: "easeOut"
          }
        }
      };

    return (
        <>
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
                <SwiperSlide id="textoprueba1">
                    <RectanguloProd 
                        initial="rest" 
                        whileHover="hover" 
                        animate="rest">
                        <Rectangulo/>
                       <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            src="../images/Products/PNG/B-shampoo.png"
                            alt="producto"
                            height={300}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Botanical Repair Shampoo</h3>
                            <DescProduct variants={animTxt}>Strengthens & repairs damaged hair with our silicone free shampoo that luxuriously cleanses, gently removing excess sebum, product build-up and pollution.</DescProduct>
                            <DescProduct movil>Strengthens & repairs damaged hair with our silicone free shampoo that luxuriously cleanses, gently removing excess sebum, product build-up and pollution.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide id="textoprueba2">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            src="../images/Products/PNG/B-Conditioner.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Botanical Repair Conditioner</h3>
                            <DescProduct variants={animTxt}>Conditions and instantly detangles to help prevent breakage; strengthens and repairs with the power of plants.</DescProduct>
                            <DescProduct movil>Conditions and instantly detangles to help prevent breakage; strengthens and repairs with the power of plants.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide id="textoprueba3">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/B-Leavein.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Botanical Repair strengthening leave-in treatment</h3>
                            <DescProduct variants={animTxt}>Leave-in treatment instantly strengthens, repairs and helps protect against damage while building bonds for stronger hair from the inside out.</DescProduct>
                            <DescProduct movil>Leave-in treatment instantly strengthens, repairs and helps protect against damage while building bonds for stronger hair from the inside out.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide id="textoprueba4">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/N-Shampoo.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Nutriplenish Shampoo Deep Moisture</h3>
                            <DescProduct variants={animTxt}>Nutrient-powered hydration for lush, visibly healthier hair.</DescProduct>
                            <DescProduct movil>Nutrient-powered hydration for lush, visibly healthier hair.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide id="textoprueba5">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/N-Conditioner.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Nutriplenish Conditioner</h3>
                            <DescProduct variants={animTxt}>Nutrient-powered hydration for lush, visibly healthier hair. Rich and decadent formula delivers powerful hydration.</DescProduct>
                            <DescProduct movil>Nutrient-powered hydration for lush, visibly healthier hair. Rich and decadent formula delivers powerful hydration.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide id="textoprueba6">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/N-Leavein.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Nutriplenish Leave-In Conditioner</h3>
                            <DescProduct variants={animTxt}>Instantly hydrates, detangles and protects all hair types and textures. Thermal protection up to 450° F. Naturally derived UV filter helps protect hair from the drying effects of the sun.</DescProduct>
                            <DescProduct movil>Instantly hydrates, detangles and protects all hair types and textures. Thermal protection up to 450° F. Naturally derived UV filter helps protect hair from the drying effects of the sun.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide id="textoprueba7">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/I-shampoorich.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Invati Advance Exfoliating Shampoo Rich</h3>
                            <DescProduct variants={animTxt}>Nourishing shampoo gently exfoliates and renews the scalp. Reduces hair loss by 53%* when used as part of the Invati advanced™ 3-step system</DescProduct>
                            <DescProduct movil>Nourishing shampoo gently exfoliates and renews the scalp. Reduces hair loss by 53%* when used as part of the Invati advanced™ 3-step system</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide id="textoprueba8">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/I-ThickeningConditioner.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Invati Advance Thickening Conditioner</h3>
                            <DescProduct variants={animTxt}>Instantly thickens thin and thinning hair and delivers weightless conditioning to help protect the hair from breakage. Helps strengthen hair from roots to ends with naturally derived amino acids.</DescProduct>
                            <DescProduct movil>Instantly thickens thin and thinning hair and delivers weightless conditioning to help protect the hair from breakage. Helps strengthen hair from roots to ends with naturally derived amino acids</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide id="textoprueba9">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/I-Scalp.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Invati Advance Scalp Revitalizer</h3>
                            <DescProduct variants={animTxt}>Reduces hair loss* to help keep the hair you have longer. This invigorating formula penetrates to help support hair’s natural keratin, it instantly thickens to help lift hair at the root and invigorates the scalp.</DescProduct>
                            <DescProduct movil>Reduces hair loss* to help keep the hair you have longer. This invigorating formula penetrates to help support hair’s natural keratin, it instantly thickens to help lift hair at the root and invigorates the scalp.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide id="textoprueba10">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                        imgClassName="imgProduct"
                            src="../images/Products/PNG/K-Gelcleanser.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Botanical kinetics purifying gel cleanser</h3>
                            <DescProduct variants={animTxt}>Begin and end each day with a gentle, plant-derived gel cleanser that foams away oil and impurities and helps normalize skin. For normal to oily skin.</DescProduct>
                            <DescProduct movil>Begin and end each day with a gentle, plant-derived gel cleanser that foams away oil and impurities and helps normalize skin. For normal to oily skin.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide id="textoprueba11">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/K-Grèmecleanser.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Botanical kinetics purifying crème cleanser</h3>
                            <DescProduct variants={animTxt}>Improve the comfort level of daily facial cleansing with a rich crème that removes surface dirt and impurities. Extra-mild on skin with plant-derived oils to leave skin soft and smooth. For normal to dry skin.</DescProduct>
                            <DescProduct movil>Improve the comfort level of daily facial cleansing with a rich crème that removes surface dirt and impurities. Extra-mild on skin with plant-derived oils to leave skin soft and smooth. For normal to dry skin.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba12">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/LiquidExfoliant.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Botanical Kinetics Liquid Exfoliant</h3>
                            <DescProduct variants={animTxt}>This non-abrasive liquid wipes away spent surface cells, revealing a smoother, clearer, more refined complexion beneath and pores that are primed for maximum treatment and moisture benefits. For all skin types.</DescProduct>
                            <DescProduct movil>This non-abrasive liquid wipes away spent surface cells, revealing a smoother, clearer, more refined complexion beneath and pores that are primed for maximum treatment and moisture benefits. For all skin types.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba13">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/SkinToningAgent.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Skin Toning Agent</h3>
                            <DescProduct variants={animTxt}>Hydrate and cool skin with this moisture-rich mist. Blended with sugar-derived sodium hyaluronate and rosewater, this toner can be used after cleansing for a burst of refreshment. For normal to dry skin.</DescProduct>
                            <DescProduct movil>Hydrate and cool skin with this moisture-rich mist. Blended with sugar-derived sodium hyaluronate and rosewater, this toner can be used after cleansing for a burst of refreshment. For normal to dry skin.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba14">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/hydratting-treatment-lotion.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Botanical Kinetics Hydrating Treatment Lotion</h3>
                            <DescProduct variants={animTxt}>Instantly boost skin's moisture with our liquid hydrating treatment lotion, spiked with nutrient-rich algae. For all skin types.</DescProduct>
                            <DescProduct movil>Instantly boost skin's moisture with our liquid hydrating treatment lotion, spiked with nutrient-rich algae. For all skin types.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba15">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/intensehydrator.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Botanical Kinetics Intense Hydrator</h3>
                            <DescProduct variants={animTxt}>Keep hydrated for dewy supple skin. This lightweight, fast-absorbing serum, powered by a fusion of cactus fruit stem cells and plant-derived hyaluronic acid, instantly restores skin's moisture, minimizes the appearance of fine dry lines, and restores skin's protective lipid barrier to help maintain moisture throughout the day.</DescProduct>
                            <DescProduct movil>Keep hydrated for dewy supple skin. This lightweight, fast-absorbing serum, powered by a fusion of cactus fruit stem cells and plant-derived hyaluronic acid, instantly restores skin's moisture, minimizes the appearance of fine dry lines, and restores skin's protective lipid barrier to help maintain moisture throughout the day.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba16">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/BrightConcentrate.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Tulasāra Bright Concentrate</h3>
                            <DescProduct variants={animTxt}>Instantly restore radiance and visibly even skin tone and reduce discoloration over time. Licorice root extract, a traditional Ayurvedic ingredient, helps reduce the appearance of discoloration, providing a more even looking skin tone. For all skin types.</DescProduct>
                            <DescProduct movil>Instantly restore radiance and visibly even skin tone and reduce discoloration over time. Licorice root extract, a traditional Ayurvedic ingredient, helps reduce the appearance of discoloration, providing a more even looking skin tone. For all skin types.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba17">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/talasarafirm.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Tulasāra Firm Concentrate</h3>
                            <DescProduct variants={animTxt}>Skin feels firmer and lines and wrinkles look diminished. A blend of ayurvedic plant extracts including almond seed and sigesbeckia helps skin to instantly feel tighter and feel firmer over time. For all skin types.</DescProduct>
                            <DescProduct movil>Skin feels firmer and lines and wrinkles look diminished. A blend of ayurvedic plant extracts including almond seed and sigesbeckia helps skin to instantly feel tighter and feel firmer over time. For all skin types.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba18">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/T-renewingradiancecrème2.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Tulasāra renewing radiance crème</h3>
                            <DescProduct variants={animTxt}>A rich, radiance-enhancing moisturizing cream that instantly infuses skin with a radiant glow, visibly smooths fine lines.</DescProduct>
                            <DescProduct movil>A rich, radiance-enhancing moisturizing cream that instantly infuses skin with a radiant glow, visibly smooths fine lines.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba19">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/B-IntenseHydratingSoftCrème.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Botanical Kinetics Intense Hydrating Soft Crème</h3>
                            <DescProduct variants={animTxt}>Increase moisture instantly with vital plant energy that stimulates hydration, helping recharge your skin cells. For all skin types.</DescProduct>
                            <DescProduct movil>Increase moisture instantly with vital plant energy that stimulates hydration, helping recharge your skin cells. For all skin types.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba20">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/hydrating water gel creme.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Botanical Kinetics Hydrating Water Gel Crème</h3>
                            <DescProduct variants={animTxt}>Instantly hydrate and soothe skin with luxurious water gel crème. Boost hydration, restore radiance, reduces the look of redness and help strengthen .</DescProduct>
                            <DescProduct movil>Instantly hydrate and soothe skin with luxurious water gel crème. Boost hydration, restore radiance, reduces the look of redness and help strengthen .</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba21">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/Shampure hand and body wash.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Shampure hand and body wash</h3>
                            <DescProduct variants={animTxt}>Gently cleanse your skin with this babassu nut-derived cleanser.</DescProduct>
                            <DescProduct movil>Gently cleanse your skin with this babassu nut-derived cleanser.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba22">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/radiance polish.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Beautifying Radiance Polish</h3>
                            <DescProduct variants={animTxt}>Reveal your most radiant self. Mineral-rich salt crystals comfortably polish away surface cells ready to leave, renewing your skin, while certified organic plant oils melt moisture in.</DescProduct>
                            <DescProduct movil>Reveal your most radiant self. Mineral-rich salt crystals comfortably polish away surface cells ready to leave, renewing your skin, while certified organic plant oils melt moisture in.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba23">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/beautifying body mois.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Beautifying Body Moisturizer</h3>
                            <DescProduct variants={animTxt}>Moisturize and soften skin with a rich body crème that has a nourishing plant blend of certified organic shea butter and olive, soy and safflower oils.</DescProduct>
                            <DescProduct movil>Moisturize and soften skin with a rich body crème that has a nourishing plant blend of certified organic shea butter and olive, soy and safflower oils.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba24">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/shampure body.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Shampure Body Lotion</h3>
                            <DescProduct variants={animTxt}>Provides all-day moisture with certified organic olive oil and softens your skin.</DescProduct>
                            <DescProduct movil>Provides all-day moisture with certified organic olive oil and softens your skin.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba25">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/Hand relief moisturizing crème.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Hand relief moisturizing crème</h3>
                            <DescProduct variants={animTxt}>A rich hand crème that intensely moisturizes, leaving hands feeling soft and smooth.</DescProduct>
                            <DescProduct movil>A rich hand crème that intensely moisturizes, leaving hands feeling soft and smooth.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
                <SwiperSlide id="textoprueba26">
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/Hand Relief Night Renewal Serum.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp']}
                            quality='80'
                        />
                        </motion.div>
                        <TextProduct className="texto" >
                            <h3>Hand Relief Night Renewal Serum</h3>
                            <DescProduct variants={animTxt}>Restorative serum visibly improves the texture of your hands while you sleep. A hydrating plant blend plumps to visibly smooth fine lines.</DescProduct>
                            <DescProduct movil>Restorative serum visibly improves the texture of your hands while you sleep. A hydrating plant blend plumps to visibly smooth fine lines.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>           
                </SwiperSlide>
            </Swiper>
        </>
    );
}