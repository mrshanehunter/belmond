import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import styled from "styled-components"

const StyledDesign = styled.div` 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 350px;
  grid-gap: 3rem;
  margin: 3rem auto;
  h4 {
    color: var(--olive);
    margin-top: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    text-shadow: 0.05rem 0.05rem var(--black);
  }
  .gatsby-image-wrapper {
    filter: grayscale(100%);
    border-style: ridge;
    border-color:  var(--olive);
    border-width: 0.25rem;
    :hover {
      filter: grayscale(0%);
    }
  }

`

function Design({ design }) {
  const image = getImage(design.image.asset)

  return (
    <div>
      <GatsbyImage image={image} alt={design.name} />
      <h4>{design.name}</h4>

    </div>
  )
}

export default function Designs({ designs }) {
  console.log("Designs:", designs)
  return (
    <>
      <StyledDesign>
        {designs.map((design) => (
          <Design key={design.id} design={design} />
        ))}
        
        </StyledDesign>
    </>
  )
}

