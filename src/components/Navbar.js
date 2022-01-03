import styles from "./Navbar.module.css"
import logo from "../assets/logo_g-removebg-preview.png"
import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"

function NavbarItem() {
  return (
    <>
      <nav className={styles.stroke}>
        <ul>
          {/* <img
            src={logo}
            height={80}
           left={40}
           top={30}
        
          /> */}
          <li
            style={{
              backgroundImage: ` url("${logo}")`,
              backgroundSize: "cover",
              left: "40px",
              top: "30px",
              position: "absolute",
              width: "80px",
              height: "80px",
              zindex: "-1",
            }}
          ></li>
          <li>
          <Link  to="/home" className={{textDecoration:"none"}}>
            <a href="#">Home</a>
            </Link>
          </li>
          <li>
          <Link  to="/sports" className={{textDecoration:"none"}}>
            <a href="#">SPORTS</a>
            </Link>
          </li>
          <li>
          <Link  to="/coachs" className={{textDecoration:"none"}}>
            <a href="#">COACHS</a>
            </Link>
          </li>
          {localStorage.tokenSports ? (
         <>
          
          <li>
          <Link  to="/profile" className={{textDecoration:"none"}}>
            <a href="#">PROFILE</a>
            </Link>
          </li>
       
          <li>
          <Link  to="/logout" className={{textDecoration:"none"}}>
            <a href="#">LOGOUT</a>
            </Link>
          </li>
          </>
       
          ) : (
           
            <>
          <li>
          <Link  to="/login" className={{textDecoration:"none"}}>
            <a href="#">LOGIN</a>
            </Link>
          </li>
          <li>
          <Link to="/signup" className={{textDecoration:"none"}}>
          <a href="#">SIGNUP</a>
              </Link>
          </li>
        
          </>
             )}
        </ul>
       
      </nav>
      
    </>
  )
}

export default NavbarItem
