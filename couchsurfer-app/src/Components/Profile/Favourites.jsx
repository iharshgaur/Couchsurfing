import React from "react";
import styles from "../Profile/RightPane.module.css";

function Favourites() {
  return (
    <>
      <div className={styles.RightPaneContainer__Div__Favourites}>
        <div className={styles.RightPaneContainer__Div__Favourites__Header}>
          <div>
            <h3>MY LOCAL FAVOURITES</h3>
            <h5>Places within 100km of home</h5>
          </div>
          <button>Add to Favourite Place</button>
        </div>
        <div className={styles.RightPaneContainer__Div__Favourites__Content}>
          <p>You don't have any favourites yet</p>
        </div>
      </div>
      <div className={styles.RightPaneContainer__Div__Favourites}>
        <div className={styles.RightPaneContainer__Div__Favourites__Header}>
          <div>
            <h3>MY TRAVEL FAVORITES</h3>
            <h5>Places all over the world</h5>
          </div>
          <button>Add to Favourite Place</button>
        </div>
        <div className={styles.RightPaneContainer__Div__Favourites__Content}>
          <p>You don't have any favourites yet</p>
        </div>
      </div>
    </>
  );
}

export default Favourites;
