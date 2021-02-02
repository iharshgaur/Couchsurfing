import React from 'react'
import styles from "./Settings.module.css"
import {months,languages} from "../../Utils/dob.js"


const Account = () => {
    return (
        <div className={styles.settingContainer__acountDetail}>
                    <div className={styles.settingContainer__acountDetail__heading}><h3>ACCOUNT DETAILS</h3></div>
                    <hr/>
                    <div>
                    <div className={styles.settingContainer__acountDetail__heading2}><h6>MY PERSONAL DETAILS</h6></div>
                            <div className={styles.settingContainer__acountDetail__inputName}>
                            <label htmlFor="name">Username</label>
                             <input type="text" placeholder="username" />
                            </div>
                            <div className={styles.settingContainer__acountDetail__fLName}>
                            <label htmlFor="name">First name</label>
                            <input style={{marginLeft:148}} type="text" placeholder="first name" />
                            <br/>
                            <label htmlFor="name">Last name</label>
                            <input type="text" placeholder="last name" />
                            </div>
                            <div className={styles.settingContainer__acountDetail__dob}>
                            <label htmlFor="name">Birthday</label>
                            <select name="" id="">
                                {Array(30).fill(0).map((_, i) => <option value={i + 1}>{i+1}</option>)
                                }
                            </select>
                            <select name="" id="">
                                {months.map((e) => <option value={e}>{e}</option>)
                                }
                            </select>
                            <select name="" id="">
                                {Array(30).fill(0).map((_, i) => <option value={2020-i}>{2020-i}</option>)
                                }
                                </select>
                            </div>
                            <div className={styles.settingContainer__acountDetail__gender}>
                            <label htmlFor="name">Gender</label>
                            <select name="" id="">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                            </div>
                            <div className={styles.settingContainer__acountDetail__language}>
                            <label htmlFor="name">Preferred Language</label>
                            <select name="" id="">
                                {languages.map((e) => <option value={e.code}>{e.name}</option>)

                                }
                                </select>
                            </div>
                            <div className={styles.settingContainer__acountDetail__heading2}><h6>MY CONTACT DETAILS</h6></div>
                            <div className={styles.settingContainer__acountDetail__fLName}>
                            <label htmlFor="name">Mobile</label>
                            <input type="number" />
                            </div>
                            <div className={styles.settingContainer__acountDetail__address}>
                            <label htmlFor="name">Home Address</label>
                             <p>  Muradabad, Uttar Pradesh IND <br/>
                                Public Profile Location: Muradabad, Uttar Pradesh, India</p>
                            </div>
                            <div className={styles.settingContainer__acountDetail__heading2}><h6>ACCOUNT DETAILS </h6></div>
                            <div className={styles.settingContainer__acountDetail__email}>
                            <label htmlFor="name">Email</label>
                             <p>arshadalitalwar@gmail.com</p>
                            </div>
                            <div className={styles.settingContainer__acountDetail__address}>
                            <label htmlFor="name">Password</label>
                             <p>Change Password</p>
                        </div>
                        <div className={styles.settingContainer__acountDetail__button}>
                        <button>Save Changes</button>
                        </div>
                    </div>
                </div>
    )
}
export default Account
