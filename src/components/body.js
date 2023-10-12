import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BodyServiceDesc, BodyServiceMobileDesc } from "./servicies";

export const useBodyService = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGoogleBodySheet {
          edges {
            node {
              id
              category
              type
              title
              time
              price
              note
              description
            }
          }
        }
      }
      `
  )
  return data.allGoogleBodySheet.edges
}

const BodyService = (type) => {
  const kawai = useBodyService()
  return (
    <>
      <BodyServiceDesc services={kawai} type={type} />
    </>
  )
}
const BodyMobileService = () => {
  const kawai = useBodyService()
  return (
    <>
      <BodyServiceMobileDesc services={kawai} />
    </>
  )
}


export {
  BodyService,
  BodyMobileService
}
