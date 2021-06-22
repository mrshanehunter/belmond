import React from "react"
import GlobalStyles from "../styles/globalstyles"
import Container from "react-bootstrap/Container"


export default function Layout({ children }) {

  return (
    <>
      <GlobalStyles />
      <Container className="contentContainer">
      
        {children}
      </Container>

    </>
  )
}