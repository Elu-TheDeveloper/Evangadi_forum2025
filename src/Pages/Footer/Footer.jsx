import React from 'react'
import styles from '../Login/login.module.css';
import logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (


<div className={styles.footer}>
            <div className={styles.links}>
              <li>
                <img src={logo} alt="Evangadi Footer Logo" />
              </li>
              <ul className={styles.socialIcons}>
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faYoutube} /></li>
                <li><FontAwesomeIcon icon={faCircleUser} /></li>               
              </ul>
            </div>
    
            <div className={styles.links}>
              <h3>Useful Link</h3>
              <ul>
                <li><a href="#">How it Works</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
    
            <div className={styles.links}>
              <h3>Contact Info</h3>
              <ul>
                <li>Evangadi Networks</li>
                <li>support@evagadi.com</li>
                <li>+1-202-486-2702</li>
              </ul>
            </div>
             <div className={styles.author}>
<h2>Built By Eliyas Daba</h2>
            </div>
          </div>
     
        
  )
}

export default Footer