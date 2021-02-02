import * as actionType from "./actionType";

const initState = {
  alldiscussions: [],
  country : '',
  isLoading: false,
  isError: false
};

export const discussionReducer = (state = initState, action) => {
  switch (action.type) {
    //getting the discussions
    case actionType.GET_DISCUSSIONS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionType.GET_DISCUSSIONS_SUCCESS:
      return {
        ...state,
        alldiscussions: action.payload,
        isLoading: false
      };
    case actionType.GET_DISCUSSIONS_FAILURE:
      return {
        ...state,
        isError: true
      }; 
    case actionType.CHANGE_COUNTRY: 
   
    return{
      ...state,
      country: action.payload
    }
      default : return state;
    }
}

