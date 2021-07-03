import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components"

const StyledMedia = styled.div`  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 3rem;
  margin: 3rem auto;
  padding-bottom: 4rem;
  
  

`

const StyledTitle = styled.div` 
  width: 50%;
  padding-left: 1.5rem;

  h3 {
    color: var(--olive);
    font-size: 1.8rem;
    padding: 1rem 0 0.25rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    text-shadow: 0.05rem 0.05rem var(--black);
  }

`
const StyledSubTitle = styled.div` 
  display: flex;
 flex-direction: row;
 justify-content: space-between;
 padding: 0.25rem 0 1rem; 
 h4 {
  color: var(--olive);
  opacity: .5;
  

 }
  
`
const StyledStory = styled.div` 
  display: flex;
  flex-direction: column;
  h4 {
    display: flex;
    flex-direction: row;
    color: var(--olive);
    opacity: 0.5;
    margin-bottom: 0;
    padding-bottom: 0;
    
  }
  p {
    font-size: 1.4rem;
  }

`

const StyledMention = styled.div` 
  display: flex;
  flex-direction: row;
  filter: grayscale(100%);
  opacity: 0.5;
  .gatsby-image-wrapper {
    border-style: ridge;
    border-color:  var(--olive);
    border-width: 0.25rem;
    box-shadow: 0 0 5rem rgba(0, 0, 0, 0.5);
  }
  :hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`

function MediaMention({ mention }) {
  const image = getImage(mention.image.asset)
 

  return (
    <StyledMention>
    
      <GatsbyImage image={image} alt={mention.name} />
      <StyledTitle>
      <h3>"{mention.name}"</h3>
      <StyledSubTitle>     
      <h4>Publication:<br/><p>{mention.mediaTitle}</p></h4>
      <h4>Issue:<br /><p> {mention.issue}</p></h4>
      </StyledSubTitle>
      
      <StyledStory>
      <h4>Designer:<p style={{paddingLeft: `1rem`, fontSize: `1.6rem`}}> {mention.person}</p></h4>
      <p> {mention.summary}</p>
    </StyledStory>
     </StyledTitle>
    
    </StyledMention>
  )
}

export default function MediaMentions({ mentions }) {
 
  return (
    
      <StyledMedia>
        {mentions.map((mention) => (
          <MediaMention key={mention.id} mention={mention} />
        ))}
        
        </StyledMedia>
   
  )
}
