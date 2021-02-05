import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faTwitter, faFacebook,faTumblr, faInstagram, faApple, faAndroid} from '@fortawesome/free-brands-svg-icons'
// import { faEdit} from '@fortawesome/free-solid-svg-icons'

const Footer =()=>{
    return(
        <>
        <div className={styles.footer__wrapper}>

            
            <div className={styles.footer__head}>
                <div>ABOUT</div>
                <div>SAFETY</div>
                <div>SUPPORT</div>
                <div>BLOG</div>
                <div>SHOP</div>
                <div>COOKIE SETTINGS</div>
                 
                <div>
                    <select>
                        {["English", "Français", "Português", "Italiano", "Español"].map(
                        (item) => (
                            <option
                            key={item}
                            value={item}
                            className={styles.Navbar__select}
                            >
                            {item}
                            </option>
                        )
                        )}
                    </select>
                </div>
            </div>

            <div className={styles.footer__line}>
                <div>CONNECT WITH US</div>
                <div>MOBILE APPS</div>
            </div>
 
            <div className={styles.footer__Icon}>
                    <div>
                       <div> <FontAwesomeIcon icon={faTwitter} /></div>
                        <div ><FontAwesomeIcon icon={faFacebook} /></div>
                        <div ><FontAwesomeIcon icon={faTumblr} /></div>
                        <div><FontAwesomeIcon icon={faInstagram} /></div>
                    </div>

                    <div >
                     <div > <FontAwesomeIcon icon={faApple} /></div>
                     <div> <FontAwesomeIcon icon={faAndroid} /></div>

                    </div>
                </div>
        </div>
        
        </>

    )
}

export {Footer}