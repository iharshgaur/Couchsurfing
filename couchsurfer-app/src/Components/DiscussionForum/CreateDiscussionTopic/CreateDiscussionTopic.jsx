import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import styles from "./CreateDiscussionTopic.module.css";
import { useForm } from "react-hook-form";
import { getCountry } from "../../../Redux/Country/action";
import { addDiscussions } from "../../../Redux/Discussion/action";
import { useHistory, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
function CreateDiscussionTopic() {
  const { country } = useParams();
  const [warning, setWarning] = React.useState(false);
  const currentCountry = country;
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCountry()); // eslint-disable-next-line
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.city !== "default") {
      const payload = {
        id: uuid(),
        country: currentCountry,
        question: data.question,
        topic: data.details,
        discussions: [],
        username: data.username,
        city: data.city,
      };
      dispatch(addDiscussions(payload));
      history.push(`/country/${currentCountry}`);
    } else {
      setWarning(true);
    }
  };

  const countries = useSelector((state) => state.countries.countries);

  return (
    <>
      <Navbar />
      <div className={styles.CreateDiscussionTopic}>
        <h1>Create Discussion</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.CreateDiscussionTopic__Form}
        >
          <input
            name="username"
            ref={register({ required: true })}
            placeholder="Enter Your Name"
          />

          <br />
          <br />

          {countries?.map((country) =>
            country.name === currentCountry ? (
              <select
                name="city"
                ref={register({ required: true })}
                key={country.name}
              >
                <option value="default" selected="true" disabled="disabled">
                  Select Visiting City
                </option>
                {country.cities.map((city) => (
                  <option value={city} key={city}>
                    {city}
                  </option>
                ))}
              </select>
            ) : null
          )}
          {warning && <p>*please select a city</p>}
          <br />
          <br />

          <input
            name="question"
            ref={register({ required: true })}
            placeholder="Enter Your Question"
          />

          <br />
          <br />

          <input
            name="details"
            ref={register({ required: true })}
            placeholder="Enter Some Details"
          />

          <br />
          <br />
          <input type="submit" className={styles.Submit} />
        </form>
      </div>
    </>
  );
}

export default CreateDiscussionTopic;
