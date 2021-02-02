import React from 'react'
import styles from "./Settings.module.css"



const Group = () => {
    return (
        <div className={styles.settingContainer__groups}>
                  
            <div className={styles.settingContainer__acountDetail__heading}><h3>GROUP COMMUNICATIONS</h3></div>
            <div className={styles.settingContainer__groups_p} ><p>You are not a member of any groups.</p></div>
        </div>
    )
}

export default Group
