import React from "react";
import styles from "./HostTravelers.module.css";
import { useHistory } from "react-router-dom";
import getHosts from "../../Redux/Hosts/action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Styles from "./HostFilters.module.css";

const rooms = ["Private room", "Public room", "Shared room", "Shared Bed"];
const prefrences_filters = [
  "Kids at Home",
  "Kid Friendly",
  "Pet-free",
  "Pet Friendly",
  "Wheelchair Accessible",
];

const hostDesc = [
  `Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since`,
];
const hostImg =
  "https://images.unsplash.com/photo-1612469639025-fe1b5b3f3ceb?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const HostTravelers = () => {
  const [curr, setCurr] = React.useState("HOST");
  const [showFilters, setShowFilters] = React.useState(false);
  const dispatch = useDispatch();
  const { country } = useParams();
  const hostsData = useSelector((state) => state.hosts.hostsData);
  const isLoading = useSelector((state) => state.hosts.isLoading);
  const isError = useSelector((state) => state.hosts.isError);
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/hosts/${country}/${id}`);
  };
  const handleGet = () => {
    dispatch(getHosts());
  };

  React.useEffect(() => {
    handleGet();
    // eslint-disable-next-line
  }, [country]);

  const [details, setDetails] = React.useState({
    haveReference: false,
    isAcceptingGuests: false,
    whichCity: "",
    languageSpoken: "",
    isVerified: false,
  });
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setDetails({ ...details, [name]: val });
  };
  const {
    haveReference,
    isAcceptingGuests,
    whichCity,
    languageSpoken,
    isVerified,
  } = details;
  const handleSubmit = (e) => {
    e.preventDefault();

    // if(haveReference)
    // {
    //     dispatch(actionFunc.getFilterByRefrences())
    // }
    // if(isAcceptingGuests)
    // {
    //     dispatch(actionFunc.getFilterByAcceptingGuests())
    // }
    // if(languageSpoken!=="")
    // {

    //     dispatch(actionFunc.getFilterByLanguage(languageSpoken))
    // }
    // if(whichCity!=="")
    // {

    //     dispatch(actionFunc.getFilterByCity(whichCity))
    // }
    // if(isVerified)
    // {
    //     dispatch(actionFunc.getFilterByVerified())
    // }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.main__cont}>
      <div className={styles.main__cont__box1}>
        <div className={styles.main__cont__host__filter}>
          <div className={styles.main__cont__host__headers}>
            {curr === "HOST" ? (
              <div>
                <span className={styles.main__cont__host__travel__headers}>
                  HOST
                </span>
                <span onClick={(e) => setCurr("TRAVELLERS")}>TRAVELERS</span>
              </div>
            ) : (
              <div>
                <span onClick={(e) => setCurr("HOST")}>HOST</span>
                <span className={styles.main__cont__host__travel__headers}>
                  TRAVELERS
                </span>
              </div>
            )}
          </div>
          <div className={styles.main__cont__host__filter__labels}>
            <label>
              ARRIVE
              <br />
              <input type="date" placeholder="yy-mm-dd" />
            </label>
            <label>
              DEPART
              <br />
              <input type="date" placeholder="yy-mm-dd" />
            </label>
            <label>
              #OF TRAVELERS
              <br />
              <select>
                {["Any", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {!showFilters ? (
            <div className={styles.main__cont__host__filter__buttons}>
              <button>CLEAR FILTERS</button>
              <button>SEARCH</button>
            </div>
          ) : (
            ""
          )}
          <div>
            {showFilters ? (
              <>
                <form onSubmit={handleSubmit}>
                  <div className={Styles.main__cont}>
                    <div className={Styles.main__cont__host__info}>
                      <p>HOST INFO</p>
                      <div>
                        <label>
                          <input
                            onChange={handleChange}
                            name="haveReference"
                            checked={haveReference}
                            type="checkbox"
                          />
                          Have References
                        </label>
                        <br />
                        <label>
                          <input
                            onChange={handleChange}
                            name="isVerified"
                            checked={isVerified}
                            type="checkbox"
                          />
                          Are Verified
                        </label>
                        <br />
                        <label>
                          <input type="checkbox" />
                          Ambassador
                        </label>
                        <br />
                        <label>
                          <input
                            onChange={handleChange}
                            name="isAcceptingGuests"
                            checked={isAcceptingGuests}
                            type="checkbox"
                          />
                          Accepting Guest
                        </label>
                        <br />
                        <label>
                          <input type="checkbox" />
                          Wants to Meet Up
                        </label>
                        <br></br>
                        <br />

                        <label>
                          Last Login Date<br></br>
                          <select>
                            {[
                              "Anytime",
                              "In the last 24 hours",
                              "In the last week hours",
                              "In the last six months",
                            ].map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                          Join Date<br></br>
                          <select>
                            {[
                              "Anytime",
                              "In the last 24 hours",
                              "In the last week hours",
                              "In the last six months",
                            ].map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </label>
                        <br></br>
                        <br />
                        <label>
                          Gender<br></br>
                          <select>
                            {["All", "Male", "Female", "others"].map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                          Age
                          <input type="number" />
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                          Languages Spoken<br></br>
                          <input
                            onChange={handleChange}
                            value={languageSpoken}
                            name="languageSpoken"
                            placeholder="example:German"
                          />
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                          City<br></br>
                          <input
                            onChange={handleChange}
                            value={whichCity}
                            name="whichCity"
                            placeholder="example:German"
                          />
                        </label>
                        <br></br>
                        <br />
                        <label>
                          Interest<br></br>
                          <input placeholder="example:Hiking" />
                        </label>
                        <br></br>
                      </div>
                    </div>
                    <div className={Styles.main__cont__accomodations}>
                      <p>Accomodations</p>
                      {rooms.map((item) => (
                        <div>
                          <label>
                            <input type="checkbox" />
                            {item}
                          </label>
                          <br></br>
                        </div>
                      ))}
                      <br></br>
                      <br></br>
                      <div>
                        <label>
                          Smoking is allowed
                          <br />
                          <select>
                            {["No Preference", "Yes", "No"].map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                      <br></br>
                      <br></br>
                      <div>
                        <label>
                          Radius <br></br>
                          <select>
                            {["within 10 km", "within 20km"].map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                    </div>
                    <div className={Styles.main__cont__preferences}>
                      <p>PREFRENCES</p>
                      {prefrences_filters.map((item) => (
                        <div>
                          <label>
                            <input type="checkbox" />
                            {item}
                          </label>
                          <br></br>
                        </div>
                      ))}
                      <br />
                      <br />
                      <div className={Styles.main__cont__preference__keyword}>
                        <label>
                          Keywords<br></br>
                          <br></br>
                          <input type="text" />
                        </label>
                      </div>
                      <br />
                      <br />
                      <label>
                        sort<br></br>
                        <select>
                          {["Best Match", "Hosting Experience"].map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>
                  {/* <input className={Styles.submit__btn} type="submit" value="SEARCH"/> */}
                </form>
                <button className={Styles.submit__btn} onClick={handleReload}>
                  CLEAR FILTERS
                </button>
              </>
            ) : (
              ""
            )}
          </div>
          <div className={styles.more__filters}>
            <div onClick={(e) => setShowFilters((prev) => !prev)}>
              MORE FILTERS
            </div>
          </div>
        </div>
        <div>
          {isError ? (
            "something went wrong"
          ) : isLoading ? (
            ".....Loading"
          ) : (
            <div className={styles.main__cont__host__info}>
              {hostsData
                ?.filter((item) => item.country === country) // eslint-disable-next-line
                .filter((item) => {
                  if (!haveReference) {
                    return item;
                  } else if (haveReference && Number(item.references) !== 0) {
                    return item;
                  }
                })
                // eslint-disable-next-line
                .filter((item) => {
                  if (!isAcceptingGuests) {
                    return item;
                  } else if (
                    isAcceptingGuests &&
                    item.accepting_guests === true
                  ) {
                    return item;
                  }
                }) // eslint-disable-next-line
                .filter((item) => {
                  if (whichCity === "") {
                    return item;
                  } else if (
                    whichCity !== "" &&
                    item.city.toLowerCase() === whichCity.toLowerCase()
                  ) {
                    return item;
                  }
                }) // eslint-disable-next-line
                .filter((item) => {
                  if (languageSpoken === "") {
                    return item;
                  } else if (
                    languageSpoken !== "" &&
                    item.language.toLowerCase() === languageSpoken.toLowerCase()
                  ) {
                    return item;
                  }
                }) // eslint-disable-next-line
                .filter((item) => {
                  if (!isVerified) {
                    return item;
                  } else if (isVerified !== "" && item.verified === true) {
                    return item;
                  }
                })
                .map((item) => (
                  <div onClick={() => handleClick(item.id)} key={item.id}>
                    <div
                      className={styles.main__cont__host__info__person__imgInfo}
                    >
                      <div>
                        <img src={hostImg} alt="hello" />
                      </div>
                      <div className={styles.person__info}>
                        <h4>{`${item.first_name} ${item.last_name}`}</h4>
                        <h6>takes longer than a week to reply</h6>
                        <p>Refrences:{item.references}</p>
                        <p>Verified:{`${item.verified}`}</p>
                        <p>Speaks : {item.language}</p>
                        {item.accepting_guests ? (
                          <p style={{ color: "green" }}>Accepting guests</p>
                        ) : (
                          <p style={{ color: "grey" }}>
                            may be accepting guests
                          </p>
                        )}
                      </div>
                    </div>
                    <div className={styles.person__info__desc}>
                      {item.description ? (
                        <p>{hostDesc[0]}</p>
                      ) : (
                        <p>No Description availible</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      {/* <div className={styles.main__cont__box2}>
                    <div className={styles.main__cont__box2__info}>
                        <p>Also near Delhi</p>
                        <div>
                            <span><i class="fas fa-search"></i></span>
                            <span>Events in Delhi</span>
                            
                        </div>
                        <div>
                        <span><i class="fas fa-search"></i></span>
                            <span>Advice from Delhi Locals</span>
                        </div>
                    </div>
                    <div className={styles.main__cont__box2__travel__info}>
                        <h3>Enter your travel dates to <br/> filter out busy hosts</h3>
                    </div>
            </div> */}
    </div>
  );
};

export default HostTravelers;
