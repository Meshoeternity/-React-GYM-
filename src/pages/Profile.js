import { useContext } from "react"
import { Row } from "react-bootstrap"
import SportProfile from "../components/Sportprofile"
import SportsContext from "../utils/SportsContext"
import styles from "./Profile.module.css"
import { Button } from "react-bootstrap"
//-----------------------------------------------------------------------

//------------------------------------------------------------
function Profile(props) {
  const { profile, deletesubscribePrivtClass } = useContext(SportsContext)
  const { privtclassId } = props

  console.log(profile)
  if (!profile) return <h1>Loading...</h1>
  return (
    <>
      <img
        src="https://images.pexels.com/photos/7991645/pexels-photo-7991645.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        style={{
          width: "100%",
          position: "absolute",
          zIndex: "-1",
          // height: "100vh",
          minHeight: "100vh",
          top: "0",
          backgroundsize: "cover",
          backgroundRepeat: "no-repeat",
          background: "linear-gradient(rgba(0,0,0,0.75)  ,rgba(0,0,0,0.75))",
        }}
      />

      <div className={styles.profilegroup}>
        <h1 className={styles.titlepen}>
          {" "}
          User Profile <span>{profile.firstName}</span>
        </h1>
        <div className={styles.userprofile}>
          <img className={styles.avatar} src={profile.avatar} alt="Ash" />
          <div className={styles.username}>
            {profile.firstName} {profile.lastName}
          </div>

          <div className={styles.description}>{profile.email}</div>
        </div>
      </div>

      <h1 className={styles.hh3}>Subscribeclass</h1>

      <Row className="mt-5" md={5}>
        {profile.classes.map(classs => (
          <SportProfile sport={classs.sport} classId={classs._id} key={classs._id} />
        ))}
      </Row>
      <h1 className={styles.hh3}>Privtclass</h1>
      <Row className="mt-5" md={5}></Row>
      {/* //------------------------------------------------------------------------- */}
      {profile.privtclass ? (
        <div className={styles.all}>
          <div className={styles.card}>
            <img height="100%" width="100%" src={profile.privtclass.coach.photo} style={{ objectFit: "cover" }} />
          </div>
          <h2>
            {" "}
            {profile.privtclass?.coach?.firstName} {profile.privtclass?.coach?.lastName}
          </h2>
          <h3> Time - {profile.privtclass.time}</h3>
          <Button
            variant="warning"
            onClick={() => {
              deletesubscribePrivtClass(profile.privtclass._id)
            }}
          >
            delete
          </Button>
        </div>
      ) : null}
    </>
  )
}

export default Profile
