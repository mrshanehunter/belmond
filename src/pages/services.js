import React from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Header from "../components/header"
import ServiceOffering from "../components/service-offering"


const ServicesPage = ({ data, ...props }) => {
  const services = data.data.nodes

  return (
    <>
    
       <Header /> 
    <Container>
     
      <ServiceOffering services={services} />
 
    </Container>
    
    </>
  )
}

export default ServicesPage

export const query = graphql` 
 query servicesQuery {
    data: allSanityServices {
       nodes {
          id
          serviceName
          image {
             asset {
                gatsbyImageData(
                   width: 350
                   height: 350
                   placeholder: BLURRED
                   formats: [AUTO, WEBP]
                   fit: MIN
                )
             }
          }
       } 
    }
 }  
`
