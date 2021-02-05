import React from "react";
import { CountryLists } from "../../Components/CountriesList/CountryList";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
function Country() {
  const { country } = useParams();
  React.useEffect(() => {
    document.title = ` ${country} | Couchsurfers`;
  }, []);
  return (
    <>
      <CountryLists country={country} />
      <Navbar></Navbar>
    </>
  );
}

export default Country;
