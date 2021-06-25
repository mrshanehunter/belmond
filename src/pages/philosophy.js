import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Container from "react-bootstrap/Container"
import Header from "../components/header"
import Philosophys from "../components/philosophys"


const PhilosophyPage = ({ data, backgroundImagePhilosophy, ...props }) => {
  const philosophys = data.data.nodes
  const imagebg = data.backgroundImagePhilosophy
  const pluginImage = getImage(imagebg)
  return (
    <>
    <BgImage image={pluginImage} className="bg">
       <Header /> 
    <Container>
     
      <Philosophys philosophys={philosophys} />
 
    </Container>
    </BgImage>
    </>
  )
}

export default PhilosophyPage

export const query = graphql` 
   query {
      data: allSanityPhilosophys(sort: {fields: name}) {
         nodes {
            id
            name
            p_text
         }
      }
      backgroundImagePhilosophy: file(relativePath: {eq: "AD_bkgrd_Psphy.jpg"}) {
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