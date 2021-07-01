import React from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Header from "../components/header"
import Designs from "../components/designWork"



const DesignsPage = ({  data, ...props }) => {
   
   const designs = data.data.nodes
  
  return (
    <>
   <Header />
    <Container>
     <Designs designs={designs} />
      
 
    </Container>
   
    </>
  )
}

export default DesignsPage

export const query = graphql` 
 query designsQuery {
    data: allSanityDesigns {
       nodes {
          id
          name
          spaceDesigned
          budget
          compDate
          suburb
          summary
          slug {
             current
          }
          image {
             asset {
                gatsbyImageData(
                   width: 400
                   height: 400
                   placeholder: BLURRED
                   formats: [AUTO, WEBP]
                   fit: FILL
                )
             }
          }
          imageA {
             asset {
                gatsbyImageData(
                   width: 400
                   height: 400
                   placeholder: BLURRED
                   formats: [AUTO, WEBP]
                   fit: FILL
                )
             }
          }
          imageB {
             asset {
                gatsbyImageData(
                   width: 400
                   height: 400
                   placeholder: BLURRED
                   formats: [AUTO, WEBP]
                   fit: FILL
                )
             }
          }

       }
    }
 }
`
