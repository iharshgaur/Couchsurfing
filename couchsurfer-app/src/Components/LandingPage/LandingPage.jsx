import React from "react";
import styles from "./LandingPage.module.css";

import { SignUpEmail } from "../SignUpEmail/SignUpEmail";
import { SignUpFaster } from "../SignUpFaster/SignUpFaster";
import { NavbarLanding } from "../NavbarLanding/NavbarLanding";


const LandingPage = () => {
  return (
    <div className={styles.landingPage__background}>
      
      <NavbarLanding/>
      
      <h1>Stay with Locals and meet Travelers</h1>
      <h3>Share Authentic Travel Experiences</h3>

      <div className={styles.landingPage__signUp}>
        <SignUpFaster />

        <div className={styles.landingPage__or}>
          <p>or</p>
        </div>

        <SignUpEmail />
      </div>

      <div>
        <p style={{ color: "white" }}>
          Already a member ?<br /> Log In
        </p>
      </div>
    </div>
  );
};
export { LandingPage };
