import React from "react";
import styles from "./RightPane.module.css";
import {useSelector} from "react-redux"
function About({hostId}) {
  const hostsData = useSelector(state => state.hosts.hostsData)
  const userData=hostsData.find((item)=>item.id===hostId)
  return (
    <>
      <div className={styles.RightPaneContainer__Div__Overview}>
        <div className={styles.RightPaneContainer__Div__Overview__Header}>
          <h2>Overview</h2>
        </div>
        <hr />
        <div className={styles.RightPaneContainer__Div__Overview__Content}>
          <div>
            <h4>{userData.references} references</h4>
            <h4>No occupation listed</h4>
            <h4>No languages listed</h4>
            <h4>No education listed</h4>
          </div>
          <div>
            <h4>24, Male</h4>
            <h4>Hometown : {userData.from}</h4>
            <h4>Member since {userData.member_since}</h4>
            <h4>Profile 15% complete</h4>
          </div>
        </div>
      </div>
      <div className={styles.RightPaneContainer__Div__About}>
        <div className={styles.RightPaneContainer__Div__About__Header}>
          <h2>About</h2>
        </div>
        <hr />

        <div className={styles.RightPaneContainer__Div__About__Content}>
          <p>
            Couchsurfers decide whom to meet based on profiles! Until you fill
            out your profile, people won’t know what to expect and why they
            should hang out with you.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
