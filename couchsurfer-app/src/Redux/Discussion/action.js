import * as actionType from "./actionType";
import axios from "axios";

const getDiscussionsRequest = ()=>{
    return{
        type : actionType.GET_DISCUSSIONS_REQUEST
    }
}



const getDiscussionsSuccess = (payload)=>{
    return{
        type : actionType.GET_DISCUSSIONS_SUCCESS,
        payload
    }
}


const getDiscussionsFailure = (error)=>{
    return{
        type : actionType.GET_DISCUSSIONS_FAILURE,
        payload : {
            error : error
        }
    }
}
export const changeCountry = (payload)=>{
   
    return{
        type : actionType.CHANGE_COUNTRY,
        payload 
    }
}

export const getDiscussions = (params = {}) => (dispatch) => {
    dispatch(getDiscussionsRequest());
   
    return axios
      .get("https://hidden-springs-42645.herokuapp.com/comments", {
        params
      })
      .then((res) => {
        dispatch(getDiscussionsSuccess(res.data));
      })
      .catch((err) => dispatch(getDiscussionsFailure(err)));
  };