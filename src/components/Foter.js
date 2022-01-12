import styles from "./Foter.module.css"
import { MdEmail } from "react-icons/md"
import { FaCcApplePay } from "react-icons/fa"
import { FaFacebookSquare, FaSnapchatSquare, FaLinkedin, FaTwitterSquare, FaPhoneAlt } from "react-icons/fa"
import logo from "../assets/logo_g-removebg-preview.png"
function Foter() {
  return (
    <>
      <section className={styles.foter}>
        <div className={styles.contact}>
          <p>
            <FaFacebookSquare />
          </p>
          <p>
            <FaTwitterSquare />
          </p>
          <p>
            <FaLinkedin />
          </p>
          <p>
            <FaSnapchatSquare />
          </p>
        </div>
        <div className={styles.call}>
          <img className={styles.imgs} src={logo} />
        </div>
        <div className={styles.contacts}>
          <p className={styles.p}> ©2018-2022 WPEngine,Inc Allrights reserved</p>
          <p className={styles.p}>
            WP ENGINE℗ , VELOCITIZE℗ , TORQUE ℗, EVERCACHE,and the cog logo servise markes are owned by WPEngine, Inc
          </p>
        </div>
      </section>
    </>
  )
}

export default Foter
