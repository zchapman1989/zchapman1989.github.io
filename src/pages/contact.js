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

  &:hover{
    border-radius: 50%;
    background-color: #8c172b;
    transition: border-radius .8s, background-color 1.4s;
  }
`;

export default () => (
  <ContactContainer>
    <div><Link to="/">Home</Link></div>
    <div><Button1 href="mailto:zchapman1989.gmail.com">Email Me</Button1></div>
    <div><Button1 href="https://www.linkedin.com/in/zachary-chapman-3588a0185/">Linkedin</Button1></div>
    <div><Button1 href="https://github.com/zchapman1989">Github</Button1></div>
    <div><Link to="/">Home</Link></div>
  </ContactContainer>
)
