import React from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../Redux/Country/action";
import {CountryLists} from "../../Components/CountriesList/CountryList";
import {changeCountry} from "../../Redux/Discussion/action"
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
function Country() {
  const { country } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeCountry(country));
  }, [dispatch]);

  return (
    <>
     
      <CountryLists />
      <Navbar></Navbar>
    </>
  );
}

export default Country;
