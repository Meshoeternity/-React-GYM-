import styles from "./CoachItem.module.css"
import { useContext, useState } from "react"
import SubClass from "./SubClass"
import SportsContext from "../utils/SportsContext"
import { Button } from "react-bootstrap"

function CoachProfile(props) {
  const { coach, privtclassId } = props

  const { deletesubscribePrivtClass } = useContext(SportsContext)

  return (
    <>
      <div className={styles.allgroup}>
        <aside className={styles.profilecard}>
          <header>
            <a>
              <img src={coach.photo} />
            </a>
            <h1>
              {coach.firstName}
              {coach.lastName}
            </h1>{" "}
            {/* <h2>- {coach.sport?.title} -</h2> */}
          </header>

          <div className={styles.profilebio}></div>
        </aside>
      </div>
      <Button
        variant="warning"
        onClick={() => {
          deletesubscribePrivtClass(privtclassId)
        }}
      >
        delete
      </Button>
    </>
  )
}

export default CoachProfile
