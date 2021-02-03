import React from "react";
import styles from "./CountryList.module.css";
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
      {/* <div style={{background : "url(https://farm1.staticflickr.com/145/356953720_e2b12c64ea_b.jpg) no-repeat center 50%", 
           backgroundSize: "cover",
          height:"40vh", 
          padding:"0px",
          color:"white"}}>
       
       <h1>India</h1>
        <br/>
        {
        countries?.map((country_item)=>(
          country === country_item.name ?  
            country_item.cities.map(city=>
              <button key ={city}>{city}</button>)

          : null
        ))
      }
      </div> */}
      

      {/* {
        
          country === "India" ?   <CountryIndia countryName={country} cityList={countries} /> : null
      } */}
      
      <CountryIndia countryName={country} cityList={countries} />
    
    </div>
  );
}

export  {CountryLists};
