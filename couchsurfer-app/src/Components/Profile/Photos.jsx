import React from "react";
import styles from "../Profile/RightPane.module.css";

function Photos() {
  return (
    <>
      <div className={styles.Photos}>
        <h3>PHOTOS</h3>
        <h4>PROFILE PHOTOS</h4>
        <button>ADD PHOTO</button>
        <h4>PHOTOS OF MY HOME</h4>
        <button>ADD PHOTO</button>
      </div>
    </>
  );
}

export default Photos;
