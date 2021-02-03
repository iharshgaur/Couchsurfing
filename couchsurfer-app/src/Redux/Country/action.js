import * as actionType from "./actionType";
import axios from "axios";

const getCountryRequest = ()=>{
    return{
        type : actionType.GET_COUNTRY_REQUEST
    }
}



const getCountrySuccess = (payload)=>{
    return{
        type : actionType.GET_COUNTRY_SUCCESS,
        payload
    }
}


const getCountryFailure = (error)=>{
    return{
        type : actionType.GET_COUNTRY_FAILURE,
        payload : {
            error : error
        }
    }
}


export const getCountry = (params = {}) => (dispatch) => {
    dispatch(getCountryRequest());
    return axios
      .get("https://hidden-springs-42645.herokuapp.com/countries", {
        params
      })
      .then((res) => {
        dispatch(getCountrySuccess(res.data));
      })
      .catch((err) => dispatch(getCountryFailure(err)));
  };