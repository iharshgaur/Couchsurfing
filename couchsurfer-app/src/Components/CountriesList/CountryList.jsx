import React from "react";
// import styles from "./CountryList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../Redux/Country/action";
import { CountryIndia } from "./CountryIndia";
import getHosts from "../../Redux/Hosts/action";
import { getEvents } from "../../Redux/Events/action";

function CountryLists({ country }) {
  const countries = useSelector((state) => state.countries.countries); //List of Countries
  const hostCountries = useSelector((state) => state.hosts.hostsData);
  const events = useSelector((state) => state.events.data);

  const dispatch = useDispatch();
  const [count, setCount] = React.useState(0);
  const [backImg, setBackImg] = React.useState("");

  React.useEffect(() => {
    dispatch(getCountry());
    dispatch(getHosts());
    dispatch(getEvents());
    // eslint-disable-next-line
  }, [country]);

  React.useEffect(() => {
    countries?.map((ele) =>
      country === ele.name
        ? console.log("back " + ele.name + " " + ele.img)
        : null
    );

    setBackImg(
      countries?.map((ele) => (country === ele.name ? ele.img : ele.img))
    ); // eslint-disable-next-line
  }, [countries]);

  React.useEffect(() => {
    setCount(
      hostCountries?.filter((country_item) => country === country_item.country)
        .length
    ); // eslint-disable-next-line
  }, [hostCountries]);

  return (
    <div>
      <CountryIndia
        countryName={country}
        cityList={countries}
        count={count}
        events={events}
        backImg={backImg}
      />

      {/* <div>{events && events?.map((ele)=><div>{ele.title}</div>)}</div> */}
    </div>
  );
}

export { CountryLists };
