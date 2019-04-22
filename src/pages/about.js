import React from "react"
import Container from "../components/container"
import { Link } from "gatsby"
import {Grid, Cell} from "styled-css-grid"
import styled from "styled-components"




const StyledCell= styled(Cell)`
color: black;
display: inline-block;
justify-content: center;
align-items:center;
`


const StyledGrid= styled(Grid)`
color: black;
width: 800px;
margin-left: auto;
margin-right: auto;
`

export default () => (
  <Container>
    <Link to="/">Home</Link>
    <h1>About Me</h1>
    <StyledGrid
      columns="300px 450px"
      rows="500px 500px"
      gap="40px">
      <StyledCell><img src="https://i.imgur.com/CkEQOHQ.jpg" alt="" /></StyledCell>
      <StyledCell> After working several "Dead end" jobs over the years I decided it was time for a career change. Software engineering was suggested to me originally by a friend as it would put several of my personal and intellectual strengths to use where my previous jobs had not. A bit of a perfectionist, I have found the field to be perfect for me. I have taken a non-conventional route in regards to my education, opting to self-study instead of attending a traditional school as I felt being able to focus on current industry standards and practices would benefit me and my future employers more than a typical college course or dime-a-dozen "coding bootcamp" would.   </StyledCell>
      <StyledCell> I have a beautiful wife, CaraRose, who has been my biggest supporter and motivator through out my career change, and had it not been for her I would still be lamenting my lack of true career path. I have one step daughter, and a newborn son. </StyledCell>
      <StyledCell><img src="https://i.imgur.com/jc5TRCb.jpg" alt="" /></StyledCell>
    </StyledGrid>
    <Link to="/">Home</Link>
  </Container>
)
