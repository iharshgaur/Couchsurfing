import * as todoActions from "./actionType"

const initState={
    isLoading:false,
    isError:false,
    hostsData:[]
}
const hostReducer=(state=initState,{type,payload})=>
{
 switch(type)
 {
     case todoActions.GET_HOSTS_REQUEST:
         return (
             {
                 ...state,
                 isLoading:true,
                 isError:false
             }
         )
     case todoActions.GET_HOSTS_SUCCESS:
         return (
             {
                 ...state,
                 isLoading:false,
                 hostsData:payload
             }
         )
    case todoActions.GET_HOSTS_FAILURE:
        return (
            {
                ...state,
                isLoading:false,
                isError:true
            }
        )
    default:
        return state
 }
}
export default hostReducer