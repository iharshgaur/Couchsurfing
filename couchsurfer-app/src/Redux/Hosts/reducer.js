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
    // case todoActions.FILTER_BY_VERIFIED:
    //     const newData=state.hostsData.filter((item)=>)
    //     return (
    //         {
    //             ...state,

    //         }
    //     )
    case todoActions.FILTER_BY_REFRENCES:
       const newData=state.hostsData.filter((item)=>Number(item.references)!==0)
        return (
            {
                ...state,
                hostsData:newData

            }
        )
    case todoActions.FILTER_BY_LANGUAGE:
        const langData=state.hostsData.filter((item)=>item.language.toLowerCase()===payload.toLowerCase())
        return (
            {
                ...state,
                hostsData:langData
            }
        )
    case todoActions.FILTER_BY_ACCEPTING_GUESTS:
        const guestData=state.hostsData.filter((item)=>item.accepting_guests===true)
        return (
            {
                ...state,
                hostsData:guestData
            }
        )
    case todoActions.FILTER_BY_CITY:
        const cityData=state.hostsData.filter((item)=>item.city.toLowerCase()===payload.toLowerCase())
        return (
            {
                ...state,
                hostsData:cityData
            }
        )
    default:
        return state
 }
}
export default hostReducer