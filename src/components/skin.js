import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SkinServiceDesc, SkinServiceMobileDesc } from "./servicies";

export const useSkinService = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGoogleSkinSheet {
          edges {
            node {
              id
              category
              title
              type
              time
              price
              description
              note
            }
          }
        }
      }
      `
  )
  return data.allGoogleSkinSheet.edges
}

const SkinService = (type) => {
  const kawai = useSkinService()
  return (
    <>
      <SkinServiceDesc services={kawai} type={type} />
    </>
  )
}
const SkinMobileService = () => {
  const kawai = useSkinService()
  return (
    <>
      <SkinServiceMobileDesc services={kawai} />
    </>
  )
}


export {
  SkinService, SkinMobileService
}
