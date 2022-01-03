import { useContext } from "react"
import { Col, Form, Row,Button } from "react-bootstrap"
import logo2 from "../assets/ssign.jpg"
import SportsContext from "../utils/SportsContext"
import styles from "./Signup.module.css"

function SignUp() {
  const { signup } = useContext(SportsContext)
  console.log(signup)
  return (
      
   <>
   <div  className={styles.signupgroup}>
 
     
      
     <img src="https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      style={{ width: "100%" ,position:"absolute",zIndex:"-12" , top:"0" ,bottom:"-5",opacity:"0.9",backgroundsize:"cover", minHeight:"100vh"}} />
 
    
   <h2 className={styles.formheader}>
   Join the Platina GYM!
</h2>
<div  className={styles.formcontainer}>
  <form  onSubmit={signup}>
    <h3 className={styles.formtitle}>
      Sign up
    </h3>
    <div className={styles.inputgroup}>
      <input type="text" name="firstName" placeholder=" "required/>
      <span className={styles.additionallabel} >FirstName</span>
    </div>
    <div className={styles.inputgroup}>
      <input type="text" name="lastName" placeholder=" "required/>
      <span className={styles.additionallabel} >LastName</span>
    </div>
    <div className={styles.inputgroup}>
      <input type="text" name="email" placeholder=" "required />
      <span className={styles.additionallabel}>Email address</span>
    </div>
    <div className={styles.inputgroup}>
      <input type="password" name="password" placeholder=" "required/>
      <span className={styles.additionallabel}>Password</span>
    </div>
    <div className={styles.inputgroup}>
      <input type="url" name="avatar" placeholder=" "required/>
      <span className={styles.additionallabel} >Image</span>
    </div>
    
    <div className={styles.inputgroup}>
      <label>
        <input type="checkbox" name=""/>
        <span className={styles.formterms}>
          {/* <div className={styles.jakebox}></div>
          I accept the 
          <span  className={styles.colorfuldescription}>
            terms of the adventure!
          </span> */}
        </span>
      </label>
    </div>
    
    <div className={styles.inputgroup}>
      <button type="submit">Sign Up</button>
    </div>
  </form>
</div>
</div>
   </>
  )
}

export default SignUp
