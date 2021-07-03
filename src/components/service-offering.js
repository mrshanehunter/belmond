import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import styled from "styled-components"


const StyledService = styled.div` 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
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
    box-shadow: 0 0 5rem rgba(0, 0, 0, 0.5);
    :hover {
      filter: grayscale(0%);
    }
  }

`

function Service({ service }) {
  const image = getImage(service.image.asset)
 

  return (
    <div>
      <GatsbyImage image={image} alt={service.serviceName} />
      <h4>{service.serviceName}</h4>
     
    </div>
  )
}

export default function ServiceOffering({ services }) {
 
  return (
    <>
      <StyledService>
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
        
        </StyledService>
    </>
  )
}

