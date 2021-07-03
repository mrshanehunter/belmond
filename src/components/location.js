import React from "react"
import Map from "./map"


export default function Location() {
  
  const location = {
    address: "S1/84 Walpole Street, London SW3 4TZ UK ",
    lat: 51.490931,
    lng: -0.161388,
  }

  return (
    
      <Map location={location} zoomLevel={15} />
     
      
    
  )
}