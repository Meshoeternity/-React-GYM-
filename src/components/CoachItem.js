import styles from "./CoachItem.module.css"

function CoachItem(props) {
  const { coach } = props

  console.log(coach.sport.map(s => s.classes.map(classs => classs.time)))
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
                  <p>{classs.time}</p>
                ))}
              </>
            ))}
          </header>

          <div className={styles.content}>
            <a href="#">Privt-Class</a>
          </div>
        </aside>
      </div>
    </>
  )
}

export default CoachItem
