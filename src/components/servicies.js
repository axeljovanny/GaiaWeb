import React, { useState } from "react"
import { DescTittle, DescText, DescDetails, DescTime, DescPrice, DescBook, TextTittle, Show } from "../styles/js/skin";
import { DescDetailsHair, DescHairText, DescHairTittle, DescPriceHair, DescTitleHair } from "../styles/js/hair";
import { Desc, DescBodyTittle, DescDetailsBody, DescNoteBody, DescPriceBody, DescTitleBody } from "../styles/js/body";
import "../styles/css/skin.css";


import { Flecha } from "../assets/Home"
import { colors } from "../utils/const";




const SkinServiceDesc = ({ services, type }) => {
    return (
        <>
         {
            type.type !== "ADD ON SERVICES" && (
            <DescTittle><p>{type.type}</p>
                <a href="https://squareup.com/appointments/book/18a837f7-27d0-4fb3-9184-eed5ec31a526/9XWS7XZK8MK0T/services" target="_blank" rel="noreferrer">
                    <DescBook>BOOK NOW</DescBook>
                </a>
            </DescTittle>
             )}
         {
            type.type === "ADD ON SERVICES" && (
            <DescTittle add><p>{type.type}</p>
            </DescTittle>
             )}
            {services.map(({ node }) => {
                return (
                    <div key={node.id}>
                        {
                             node.type === type.type && node.type !== "ADD ON SERVICES" &&(
                                <DescDetailsHair> 
                                {node.title !== node.type &&(
                                    <DescTitleHair>
                                        {node.title}
                                    </DescTitleHair>
                                )} 
                                    <DescText><p>{node.description}</p></DescText>

                                    <DescDetails>
                                        <DescTime>
                                            {node.time}
                                        </DescTime>
                                        <DescPrice>
                                            {node.price}
                                        </DescPrice>
                                    </DescDetails>

                                    <DescHairText note >{node.note}</DescHairText>

                                </DescDetailsHair>
                            )
                        }
                        {
                             node.type === type.type && node.type === "ADD ON SERVICES" &&(
                                    <DescDetails add>
                                        <DescTime>
                                            {node.title}
                                        </DescTime>
                                        <DescPrice add>
                                            {node.time}
                                        </DescPrice>
                                    </DescDetails>
                            )
                        }
                    </div>
                )
            })}
        </>
    )
}
const SkinServiceMobileDesc = ({ services }) => {

    const result = services.map(({ node }) => node.type)
    const sort = result.filter((item,
        index) => result.indexOf(item) === index);
    return (
        <>
            {sort.map((data) => {
                const [toggle, toggleNav] = useState(false);

                return (
                    <div key={data}>
                        {data !== null && data !== '' &&
                            (
                        <DescTittle key={data} onClick={() => toggleNav(!toggle)}>
                            <p>{data}</p>
                            <Flecha className="flecha" stroke={colors.green} />
                        </DescTittle>
                         )}
                        <Show open={toggle}>
                            {services.map(({ node }) => {
                                return (
                                    <div key={node.id}>
                                        {
                                             node.type === data && node.type !== "ADD ON SERVICES" &&
                                             (
                                                <DescDetailsHair>
                                                {node.title !== node.type &&(
                                                        <DescTitleHair>
                                                            {node.title}
                                                        </DescTitleHair>
                                                    )} 
                                                <DescHairText>{node.description}</DescHairText>

                                                <DescDetails>
                                                    <DescTime>
                                                        {node.time}
                                                    </DescTime>
                                                    <DescPrice>
                                                        {node.price}
                                                    </DescPrice>
                                                </DescDetails>

                                                <DescHairText note >{node.note}</DescHairText>

                                            </DescDetailsHair>
                                               
                                            )
                                        }
                                        {
                                        node.type === data && node.type === "ADD ON SERVICES" &&(
                                            <DescDetails add>
                                                <DescTime add>
                                                    {node.title}
                                                </DescTime>
                                                <DescPrice add>
                                                    {node.time}
                                                </DescPrice>
                                            </DescDetails>
                            )
                        }
                                    </div>
                                )
                                
                            })}
                             {data !== "ADD ON SERVICES" && (
                                <a href="https://squareup.com/appointments/book/18a837f7-27d0-4fb3-9184-eed5ec31a526/9XWS7XZK8MK0T/services" target="_blank" rel="noreferrer">BOOK NOW </a>
                            )}
                           
                        </Show>
                    </div>
                )
            })}
        </>
    )
}

