import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { HairServiceDesc, HairServiceMobileDesc } from "./servicies";

export const useHairService = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGoogleHairSheet {
          edges {
            node {
              id
              category
              type
              title
              price
              description
            }
          }
        }
      }
      `
  )
  return data.allGoogleHairSheet.edges
}

const HairService = (type) => {
  const kawai = useHairService()
  return (
    <>
      <HairServiceDesc services={kawai} type={type} />
    </>
  )
}

const HairMobileService = () => {
  const kawai = useHairService()
  return (
    <>
      <HairServiceMobileDesc services={kawai} />
    </>
  )
}


export {
  HairService,
  HairMobileService
}
