import React from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Header from "../components/header"
import Designs from "../components/designWork"


const DesignsPage = ({  data, ...props }) => {
   console.log(data)
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

       }
    }
 }
`
