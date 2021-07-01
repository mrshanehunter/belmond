import React from "react"
import styled from "styled-components"





const StyledPhilosophy = styled.div` 
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  margin: 2rem  1rem 0;
  display: flex;
  align-items: flex-end;
  
  h2 {
    color: var(--olive);
    text-shadow: 0.175rem 0.175rem var(--black);
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
    text-align: center;
    cursor: pointer;
  }
  p {
    font-size: 1.4rem;
    text-align: justify;
    
  }


`



function Philosophy({ philosophy }) {
  

  return (
    <div className="philosophyDiv">
     <p>{philosophy.p_text}</p>
    <h2>{philosophy.name}</h2>
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

