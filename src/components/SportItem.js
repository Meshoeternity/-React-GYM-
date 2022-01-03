import styles from "./SportItem.module.css"
import VanillaTilt from "vanilla-tilt"

VanillaTilt.init(document.querySelectorAll(".card"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3
  });
    

function SportItem (props) {

    const { sport } = props
    return ( 
       
       <>
        <div  className={styles.itemgroup}>

 
<div className={styles.container}>
    
  <div className={styles.card}>
      
    {/* <img src="https://banner2.cleanpng.com/20171127/b68/running-woman-silhouette-png-clip-art-image-5a1cacad82c878.2365204315118286535357.jpg"/> */}
    <img src={sport.poster}/>
    <div className={styles.content}>
      <h2>{sport.title}</h2>
      <p>{sport.coach.firstName}{sport.coach.lastName} </p>
      <a href="#">Order Now</a>
    </div>
  </div>
  
  {/* <div className={styles.card}>
    <img src="https://banner2.cleanpng.com/20171127/b68/running-woman-silhouette-png-clip-art-image-5a1cacad82c878.2365204315118286535357.jpg"/>
    <div className={styles.content}>
      <h2>GRILLED FISH</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <a href="#">Order Now</a>
    </div>
  </div> */}
  
  {/* <div className={styles.card}>
    <img src={sport.poster}/>
    <div className={styles.content}>
      <h2>CHICKEN BURGER</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <a href="#">Order Now</a>
    </div>
  </div> */}
</div>
</div>

        </>
     );
}

export default SportItem
