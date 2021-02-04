import React from "react";
// import styles from "./CountryList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../Redux/Country/action";
import { CountryIndia } from "./CountryIndia";
import getHosts from "../../Redux/Hosts/action";


function CountryLists({ country }) {
  const countries = useSelector((state) => state.countries.countries); //List of Countries
  const hostCountries = useSelector(state => state.hosts.hostsData)
  
  console.log(countries, country);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCountry());
    dispatch(getHosts());
  }, [dispatch, country]);

    const [count , setCount] = React.useState(0)

    React.useEffect(()=>{
            setCount( hostCountries?.filter((country_item)=>country === country_item.country).length)            
    },[])

  return (
    <div>
      {/* <CountryIndia countryName={country} cityList={countries} hostCountriesList ={hostCountries} /> */}
      <CountryIndia countryName={country} cityList={countries} count ={count} />

    </div>
  );
}

export { CountryLists };
