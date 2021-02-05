import * as todoActions from "./actionType"
import axios from "axios"
const getHostsRequest=()=>{
    return (
        {
            type:todoActions.GET_HOSTS_REQUEST
        }
    )
}
const getHostsSuccess=(payload)=>
{
    return (
        {
            type:todoActions.GET_HOSTS_SUCCESS,
            payload
        }
    )
}
const getHostsFailure=()=>{
    return (
        {
            type:todoActions.GET_HOSTS_FAILURE
        }
    )
}
const getHosts=(params={})=>(dispatch)=>{
    dispatch(getHostsRequest())
    return axios.get("https://hidden-springs-42645.herokuapp.com/hosts",{
        params
    })
    .then((res)=>dispatch(getHostsSuccess(res.data)))
    .catch(err=>dispatch(getHostsFailure()))
}
export default getHosts
export const getFilterByVerified=()=>{
    return (
        {
            type:todoActions.FILTER_BY_VERIFIED
        }
    )
}
export const getFilterByLanguage=(payload)=>{
    return (
        {
            type:todoActions.FILTER_BY_LANGUAGE,
            payload
        }
    )
}

export const getFilterByRefrences=()=>{
    return (
        {
            type:todoActions.FILTER_BY_REFRENCES
        }
    )
}
export const getFilterByAcceptingGuests=()=>{
    return (
        {
            type:todoActions.FILTER_BY_ACCEPTING_GUESTS
        }
    )
}
export const getFilterByCity=(payload)=>{
    return (
        {
            type:todoActions.FILTER_BY_CITY,
            payload
        }
    )
}