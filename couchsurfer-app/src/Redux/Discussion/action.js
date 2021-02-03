import * as actionType from "./actionType";
import axios from "axios";


//GET DISCUSSIONS
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

//ADD COMMENTS


const addCommentsRequest = ()=>{
    return{
        type : actionType.ADD_COMMENTS_REQUEST
    }
}



const addCommentsSuccess = (payload)=>{
    return{
        type : actionType.ADD_COMMENTS_SUCCESS,
        payload
    }
}


const addCommentsFailure = (error)=>{
    return{
        type : actionType.ADD_COMMENTS_FAILURE,
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


//GET DISCUSSIONS
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


//ADD COMMENTS
export const addComments = (payload,id) => (dispatch) => {
  dispatch(addCommentsRequest());
  return axios
    .put(`https://hidden-springs-42645.herokuapp.com/comments/${id}`, payload)
    .then((res) => {
      console.log(res);
      dispatch(addCommentsSuccess(res.data));
    })
    .catch((err) => dispatch(addCommentsFailure(err)));
};
