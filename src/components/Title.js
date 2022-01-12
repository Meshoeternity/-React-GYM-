import { Col, Row } from "react-bootstrap";
import styles from "./Title.module.css"
import video from "../assets/video (1).mp4"


function Title() {
    return (
<>
<div className={styles.titles}>
<Row>
    <Col md={6}>
    <p>
    Platina is the most popular name in fitness serving more than 3 million members in 60 countries around the world.
     Platina has constantly developed its profile by providing gyms with the best amenities and the latest cardio and strength training equipment.
      As well as the most dynamic group exercise programmes. 
      Including Zumba, yoga, group cycling, mixed martial arts, and muscle endurance training. 
      You will find an active and supportive environment filled with all kinds of people who are committed to achieving their goals.
    </p>
    </Col>
    <Col md={6}>
    <>
      <video className={styles.video} src={video} autoPlay muted loop></video>
    </>
    </Col>
    </Row>

</div>


</>



      )
}

export default Title ;