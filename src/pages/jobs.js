import React from "react"
import styles from "./jobs-css.module.css"
import { Link } from "gatsby"
import Container from "../components/container"

const Job = props => (
  <div className={styles.job}>
    {
      props.securitas ?
        <img src={props.securitas} className={styles.securitas} alt="" /> : null
    }
    {
      props.meng ?
        <img src={props.meng} className={styles.meng} alt="" /> : null
    }
    <div className={styles.description}>
      <h2 className={styles.jobname}>{props.jobname}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <Link to="/">Home</Link>
    <h1>Job History</h1>
    <Job
      jobname="Securitas"
      securitas="https://i.imgur.com/CSNNmJG.jpg"
      excerpt="Worked at Mid Coast Hospital in Brunswick Maine as contracted security from April 2014 to September 2018, attaining the position of Shift Supervisor for weekend overnights. My job duties included leading a team of 3 to 4 individutals in high stress situations, maintaining accurate records of shift events, and ensuring the safety of employees, visitors, and patients of the hospital."
    />
    <Job
      jobname="Maine Army National Guard"
      meng="https://i.imgur.com/8hFSU9z.jpg"
      excerpt="Enlisted in the Maine Army National Guard as a Military Police officer from May 2013 to May 2019. After Completing Military Police OSUT in February of 2014, I reported to my unit at the 488th Military Police Company in Waterville Maine where I remained an M-day soldier for the duration of my time in service. Typical functions of my job included doing regularly scheduled checks and services on various vehicles and pieces of equipment I had been trained on, training for conducting various Military Police missions, and carrying out State-side missions. As a requirement of being a Military Police officer I received and maintained a secret level security clearence."
    />
    <Link to="/">Home</Link>
  </Container>
)
