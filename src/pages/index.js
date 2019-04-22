import React from "react"
//import Button from "../components/button-grid.css"
import Container from "../components/container"
import { Link } from "gatsby"
import {Grid, Cell} from "styled-css-grid"
import styled from "styled-components"

const StyledCell= styled(Cell)`
  color: blue;
  text-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: #777 1px 1px 1px;
  position: relative;
  curser: pointer;
  font-size: 40px;
  background-size: cover;
  background: url(${
    props => {
      if(props.contact){
        return "https://i.imgur.com/1plVJGZ.png"
      }
      if(props.about){
        return "https://i.imgur.com/xw04y4O.png"
      }
      if(props.jobs){
        return "https://i.imgur.com/s986Vg5.png"
      }
      if(props.education){
        return "https://i.imgur.com/hV73nHn.png"
      }
    }
  });

  &:hover {
    &:before {
      background: transparent;
      content: '';
    }
    a {
      opacity: 0;
      transition: opacity .8s;
    }
  }

  &:before {
    background: rgba(0,0,0, .6);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    content: '';
  }

  a {
    z-index: 1;
  }

  a:-webkit-any-link{
    text-decoration: none;
  }

  a:visited{
    color: orange;
  }
`;

const StyledGrid= styled(Grid)`
  color: black;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: silver;
  box-shadow: 0 0 25px rgba(0,0,0,.6);
  margin-bottom:75px;
`;

export default () => (
  <Container>
    <h1>Zachary Chapman</h1>
    <StyledGrid
      columns="200px 200px"
      rows="200px 200px"
      gap="5px">
      <StyledCell about><Link to="/about/">about me</Link></StyledCell>
      <StyledCell jobs><Link to="/jobs/">job history</Link></StyledCell>
      <StyledCell education><Link to="/education/">education</Link></StyledCell>
      <StyledCell contact><Link to="/contact/">contact</Link></StyledCell>
    </StyledGrid>
  </Container>
)
