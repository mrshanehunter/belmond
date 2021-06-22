import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const LogoStyled = styled.div` 
display: flex;
justify-content: center;
  
  background: transparent;
  padding: 0;
`

 const Logo = () => {
   const data = useStaticQuery(graphql`{
     placeholderImage: file(relativePath: {eq: "FFMLOGO.png"}) {
       childImageSharp {
         gatsbyImageData(width: 400, layout: CONSTRAINED)
       }
     }
   }
  `)

  if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture Not Found</div>
  }
  return (
    <LogoStyled>
      <GatsbyImage image={data.placeholderImage.childImageSharp.gatsbyImageData} alt="FFM Logo" />
    </LogoStyled>
  );
}

export default Logo;