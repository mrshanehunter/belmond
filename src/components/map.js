import React from "react"
import GoogleMapReact from "google-map-react"
import LocationPin from "./locationPin.js"



const Map = ({ location, zoomLevel }) => {

 const API_KEY = `${process.env.GATSBY_MAP_KEY}`

 

 return  (
  <div className="google-map">
    <GoogleMapReact
      bootstrapURLKeys={{ 
        key: API_KEY,
        language: 'en',
        libraries:['places'],
       }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
          />
      </GoogleMapReact>
  </div>
)
      }
export default Map;