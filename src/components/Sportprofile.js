import styles from "./SportItem.module.css"
import VanillaTilt from "vanilla-tilt"

import { useContext, useState } from "react"
import SubClass from "./SubClass"
import SportsContext from "../utils/SportsContext"
import { Button } from "react-bootstrap"

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
})

function SportProfile(props) {
  const { sport,classId} = props
  const {deletesubscribeClass} = useContext(SportsContext)
  
  
  
 

  return (
    <>
    
      <div className={styles.itemgroup}>
        <div className={styles.container}>
          <div className={styles.card}>
           
            <img src={sport.poster} />
            <div className={styles.content}>
              <h2>{sport.title}</h2>
              <p>
                {sport.coach.firstName}
                {sport.coach.lastName}{" "}
              </p>
              <Button variant="warning"  onClick={() => {
                  deletesubscribeClass(classId)
                }} >
           delete
          </Button>
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SportProfile
