import * as actionType from "./actionType";

const initState = {
  countries :  [],
  isError : false,
  isLoading : false,
};

export const countryReducer = (state = initState, action) => {
  switch (action.type) {
    //getting the discussions
    case actionType.GET_COUNTRY_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionType.GET_COUNTRY_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        isLoading: false
      };
    case actionType.GET_COUNTRY_FAILURE:
      return {
        ...state,
        isError: true
      }; 

      default : return state;
    }
}

