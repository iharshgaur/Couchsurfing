import React from "react";
// import styles from "./CountryList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../Redux/Country/action";
import { CountryIndia } from "./CountryIndia";

function CountryLists({ country }) {
  const countries = useSelector((state) => state.countries.countries); //List of Countries

  console.log(countries, country);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCountry());
  }, [dispatch, country]);

  return (
    <div>
      <CountryIndia countryName={country} cityList={countries} />
    </div>
  );
}

export { CountryLists };
