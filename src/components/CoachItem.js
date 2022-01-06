
import styles from "./CoachItem.module.css"


function CoachItem(props) {
    
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

{/* <!-- bit of a bio; who are you? --> */}
<div  className={styles.profilebio}>

  <p>{coach.classes}</p>
 

</div>

{/* <!-- some social links to show off --> */}

</aside>
{/* <!-- that’s all folks! --> */}
</div>

        </>
      );
}

export default CoachItem;