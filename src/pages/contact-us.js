import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Container from "react-bootstrap/Container"
import Header from "../components/header"


const ContactPage = ({ ...props }) => {
  const { backgroundImageSvcs } = useStaticQuery(
    graphql` 
         query {
            backgroundImageSvcs: file(relativePath: {eq: "AD_bkgrd_Svcs.jpg"}) {
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
  
  const pluginImage = getImage(backgroundImageSvcs)
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


export default ContactPage
