import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
  --blue: #30353e;
  --olive: #9c9b8b;
  --white: #fefefa;
}

html {
  background-color: #fefefa;
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
  color: var(--blue);
}

h1, h2, h3, h4, h5, h6 {
  font-family: "poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  
}

.bg {
  width: 100vw;
  height: 100vh;
}

.container {
  padding: 0;
  margin: 0;
}


`

export default GlobalStyles