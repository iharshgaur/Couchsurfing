import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { getCountry } from "../../../Redux/Country/action";
import { addDiscussions } from "../../../Redux/Discussion/action";
import { useHistory, useParams } from "react-router-dom";
function CreateDiscussionTopic() {
  const { country } = useParams();
  const currentCountry = country;
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCountry());
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
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
  };

  const countries = useSelector((state) => state.countries.countries);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Name: </label>
        <br />
        <input name="username" ref={register({ required: true })} />
        <br />
        <br />
        <label htmlFor="city">City: </label>
        <br />
        {countries?.map((country) =>
          country.name === currentCountry ? (
            <select name="city" ref={register} key={country.name}>
              {country.cities.map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
            </select>
          ) : null
        )}
        <br />
        <br />
        <label htmlFor="question">Question: </label>
        <br />
        <input name="question" ref={register({ required: true })} />
        <br />
        <br />
        <label htmlFor="details">Details: </label>
        <br />
        <input name="details" ref={register({ required: true })} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateDiscussionTopic;
