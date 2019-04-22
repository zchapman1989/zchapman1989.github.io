import React from "react"
import styles from "./education-css.module.css"
import { Link } from "gatsby"
import Container from "../components/container"

const Education = props => (
  <div className={styles.education}>
    {
      props.leonardwood ?
        <img src={props.leonardwood} className={styles.leonardwood} alt="" /> : null
    }
    {
      props.school ?
        <img src={props.school} className={styles.school} alt="" /> : null
    }
    <div className={styles.description}>
      <h2 className={styles.schoolname}>{props.schoolname}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <Link to="/">Home</Link>
    <h1>Education</h1>
    <Education
      schoolname="Brunswick High School"
      school="https://i.imgur.com/2ddYpT7.jpg"
      excerpt="Attended Brunswick High School in Brunswick Maine from 2004 to 2008. Received G.E.D from Merrymeeting Adult Education in 2011. "
    />
    <Education
      schoolname="Maine Army National Guard"
      leonardwood="https://i.imgur.com/r6nZQg3.jpg"
      excerpt="Attended Army Basic Training and Military Police OSUT at Fort Leonard Wood Missouri from September 2013 to February 2014."
    />
    <Link to="/">Home</Link>
  </Container>
)
