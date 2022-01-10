import { useContext } from "react"
import { Row } from "react-bootstrap"
import SportItem from "../components/SportItem"
import SportProfile from "../components/Sportprofile"
import SportsContext from "../utils/SportsContext"
import styles from "./Profile.module.css"

function Profile() {
  const { profile } = useContext(SportsContext)
  if (!profile) return <h1>Loading...</h1>
  console.log(profile)
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
     
      <h2 className={styles.hh3}>Subscribeclass</h2>
     
      <Row className="mt-5"  md={5}>
         
            
              {profile.classes.map(classs => (
            
                <SportProfile sport={classs.sport} classId={classs._id} key={classs._id} />
              ))}
           
           </Row>
           {/* <Row className="mt-5"  md={5}>
              <h3>Privtclass</h3>
              {profile.classes.map(classs => (
            
                <CoachProfile sport={classs.sport} key={classs._id} />
              ))}
           
           </Row> */}

    </>
  )
}

export default Profile
