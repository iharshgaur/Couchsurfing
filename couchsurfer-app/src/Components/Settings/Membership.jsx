import React from 'react'
import styles from "./Settings.module.css"



const Membership = () => {
    return (
        <div className={styles.settingContainer__acountDetail}>
        <div className={styles.settingContainer__acountDetail__heading}><h3>MEMBERSHIP AND CONTRIBUTIONS</h3></div>
        <hr/>
        <div>
        <div className={styles.settingContainer__acountDetail__heading2}><h6>YOUR CONTRIBUTION DETAILS</h6></div>
            <div className={styles.settingContainer__membership__status}>
                <label htmlFor="name">Contribution status</label>
                 <p>Not a member <br/>Become a member</p>
            </div>
            <div className={styles.settingContainer__membership__hr}></div>
            <div className={styles.settingContainer__acountDetail__heading2}><h6>VERIFICATION</h6></div>
            <div className={styles.settingContainer__membership__status}>
                <label htmlFor="name">Status</label>
                 <p>Not verified</p>
            </div>
            <div className={styles.settingContainer__membership__verification}><img src="https://i.imgur.com/pOoWgsS.png" alt="images"/> <p>
                Become a Verified Member and help us continue to build enhancements to our service, provide customer support, and grow our amazing community of travelers and hosts
                - The Couchsurfing Team</p></div>
             <div className={styles.settingContainer__membership__button}>
            <button>Verify My Account</button>
            </div>
            <div className={styles.settingContainer__membership__hr}></div>
            <div className={styles.settingContainer__acountDetail__heading2}><h6>EARNING VERIFICATION</h6></div>
            <div className={styles.settingContainer__membership__lastP}><p>When you host Couchsurfers in your home, you earn free verfication. For every confirmed guest you host, you earn 3 months of verification. Learn More</p></div>
        </div>
    </div>

    )
}

export default Membership
