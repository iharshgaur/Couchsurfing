import React from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../Redux/Country/action";
import { CountryLists } from "../../Components/CountriesList/CountryList";
import { changeCountry } from "../../Redux/Discussion/action";
function Country() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeCountry("Germany"));
  }, [dispatch]);

  return (
    <>
      <CountryLists />
    </>
  );
}

export default Country;
