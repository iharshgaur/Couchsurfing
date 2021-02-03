import React from "react";
// import styles from "./CountryList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../Redux/Country/action";
import { useHistory } from "react-router-dom";
import { CountryIndia } from "./CountryIndia";

function CountryLists() {
  const countries = useSelector((state) => state.countries.countries);  //List of Countries
  const country = useSelector(state=> state.discussions.country) //current country
  console.log(countries,country)
  const history = useHistory();
  const dispatch = useDispatch();
  
  React.useEffect(() => {  
    dispatch(
      getCountry()
    );
  }, [dispatch, country]);

  return (
    <div>
      <div>
        <input type="text" placeholder="Search for something..." />
        <button>Search</button>
      </div>
      
      {
        countries?.map((country_item)=>(
          country === country_item.name ?  
            country_item.cities.map(city=>
              <button key ={city}>{city}</button>)

          : null
        ))
      }

      {
        
          country === "India" ?   <CountryIndia/> : null
      }
    
      {/* <div>
        <CountryIndia/>
      </div> */}
    </div>
  );
}

export  {CountryLists};
