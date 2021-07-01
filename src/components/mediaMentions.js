import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components"

const StyledMedia = styled.div`  
  display: grid;
  grid-template-columns: repeat(2 1fr);
  grid-template-rows: 1fr;
  grid-gap: 3rem;
  margin: 3rem auto;

  

`

const StyledTitle = styled.div` 
  h3 {
    color: var(--olive);
    font-size: 1.8rem;
  }

`
const StyledSubTitle = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h4 {
    color: var(--olive);
  }

`
const StyledStory = styled.div` 
  display: flex;
  flex-direction: column;

`

function MediaMention({ mention }) {
  const image = getImage(mention.image.asset)
 

  return (
    <>
      <GatsbyImage image={image} alt={mention.name} />
      <StyledTitle>
      <h3>{mention.name}</h3>
      <StyledSubTitle>     
      <h4>Publication: {mention.mediaTitle}</h4>
      <h4>Issue: {mention.issue}</h4>
      </StyledSubTitle>
      
      <StyledStory>
      <h4>{mention.person}</h4>
      <p>{mention.summary}</p>
    </StyledStory>
     </StyledTitle>
    </>
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
