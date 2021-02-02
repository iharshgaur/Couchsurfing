import React from 'react'
import styles from "../Components/Settings/Settings.module.css"
import Account from '../Components/Settings/Account';
import { Link } from "react-router-dom"
import Membership from "../Components/Settings/Membership"
import Group from '../Components/Settings/Group';
const Settings = () => {
    const [component, setComponent] = React.useState("account");
    return (
        
        <div className={styles.AccountSetting}>
             <h2>{`Account & Settings`}</h2>
            <div className={styles.settingContainer}>
                <div className={styles.linkAccount}>
                <Link className={styles.linkAccount__links} style={{marginTop:20 }} onClick={()=>setComponent("account")} >Account</Link>
                <Link className={styles.linkAccount__links} onClick={()=>setComponent("email")} >{`Emails & Push Notifications`}</Link>
                <Link className={styles.linkAccount__links} onClick={()=>setComponent("membership")}>{`Membership & Contributions`}</Link>
                <Link className={styles.linkAccount__links} onClick={()=>setComponent("groups")}>Groups</Link>
                <Link className={styles.linkAccount__links} onClick={()=>setComponent("privacy")}>Privacy</Link>
                <Link className={styles.linkAccount__links} onClick={()=>setComponent("social")}>Social Networks</Link>
                </div>
                {component === "account" ? <Account></Account> : ""}
                {component === "membership" ? <Membership></Membership> : ""}
                {component==="groups"?<Group></Group>:""}
                
            </div>
           
        </div>
    )
}

export default Settings
