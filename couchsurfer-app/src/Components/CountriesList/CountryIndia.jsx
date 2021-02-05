import React from "react";
import styles from "./CountryList.module.css";
import DiscussionForum from "../DiscussionForum/DiscussionForum";
import { useHistory } from "react-router-dom";

const CountryIndia = ({ countryName, cityList, count, events, backImg }) => {
  const [id, setId] = React.useState(0);
  const history = useHistory();
  React.useEffect(() => {
    cityList?.forEach((country_item) =>
      countryName === country_item.name ? setId(country_item.id) : null
    );
  }, [countryName]);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backImg[id - 1]})`,
          backgroundSize: "cover",
          height: "40vh",
          padding: "0px",
          color: "white",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <h1 className={styles.countryList__country}>{countryName}</h1>
        <br />
        <div style={{ textAlign: "center" }}>
          {cityList?.map((country_item) =>
            countryName === country_item.name
              ? country_item.cities.map((city) => (
                  <button key={city} className={styles.countryList__cities}>
                    {city}
                  </button>
                ))
              : null
          )}
          {/* <div>{backImg}</div> */}
          {/* <div style = {{backgroundColor:"black",opacity:"0.4", position:"absolute",width:"100%", height:"40vh", top:"0px", left:"0px"}}></div> */}
        </div>
      </div>

      <div className={styles.countryList__wrapper}>
        <div className={styles.countryList__hostsCard}>
          <h2 className={styles.countryList__head}>Local Hosts</h2>
          <p className={styles.countryList__headLine}>
            Stay with one of the {count} hosts in {countryName}
          </p>

          <div className={styles.countryList__members}>
            <div>
              <img
                src="https://www.abc.net.au/cm/rimage/12108300-3x4-xlarge.jpg?v=4"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>James</p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Lara</p>
            </div>

            <div>
              <img
                src="https://www.glenbardgps.org/wp-content/uploads/2019/03/Amy-morin.jpg"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Priya</p>
            </div>

            <div>
              <img
                src="https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-indian-woman-picture-id917499044?k=6&m=917499044&s=612x612&w=0&h=lx17asXD4jaIlXrFgBdd8Tinl0oSe43K0All11IjKWY="
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Geeta</p>
            </div>

            <div>
              <img
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Ram</p>
            </div>

            <div>
              <img
                src="https://i.pinimg.com/originals/ac/80/a4/ac80a426827b367175d81f905d5e04e4.jpg"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Surya</p>
            </div>

            <button
              style={{
                backgroundColor: "#287FB8",
                width: "50%",
                padding: "10px 20px",
                margin: "50px auto",
                border: "none",
                borderRadius: "5px",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
              }}
              onClick={() => history.push(`/hosts/${countryName}`)}
            >
              Find a Host
            </button>
          </div>
        </div>

        {/* card2 */}
        <div className={styles.countryList__hostsCard}>
          <h2 className={styles.countryList__head}> Upcoming Visitors</h2>
          <p className={styles.countryList__headLine}>
            Meet or Host some of the 795 visitors to {countryName}
          </p>

          <div className={styles.countryList__members}>
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Ram</p>
            </div>

            <div>
              <img
                src="https://www.abc.net.au/cm/rimage/12108300-3x4-xlarge.jpg?v=4"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>James</p>
            </div>

            <div>
              <img
                src="https://i.pinimg.com/originals/ac/80/a4/ac80a426827b367175d81f905d5e04e4.jpg"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Surya</p>
            </div>

            <div>
              <img
                src="https://www.glenbardgps.org/wp-content/uploads/2019/03/Amy-morin.jpg"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Priya</p>
            </div>

            <div>
              <img
                src="https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-indian-woman-picture-id917499044?k=6&m=917499044&s=612x612&w=0&h=lx17asXD4jaIlXrFgBdd8Tinl0oSe43K0All11IjKWY="
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Geeta</p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Lara</p>
            </div>

            <button
              style={{
                backgroundColor: "#287FB8",
                width: "60%",
                padding: "10px 20px",
                margin: "50px auto",
                border: "none",
                borderRadius: "5px",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Meet Travelers
            </button>
          </div>
        </div>

        {/* card3  */}

        <div className={styles.countryList__hostsCard}>
          <h2 className={styles.countryList__head}> Hangouts</h2>
          <p className={styles.countryList__headLine}>
            76 members available to meet now
          </p>
          <div className={styles.countryList__members}>
            <div>
              <img
                src="https://i.pinimg.com/originals/ac/80/a4/ac80a426827b367175d81f905d5e04e4.jpg"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Surya</p>
            </div>

            <div>
              <img
                src="https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-indian-woman-picture-id917499044?k=6&m=917499044&s=612x612&w=0&h=lx17asXD4jaIlXrFgBdd8Tinl0oSe43K0All11IjKWY="
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Geeta</p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Lara</p>
            </div>

            <div>
              <img
                src="https://www.glenbardgps.org/wp-content/uploads/2019/03/Amy-morin.jpg"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Priya</p>
            </div>

            <div>
              <img
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Ram</p>
            </div>

            <div>
              <img
                src="https://www.abc.net.au/cm/rimage/12108300-3x4-xlarge.jpg?v=4"
                alt="user"
                style={{
                  margin: "13px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>James</p>
            </div>

            <button
              style={{
                backgroundColor: "#287FB8",
                width: "50%",
                padding: "10px 20px",
                margin: "50px auto",
                border: "none",
                borderRadius: "5px",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Get the App
            </button>
          </div>
        </div>

        <div className={styles.countryList__wrapper}>
          <div className={styles.countryList__event}>
            <h1 className={styles.countryList__head}>Events</h1>

            <div className={styles.countryList__eventContainer}>
              {events &&
                events
                  ?.filter((ele) => countryName === ele.country)
                  .map((ele) => (
                    <div className={styles.countryList__eventCard}>
                      <img
                        src={ele.url}
                        alt="logo"
                        style={{
                          margin: "10px 80px 10px 10px",
                          width: "150px",
                          height: "150px",
                        }}
                      />

                      <div style={{ width: "50%" }}>
                        <h3>{ele.title}</h3>
                        <p>
                          {ele.location} - {ele.country}
                        </p>
                        <p>{ele.from}</p>
                        <button className={styles.countryList__join}>
                          Join
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>

      <DiscussionForum countryName={countryName} />
    </div>
  );
};

export { CountryIndia };
