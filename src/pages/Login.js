import { useContext } from "react"

import SportsContext from "../utils/SportsContext"
import styles from "./Signup.module.css"

function Login() {
  const { login } = useContext(SportsContext)

  return (
      
   <>
    <img src="https://images.pexels.com/photos/4761785/pexels-photo-4761785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      style={{ width: "100%" ,position:"absolute",zIndex:"-12" , top:"0" ,opacity:"0.9",backgroundsize:"cover",  minHeight:"100vh"}} />
  
<div  className={styles.formcontainer}>
  <form action="" method="" onSubmit={login}>
    <h3 className={styles.formtitle}>
    Login
    </h3>
   
    <div className={styles.inputgroup}>
      <input type="text" name="email" placeholder=" "required />
      <span className={styles.additionallabel}>Email address</span>
    </div>
    <div className={styles.inputgroup}>
      <input type="password" name="password" placeholder=" "required/>
      <span className={styles.additionallabel}>Password</span>
    </div>
   

    <div className={styles.inputgroup}>
      <button type="submit">Login</button>
    </div>
  </form>
</div>
   </>
  )
}

export default Login
