
import styles from "./CoachItem.module.css"


function CoachProfile(props) {
    
    const{coach}=props
    return (
        <>
        <div className={styles.allgroup}>
        <aside className={styles.profilecard}>

<header>
  <a >
    <img src={coach.photo}/>
  </a>

  <h1>{coach.firstName}{coach.lastName}</h1>

  {" "}
  
  <h2>- {coach.sport?.title} -</h2>

</header>

<div  className={styles.profilebio}>
</div>
</aside>

</div>

        </>
      );
}

export default CoachProfile;