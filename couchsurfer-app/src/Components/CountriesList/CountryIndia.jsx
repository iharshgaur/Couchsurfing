import React from "react";
import styles from "./CountryList.module.css";
import DiscussionForum from "../DiscussionForum/DiscussionForum";

// const CountryIndia = ({ countryName, cityList,hostCountriesList }) => {
const CountryIndia = ({ countryName, cityList,count}) => {

 
  // const [count , setCount] = React.useState(0)

  //   React.useEffect(()=>{
  //           setCount( hostCountriesList?.filter((country_item)=>countryName === country_item.country).length)            
  //   },[count])

  return (
    <div>
      <div
        style={{
          background:
            "url(https://farm1.staticflickr.com/145/356953720_e2b12c64ea_b.jpg) no-repeat center 50%",
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
        <div style={{textAlign:"center"}}>
        {cityList?.map((country_item) =>
          countryName === country_item.name
            ? country_item.cities.map((city) => (
                <button key={city} className={styles.countryList__cities}>
                  {city}
                </button>
              ))
            : null
        )}

        {/* <div style = {{backgroundColor:"black",opacity:"0.4", position:"absolute",width:"100%", height:"40vh", top:"0px", left:"0px"}}></div> */}
      </div>
      </div>

      <div className={styles.countryList__wrapper}>
        <div className={styles.countryList__hostsCard}>
          <h2 className={styles.countryList__head}>Local Hosts</h2>
          <p>Stay with one of the {count} hosts in {countryName}</p>


          <div  className={styles.countryList__members}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="user"
                style={{
                  margin: "10px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Lara</p>
            </div>

            <div>
              <img
                src="https://www.abc.net.au/cm/rimage/12108300-3x4-xlarge.jpg?v=4"
                alt="user"
                style={{
                  margin: "10px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>James</p>
            </div>

            <div>
              <img
                src="https://www.glenbardgps.org/wp-content/uploads/2019/03/Amy-morin.jpg"
                alt="user"
                style={{
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
                  margin: "10px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Ram</p>
            </div>

            <div>
              <img
                src="https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-indian-woman-picture-id917499044?k=6&m=917499044&s=612x612&w=0&h=lx17asXD4jaIlXrFgBdd8Tinl0oSe43K0All11IjKWY="
                alt="user"
                style={{
                  margin: "10px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Geeta</p>
            </div>

            <div>
              <img
                src="https://i.pinimg.com/originals/ac/80/a4/ac80a426827b367175d81f905d5e04e4.jpg"
                alt="user"
                style={{
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
            >
              Meet Travelers
            </button>
          </div>
        </div>

        {/* card2 */}
        <div className={styles.countryList__hostsCard}>
          <h2 className={styles.countryList__head}> Upcoming Visitors</h2>
          <p>Meet or Host some of the 795 visitors to {countryName}</p>

          <div  className={styles.countryList__members}>
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt="user"
                style={{
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
                  margin: "10px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Lara</p>
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
              Meet Travelers
            </button>
          </div>
        </div>

        {/* card3  */}

        <div className={styles.countryList__hostsCard}>
          <h2 className={styles.countryList__head}> Hangouts</h2>
          <p>76 members available to meet now</p>

          {/* <div style={{ display: "flex", flexWrap: "wrap", margin: "30px" }}> */}
          <div className={styles.countryList__members}> 
            <div>
              <img
                src="https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-indian-woman-picture-id917499044?k=6&m=917499044&s=612x612&w=0&h=lx17asXD4jaIlXrFgBdd8Tinl0oSe43K0All11IjKWY="
                alt="user"
                style={{
                  margin: "10px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                }}
              />
              <p style={{ margin: "0px" }}>Geeta</p>
            </div>

            <div>
              <img
                src="https://www.abc.net.au/cm/rimage/12108300-3x4-xlarge.jpg?v=4"
                alt="user"
                style={{
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
                  margin: "10px",
                  width: "80px",
                  height: "80px",
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
            >
              Meet Travelers
            </button>
          </div>
        </div>

        <div className={styles.countryList__wrapper}>
          <div className={styles.countryList__event}>
            <h1 className={styles.countryList__head}>Events</h1>
            {/* <div style={{ display: "flex", flexWrap: "wrap" }}> */}
            <div className={styles.countryList__eventContainer}>
              <div className={styles.countryList__eventCard}>
                <img
                  src="https://tcdn.couchsurfing.com/uyIeZRDu16O58qHClnLP3B6atVo=/130x130/smart/https://ht-cdn.couchsurfing.com/assets/event-picture-placeholder3.png"
                  alt="logo"
                  style={{
                    margin: "10px 80px 10px 10px",
                    width: "150px",
                    height: "150px",
                  }}
                />

                <div style={{ width: "50%" }}>
                  <h3>Event 1</h3>
                  <p>Sat, May 1 at 10:19 AM IST</p>
                  <button className={styles.countryList__join}>Join</button>
                </div>
              </div>

              <div className={styles.countryList__eventCard}>
                <img
                  src="https://tcdn.couchsurfing.com/uyIeZRDu16O58qHClnLP3B6atVo=/130x130/smart/https://ht-cdn.couchsurfing.com/assets/event-picture-placeholder3.png"
                  alt="logo"
                  style={{
                    margin: "10px 80px 10px 10px",
                    width: "150px",
                    height: "150px",
                  }}
                />

                <div style={{ width: "50%" }}>
                  <h3>Event 1</h3>
                  <p>Sat, May 1 at 10:19 AM IST</p>
                  <button className={styles.countryList__join}>Join</button>
                </div>
              </div>

              <div className={styles.countryList__eventCard}>
                <img
                  src="https://tcdn.couchsurfing.com/uyIeZRDu16O58qHClnLP3B6atVo=/130x130/smart/https://ht-cdn.couchsurfing.com/assets/event-picture-placeholder3.png"
                  alt="logo"
                  style={{
                    margin: "10px 80px 10px 10px",
                    width: "150px",
                    height: "150px",
                  }}
                />

                <div style={{ width: "50%" }}>
                  <h3>Event 1</h3>
                  <p>Sat, May 1 at 10:19 AM IST</p>
                  <button className={styles.countryList__join}>Join</button>
                </div>
              </div>

              <div className={styles.countryList__eventCard}>
                <img
                  src="https://tcdn.couchsurfing.com/vBqPQ3g1aCgaaS4FIuVsUufHMPw=/130x130/smart/https://s3.amazonaws.com/ht-images.couchsurfing.com/u/5298844/3db8cded-d502-4656-bef9-060bf002c706"
                  alt="logo"
                  style={{
                    margin: "10px 80px 10px 10px",
                    width: "150px",
                    height: "150px",
                  }}
                />

                <div style={{ width: "50%" }}>
                  <h3>Event 2</h3>
                  <p>Fri, Oct 1 at 12:00 AM IST</p>
                  <button className={styles.countryList__join}>Join</button>
                </div>
              </div>

              <div className={styles.countryList__eventCard}>
                <img
                  src="https://tcdn.couchsurfing.com/tDxR4kj3lS1LaR23uAlOYfHgGWM=/130x130/smart/https://s3.amazonaws.com/ht-images.couchsurfing.com/u/503923/3445433b-fdea-43b4-bef7-9c4d0d24b841"
                  alt="logo"
                  style={{
                    margin: "10px 80px 10px 10px",
                    width: "150px",
                    height: "150px",
                  }}
                />

                <div style={{ width: "50%" }}>
                  <h3>Event 3</h3>
                  <p>Sat, Mar 27 at 9:00 PM UTC</p>
                  <button className={styles.countryList__join}>Join</button>
                </div>
              </div>

              <div className={styles.countryList__eventCard}>
                <img
                  src="https://tcdn.couchsurfing.com/t_gvkaBDx-x_CoUl0wxtccPmzlk=/130x130/smart/https://s3.amazonaws.com/ht-images.couchsurfing.com/u/3685964/D357068B-84CA-40D6-92E1-9B455A72276B"
                  alt="logo"
                  style={{
                    margin: "10px 80px 10px 10px",
                    width: "150px",
                    height: "150px",
                  }}
                />

                <div style={{ width: "50%" }}>
                  <h3>Event 4</h3>
                  <p>Fri, Mar 5 at 7:30 PM IST</p>
                  <button className={styles.countryList__join}>Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DiscussionForum countryName={countryName} />
    </div>
  );
};

export { CountryIndia };
