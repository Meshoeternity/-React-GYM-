import styles from "./CoachItem.module.css"
import { useContext, useState } from "react"
import SubPrivtClass from "./SubPrivtClass"
import { Link } from "react-router-dom"

function CoachItem(props) {
  const { coach, coachId } = props

  console.log(coach.sport.map(s => s.classes.map(classs => classs.time)))

  const [show, setShow] = useState(false)

  const handleOpen = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

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
            {coach.sport.map(s => (
              <>
                <h2>-{s.title}-</h2>
                {s.classes.map(classs => (
                  <h2>{classs.time}</h2>
                ))}
              </>
            ))}
          </header>

          <div className={styles.content}>
            <button onClick={handleOpen}>Privt-Class</button>
          </div>
        </aside>
      </div>
      <SubPrivtClass show={show} key={coachId} coach={coach} handleClose={handleClose} />
    </>
  )
}

export default CoachItem
