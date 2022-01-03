import { useContext } from "react"
import SportsContext from "../utils/SportsContext";
import styles from "./Profile.module.css"



  
function Profile() {
    const { profile } = useContext(SportsContext)
    if (!profile) return <h1>Loading...</h1>
    return ( 
       <>
        <div  className={styles.profilegroup}>
       <h1  className={styles.titlepen}> User Profile <span>UI</span></h1>
<div  className={styles.userprofile}>
	<img  className={styles.avatar} src={profile.avatar} alt="Ash" />
    <div  className={styles.username}>{profile.firstName} {profile.lastName}</div>
  {/* <div  className={styles.bio} >
  	Senior UI Designer
  </div> */}
    <div  className={styles.description}>
    {profile.email}
  </div>
  {/* <ul class="data">
    <li>
      <span class="entypo-heart"> 127</span>
    </li>
    <li>
      <span class="entypo-eye"> 853</span>
    </li>
    <li>
      <span class="entypo-user"> 311</span>
    </li>
 </ul> */}
</div>
  <footer>
    <h1>inspired by 
 
  <span class="entypo-dribbble"></span> shot
    </h1>
  </footer>
  </div>
       
       </> 
     );
}

export default Profile