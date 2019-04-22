import React from "react"
import ContactContainer from "../components/contactContainer"
import { Link } from "gatsby"
//import styles from "./contact-css.module.css"
//import {Grid, Cell} from "styled-css-grid"
import styled from "styled-components"


const Button1= styled.a`
    display:inline-block;
    font-size: 36px;
    text-decoration: none;
    border: 5px solid #4780d8;
    background-color: #7fa8e8;
    padding: 10px;
    margin: 10px;
    border-radius: 14px;
    color: white;
    transition-duration: 1s;

    &:hover{
      border-radius: 50%;
      background-color: #8c172b;
      transition: border-radius .5s;
    }

`;

// const Contact = props => (
//   <div className={styles.contact}>
//   </div>
// )

export default () => (
  <ContactContainer>
    <div><Link to="/">Home</Link></div>
    <Button1 href="mailto:zchapman1989.gmail.com">Email Me</Button1>
    <div><Link to="/">Home</Link></div>
  </ContactContainer>
)
