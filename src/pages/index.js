import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Container from "react-bootstrap/Container"
import Header from "../components/header"


const IndexPage = ({ ...props }) => {
  const { backgroundImageMain } = useStaticQuery(
    graphql` 
         query {
            backgroundImageMain: file(relativePath: {eq: "AD_bkgrd_1.jpg"}) {
               childImageSharp {
                  gatsbyImageData(
                     width: 1440,
                     quality: 90,
                     webpOptions: {quality: 90}
                     placeholder: BLURRED,
                     formats: WEBP
                  )
               }
            }
         }
      `
  )
  
  const pluginImage = getImage(backgroundImageMain)
  return (
    <>
    <BgImage image={pluginImage} className="bg">
       <Header /> 
    <Container>
     
      
 
    </Container>
    </BgImage>
    </>
  )
}

export default IndexPage
