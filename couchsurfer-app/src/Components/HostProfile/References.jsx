import React from "react";
import styles from "../Profile/RightPane.module.css";

function References() {
  return (
    <>
      <div className={styles.References}>
        <div className={styles.References__header}>
          <h3>References</h3>
        </div>

        <div className={styles.RightPaneContainer__References__Navigation}>
          <button>From Surfers</button>
          <button>From Hosts</button>
          <button>Personal</button>
        </div>
        <p>You don’t have any references from guests.</p>
      </div>
    </>
  );
}

export default References;
