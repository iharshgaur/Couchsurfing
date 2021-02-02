import React from "react";
import { SignUpEmail } from "../SignUpEmail/SignUpEmail";
import { SignUpFaster } from "../SignUpFaster/SignUpFaster";

import styles from "./LoginPage.module.css";



const LoginDetails = () => {
  return (
    
    <div className={styles.loginPage__opacity }>
    
    <div className={styles.loginPage__form}>
    <form >
        <h2 className={styles.loginPage__line}>Log in to Couchsurfing</h2>

        

        <input type="text" placeholder="Email or Username" className={styles.loginPage__input}/>
        <br/>
        <br/>

        <input type="password" placeholder="Password" className={styles.loginPage__input}/>
        <br/>
        
        <input type="checkbox" className={styles.loginPage__check}/> 
        <span className={styles.loginPage__rem}> Remember me </span>
   
        <span className={styles.loginPage__forgot}>Forgot password?</span>
        <br/>

        <button className={styles.loginPage__login}>Log In</button>
        <br/>
        <br/>

        <div>or</div>
        <br/>

        <button className={styles.loginPage__fb}>Continue with Facebook</button>
        <br/>
        <br/>
        <br/>
        
        <div>Don’t have an account?</div>
        <br/>
        <br/>

        <input type="submit" value="Join" className={styles.loginPage__join}></input>

      </form>
      </div>

    </div>
    
  );
};
export { LoginDetails };
