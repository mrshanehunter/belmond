import React from "react"
import styled from "styled-components"

const StyledPhilosophy = styled.div` 
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 150px;
  grid-gap: 2rem;
  margin: 38rem auto;
  h2 {
    color: var(--olive);
    text-shadow: 0.175rem 0.175rem var(--black);
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  p {
    font-size: 1.2rem;
    text-align: justify;
  }
  

`

function Philosophy({ philosophy }) {
  

  return (
    <div>
      
      <h2>{philosophy.name}</h2>
      <p>{philosophy.p_text}</p>

    </div>
  )
}

export default function Philosophys({ philosophys }) {
  
  return (
    <>
      <StyledPhilosophy>
        {philosophys.map((philosophy) => (
          <Philosophy key={philosophy.id} philosophy={philosophy} />
        ))}
        
        </StyledPhilosophy>
    </>
  )
}

