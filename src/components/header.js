import React from "react"
import styled from "styled-components"
import Logo from "./logo"

const StyledHeader = styled.div`
margin: 0;
padding: 0;
width: 100vw;
height: 150px;
background: var(--white);
opacity: 0.35;
display: flex;
flex-direction: column;
justify-content: center;
:hover {
  opacity: 1;
}
`

const StyledNavBar = styled.div`
margin: 0 auto;
padding: 0;
width: 75vw;
height: 25px;
background: var(--white);
opacity: 0.5;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
h3 {
  color: var(--blue);
  margin-right: 6rem;
  :hover {
    color: var(--olive);
  }
}
:hover {
  opacity: 1
}
`

export default function Header() {
  return (
    <>
    <StyledHeader>
      <Logo />
    <StyledNavBar>
      <a href="/">
        <h3>home</h3>
      </a>
      <a href="/philosophy">
      <h3>philosophy</h3>
      </a>
      <a href="/designs">
      <h3>designs</h3>
      </a>
      <a href="/services">
      <h3>services</h3>
      </a>
      <a href="/in-the-media">
      <h3>media</h3>
      </a>
      <a href="/contact-us">
      <h3>contact us</h3>
      </a>
    </StyledNavBar>
    </StyledHeader>
  </>
  )
}
