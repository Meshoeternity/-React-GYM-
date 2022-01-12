import imag1 from "../assets/swim-Bunner.jpg"
import imag2 from "../assets/تدريب-شخصي-1024x576.jpg"
import imag3 from "../assets/spinning-Bunner.jpg"
import imag4 from "../assets/bassam-1-1.jpg"
import { Card, Col, Row } from "react-bootstrap";
import styles from "./Service.module.css"




function Service() {
    return ( 
        <>

<h1 className={styles.titless}> SERVICES</h1>
<div  className={styles.row}>
<Row className="ms-5 mb-5" >
    <Col   >
    <Card style={{ width: '35rem',
    border:"2px white",
}}  >
  <Card.Img variant="top" src={imag1} />
  <Card.Body>
    <Card.Title className={styles.titl} >{""}Water Exercises {""}</Card.Title>
   
  </Card.Body>
</Card>
    </Col>
    <Col >
    <Card style={{ width: '35rem' , border:"2px white", }} >
  <Card.Img variant="top" src={imag2} />
  <Card.Body>
    <Card.Title className={styles.titl}>{""} Privt Class {""}</Card.Title>
   
  </Card.Body>
</Card>
    </Col>
</Row>
</div>
<div  className={styles.row}>
<Row className="ms-5">
    <Col>
    <Card style={{ width:  '35rem'  , border:"2px white",}}>
  <Card.Img variant="top" src={imag3} />
  <Card.Body>
    <Card.Title className={styles.titl}>{""}Bicycles {""}</Card.Title>
   
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width:  '35rem'  , border:"2px white", }}>
  <Card.Img variant="top" src={imag4} />
  <Card.Body>
    <Card.Title className={styles.titl}>{""}Diverse sports {""}</Card.Title>
   
  </Card.Body>
</Card>
    </Col>
</Row>
</div>




        </>
     );
}

export default Service;