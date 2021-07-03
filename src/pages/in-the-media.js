import React from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Header from "../components/header"
import MediaMentions from "../components/mediaMentions"


const MediaPage = ({ data, ...props }) => {
  const mentions = data.data.nodes
  return (
    <>
   
       <Header /> 
    <Container>
     
      <MediaMentions mentions={mentions} />
 
    </Container>
  
    </>
  )
}

export default MediaPage

export const query = graphql` 
 query mediaMentionsQuery {
    data: allSanityMediaMentions {
       nodes {
          id
          name
          mediaTitle
          issue
          person
          summary
          image {
             asset {
                gatsbyImageData(
                   width: 250
                   height: 250
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
          
