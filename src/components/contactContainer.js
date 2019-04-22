import React from "react"
import containerStyles from "./contactContainer.module.css"

export default ({ children }) => (
  <div className={containerStyles.ContactContainer}>{children}</div>
)
