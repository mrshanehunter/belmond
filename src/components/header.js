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
h3 {
  color: var(--blue);
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
      <h3>about us</h3>
    </StyledNavBar>
    </StyledHeader>
  </>
  )
}
