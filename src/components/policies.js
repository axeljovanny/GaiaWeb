import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { StyledContent, StyledText, StyledLogoMobileContainer } from "../styles/js/content"
import Footer from "./footer"


const Policies = ({ children }) => (
    <div style={{background:"#828C7A"}}>
        <StyledLogoMobileContainer>
            <StaticImage
                className="container-logo"
                imgClassName="logo"
                src="../images/logo.png"
                alt="gaia logo policies"
                loading="eager"
                width={140}
                layout="constrained"
                formats={['auto', 'webp', 'avif']}
                quality='80'
            />
            <h1>GAIA EVOLUTION</h1>
            <h2>POLICIES</h2>
        </StyledLogoMobileContainer>
        <StyledContent>
            <StyledText>
                <h2>APPOINTMENTS</h2>
                <p>Appointments must be booked over the phone, in-person or online. Please arrive on time for your appointment to ensure that you receive your full service.
                </p>
                <br></br>

                <h2>CANCELLATIONS</h2>
                <p>
                    We reserve your appointments especially for you, therefore, we respectfully request at least 24 hours’ notice for cancellations. Less than 24-hour notice will result in a charge of 50% of the service requested. Rescheduling is cancelling the appointment when it is under 24 hours. “No show” appointments will be charged 50% of the reserved service.
                </p>
                <br></br>

                <h2>COLOR SERVICES</h2>
                <p>
                    A consultation must be booked prior to the service; the final price will be established at time of consultation. We don’t do consultations by phone.
                </p>
                <p>
                    The service can be booked at time of consultation, with a 50% payment of the service (used as a deposit).
                </p>
                <p>
                    We also request 48-hour cancellation for Brazilian Blowout treatments due to the length of service. A deposit is required for these appointments and will be forfeited if cancelled under 48 hours.
                </p>
                <br></br>

                <h3>
                    If the appointment is not cancelled accordingly, the 50% payment/deposit will not be refunded.
                </h3>
                <br></br>

                <h2>GRATUITY</h2>
                <p>
                    Tipping is at the discretion of our customers. However, tips are accepted preferable in Cash. Credit Card is also valid in the absence of cash.
                </p>
                <br></br>

                <h2>REFUNDS</h2>
                <p>
                    Our Cosmetologists or Estheticians are showing the final result at the end of the service. If the
                    client is satisfied with the results there will not be any refund thereafter.
                </p>
                <br></br>

                <h2>GIFT CERTIFICATES</h2>
                <p>
                    Gift Certificates are available and can be purchased through our website (e-cards) or directly at our store (plastic). Plastic Gift Cards can be re-chargeable.
                </p>
                <h3>Gift Certificates do not include gratuity.</h3>
                <br></br>

                <h2>CHILDREN</h2>
                <p>
                    We love children…some of us even have a few! However, we ask that you make child care arrangements and not bring your children with you to your appointment. Many guests look forward to their salon experience as personal pampering time. Even the best-behaved children are subject to elements of danger in the Spa/Salon environment (sharp scissors, hot irons, glass, chemicals, etc.). Please respect this policy and accept our appreciation for your understanding.
                </p>
                <br></br>

                <h2>PEACEFUL ENVIRONMENT</h2>
                <p>
                    For the enjoyment of other guests, we ask that you put your cellular phone on vibrate or off while receiving services.
                </p>



            </StyledText>


        </StyledContent>
        <Footer />
    </div>

)


export { Policies }