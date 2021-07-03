import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Container from "react-bootstrap/Container"



const ThanksPage = () => {
  const { thanksimage } = useStaticQuery(
      graphql` 
         query {
            thanksimage: file(relativePath: {eq: "AD_bkgrd_Designs.jpg"}) {
               childImageSharp {
                  gatsbyImageData(
                     width: 2000,
                     quality: 50,
                     webpOptions: {quality: 70},
                     placeholder: BLURRED,
                     formats: WEBP
                  )
               }
            }
         }
      ` 
   )


const pluginImage = getImage(thanksimage)

  return (
   <BgImage image={pluginImage} className="bg">
     
     <Container className="w-100 m-3 mx-auto d-flex flex-column justify-content-center align-items-center thanks">
      <h3>Your message was submitted successfully</h3>
      <br />
      <Link to="/">
      <h4>Click here to return to site</h4>
</Link>


     </Container>
  </BgImage>
  )
}

export default ThanksPage