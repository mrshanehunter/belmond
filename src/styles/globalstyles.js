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

.contactFormCard {
  width: 45%;
  height: 17.5vh;
  opacity: 0.75;
  position: absolute;
  bottom: 5%;
  left: 2%;
  h3 {
    color: var(--olive);
    font-size: 1.8rem;
    padding: 1rem 0 0.25rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    text-shadow: 0.05rem 0.05rem var(--black);
  }
}

.contactFormCard {
  label {
    width: 75%;
    margin-left: 5%;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    color: var(--blue);
    text-shadow: 0.05rem 0.05rem var(--white);
  }
  input {
    width: 75%;
    margin-left: 5%;
  }
  textarea {
    width: 75%;
    margin-left: 5%;
  }
}

.formBtn {
  text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    text-shadow: 0.05rem 0.05rem var(--black);
    background: var(--olive);
    margin-left: 5%;
}

.google-map {
  width: 45%;
  height: 35vh;
  opacity: 0.75;
  position: absolute;
  bottom: 5%;
  right: 2%;
  border-style: ridge;
    border-color:  var(--olive);
    border-width: 0.25rem;
    box-shadow: 0 0 5rem rgba(0, 0, 0, 0.5);
  @media (max-width: 576px)  {
    width: 80%;
    margin: 1rem auto;
    height: 40rem;
  }
}

.pin {
  display: flex;
  align-items: center;
  width: 180px;
  color: red;
}

.pin-icon {
  font-size: 6rem;
}

.pin-text {
  font-size: 1.3rem;
  color: #070707; 
}

.thanks {
  height: 100vh;
  color: var(--olive);
  a {
    color: var(--blue);
    :hover {
      color: var(--olive);
    }
  }
}


`

export default GlobalStyles