const HairServiceDesc = ({ services, type }) => {


    return (
        <>
            <DescHairTittle><p>{type.type}</p>
                <a href="https://squareup.com/appointments/book/18a837f7-27d0-4fb3-9184-eed5ec31a526/9XWS7XZK8MK0T/services" target="_blank" rel="noreferrer">
                    <DescBook>BOOK NOW</DescBook>
                </a>
            </DescHairTittle>
            {services.map(({ node }) => {
                return (
                    <div key={node.id}>
                        {
                            node.type === type.type &&
                            (
                                <DescDetailsHair>
                                    <DescTitleHair>
                                        {node.title}
                                    </DescTitleHair>
                                    <DescHairText>{node.description}</DescHairText>
                                    <DescPriceHair>
                                        {node.price}
                                    </DescPriceHair>
                                </DescDetailsHair>
                            )
                        }
                    </div>
                )
            })}
        </>
    )
}
const HairServiceMobileDesc = ({ services }) => {

    const result = services.map(({ node }) => node.type)
    const sort = result.filter((item,
        index) => result.indexOf(item) === index);
    return (
        <>
            {sort.map((data) => {
                const [toggle, toggleNav] = useState(false);

                return (
                    <div key={data}>
                        {data !== null && data !== '' &&
                            (
                                <DescTittle key={data} onClick={() => toggleNav(!toggle)}>
                                    <p>{data}</p>
                                    <Flecha className="flecha" stroke={colors.green} />
                                </DescTittle>
                            )}
                        <Show open={toggle}>
                            {services.map(({ node }) => {
                                return (
                                    <div key={node.id}>
                                        {
                                            node.type === data &&
                                            (
                                                <DescDetailsHair>
                                                    <DescTitleHair>
                                                        {node.title}
                                                    </DescTitleHair>
                                                    <DescHairText>{node.description}</DescHairText>
                                                    <DescPriceHair>
                                                        {node.price}
                                                    </DescPriceHair>
                                                    <a href="https://squareup.com/appointments/book/18a837f7-27d0-4fb3-9184-eed5ec31a526/9XWS7XZK8MK0T/services" target="_blank" rel="noreferrer">BOOK NOW </a>

                                                </DescDetailsHair>

                                            )
                                        }
                                    </div>
                                )
                            })}
                        </Show>
                    </div>
                )
            })}
        </>
    )
}

const BodyServiceDesc = ({ services, type }) => {


    return (
        <>
            <DescBodyTittle><p>{type.type}</p>
                <a href="https://squareup.com/appointments/book/18a837f7-27d0-4fb3-9184-eed5ec31a526/9XWS7XZK8MK0T/services" target="_blank" rel="noreferrer">
                    <DescBook>BOOK NOW</DescBook>
                </a>
            </DescBodyTittle>

            {services.map(({ node }) => {
                return (
                    <div key={node.id}>
                        {
                            node.type === type.type &&
                            (
                                <>
                                    <DescDetailsBody>
                                        <DescTitleBody>
                                            {node.title}
                                        </DescTitleBody>
                                        <DescPriceBody>
                                            {node.price}
                                        </DescPriceBody>
                                        {node.description !== null &&
                                            (<Desc>
                                                {node.description}
                                            </Desc>)}

                                        <DescNoteBody>
                                            {node.note}
                                        </DescNoteBody>
                                    </DescDetailsBody>

                                </>
                            )
                        }
                    </div>
                )
            })}
        </>
    )
}
const BodyServiceMobileDesc = ({ services }) => {

    const result = services.map(({ node }) => node.type)
    const sort = result.filter((item,
        index) => result.indexOf(item) === index);
    return (
        <>
            {sort.map((data) => {

                const [toggle, toggleNav] = useState(false);

                return (
                    <>
                        <DescTittle key={data} open={toggle} onClick={() => toggleNav(!toggle)}>
                            <p>{data}</p>
                            <Flecha className="flecha" stroke={colors.green} />
                        </DescTittle>
                        <Show open={toggle}>
                            {services.map(({ node }) => {
                                return (
                                    <div key={node.id}>
                                        {
                                            node.type === data &&
                                            (
                                                <DescDetailsBody>
                                                    <DescTitleBody>
                                                        {node.title}
                                                    </DescTitleBody>
                                                    <DescPriceBody>
                                                        {node.price}
                                                    </DescPriceBody>
                                                    <Desc>
                                                        {node.description}
                                                    </Desc>
                                                    <DescNoteBody>
                                                        {node.note}
                                                    </DescNoteBody>
                                                    <a href="https://squareup.com/appointments/book/18a837f7-27d0-4fb3-9184-eed5ec31a526/9XWS7XZK8MK0T/services" target="_blank" rel="noreferrer">BOOK NOW </a>

                                                </DescDetailsBody>
                                            )
                                        }
                                    </div>
                                )
                            })}
                        </Show>
                    </>
                )
            })}
        </>
    )
}

export { SkinServiceDesc, HairServiceDesc, BodyServiceDesc, HairServiceMobileDesc, SkinServiceMobileDesc, BodyServiceMobileDesc }