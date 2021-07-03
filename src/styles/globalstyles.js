import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
  --blue: #30353e;
  --olive: #9c9b8b;
  --white: #fefefa;
  --black: #070707;
}

html {
  background-color: var(--blue);
  font-size: 62.5%;
  margin: 0;
  padding: 0;
}

body {
  background-color: transparent;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

p {
  font-family: "ff-angie-pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: var(--olive);
}

h1, h2, h3, h4, h5, h6 {
  font-family: "poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  
}

a {
  text-decoration: none;
}

.bg {
  width: 100vw;
  height: 100vh;
  filter: grayscale(100%);
  :hover {
    filter: grayscale(0%);
  }
}

.contentContainer {
  min-width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: transparent;
  
}

.aboutUs {
  width: 50%;
  margin: 4rem auto;
  h3 {
    color: var(--olive);
    text-transform: lowercase;
    letter-spacing: 0.15px;
    text-shadow: 0.15px 0.15px var(--black);
  }
  hr {
    height: 2px;
    background: var(--olive);
    border: none;
  }
  p {
    font-size: 1.4rem;
  }
}

.flexCont {
  width: 100%;
}

.philosophyDiv {
  padding: 0.75rem;
  p {
    opacity: 0;
  }
}

.philosophyDiv:hover {
  background-color: var(--blue);
  opacity: 0.9;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0,0,0,0.5);
  p {
    opacity: 1;
  }
}


`

export default GlobalStyles