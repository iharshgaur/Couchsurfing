import React from "react";
import styles from "./LandingPage.module.css";
import { Footer } from "../Footer/Footer";
import { SignUpEmail } from "../SignUpEmail/SignUpEmail";
import { SignUpFaster } from "../SignUpFaster/SignUpFaster";
import { NavbarLanding } from "../NavbarLanding/NavbarLanding";

const LandingPage = () => {
  return (
    <>
      <div className={styles.landingPage__background}>
        <NavbarLanding />

        <h1>Stay with Locals and meet Travelers</h1>
        <h3>Share Authentic Travel Experiences</h3>

        <div className={styles.landingPage__signUp}>
          <div style={{ width: "47%" }}>
            <SignUpFaster />
          </div>

          <div className={styles.landingPage__or}>
            <p>or</p>
          </div>

          <div style={{ width: "47%" }}>
            <SignUpEmail />
          </div>
        </div>

        <div>
          <p style={{ color: "white" }}>
            Already a member ?<br /> Log In
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export { LandingPage };
