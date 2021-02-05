import React from 'react'
import styles from "./HostTravelers.module.css"
import {useHistory} from "react-router-dom"
import getHosts from "../../Redux/Hosts/action"
import {useSelector,useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import HostFilters from "./HostFilters"

const hostDesc=[`Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since`] 
const hostImg="https://images.unsplash.com/photo-1574213513359-5abf46101f60?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

const HostTravelers = () => {
    const[curr,setCurr]=React.useState("HOST")
    const[showFilters,setShowFilters]=React.useState(false)
    const dispatch = useDispatch()
    const{country}=useParams()
    const hostsData = useSelector(state => state.hosts.hostsData)
    const isLoading = useSelector(state => state.hosts.isLoading)
    const isError = useSelector(state => state.hosts.isError)
    const history=useHistory()
    const handleClick=(id)=>{
        history.push(`/hosts/${country}/${id}`)
    }
    const handleGet=()=>{
        dispatch(getHosts())
    }
    React.useEffect(()=>{
        handleGet()
    },[country])
    return (    
        <div className={styles.main__cont} >
            <div className={styles.main__cont__box1}>
                <div className={styles.main__cont__host__filter}>
                    <div className={styles.main__cont__host__headers}>
                        {curr==="HOST"?
                        <div>
                            <span className={styles.main__cont__host__travel__headers}>HOST</span>
                            <span onClick={(e)=>setCurr("TRAVELLERS")}>TRAVELERS</span>
                        </div>
                        :
                        <div>
                            <span onClick={(e)=>setCurr("HOST")} >HOST</span>
                            <span className={styles.main__cont__host__travel__headers}>TRAVELERS</span>    
                        </div>}
                    </div>
                    <div className={styles.main__cont__host__filter__labels}>
                        <label>
                            ARRIVE<br/>
                            <input type="date" placeholder="yy-mm-dd"/>
                        </label>
                        <label>
                            DEPART<br/>
                            <input type="date" placeholder="yy-mm-dd"/>
                        </label>
                        <label>
                            #OF TRAVELERS<br/>
                            <select>
                            {["Any",1,2,3,4,5,6,7,8,9,10].map((item)=>
                            <option key={item} value={item} >{item}</option>)}
                            </select>
                        </label>
                    </div>
                    {!showFilters?
                        <div className={styles.main__cont__host__filter__buttons}>
                            <button>CLEAR FILTERS</button>
                            <button>SEARCH</button>
                        </div>:""}
                    <div>{showFilters?<HostFilters></HostFilters>:""}</div>
                    <div className={styles.more__filters}>

                        <div onClick={(e)=>setShowFilters(prev=>!prev)}>MORE FILTERS</div>

                    </div>

                </div>
                <div>
                    {   isError?"something went wrong":
                        isLoading?".....Loading":
                        <div className={styles.main__cont__host__info}>
                            {
                                hostsData?.filter((item)=>item.country===country)
                                .map((item)=>
                                <div onClick={()=>handleClick(item.id)} key={item.id}>
                                    <div className={styles.main__cont__host__info__person__imgInfo}>
                                        <div>
                                            <img src={hostImg} alt="hello"/>
                                        </div>
                                        <div className={styles.person__info}>
                                            <h4>{`${item.first_name} ${item.last_name}`}</h4>
                                            <h6>takes longer than a week to reply</h6>
                                            <p>Refrences:{item.references}</p>
                                            <p>Verified:{`${item.verified}`}</p>
                                            <p>Speaks : {item.language}</p>
                                            {item.accepting_guests?<p style={{color:"green"}}>Accepting guests</p>:<p style={{color:"grey"}}>may be accepting guests</p>}

                                        </div>
                                    </div>
                                    <div className={styles.person__info__desc}>
                                        {item.description?
                                        <p>{hostDesc[0]}</p>:<p>No Description availible</p>}
                                    </div>

                                </div>)
                            }


                        </div>
                    }
                </div>
            </div>
            {/* <div className={styles.main__cont__box2}>
                    <div className={styles.main__cont__box2__info}>
                        <p>Also near Delhi</p>
                        <div>
                            <span><i class="fas fa-search"></i></span>
                            <span>Events in Delhi</span>
                            
                        </div>
                        <div>
                        <span><i class="fas fa-search"></i></span>
                            <span>Advice from Delhi Locals</span>
                        </div>
                    </div>
                    <div className={styles.main__cont__box2__travel__info}>
                        <h3>Enter your travel dates to <br/> filter out busy hosts</h3>
                    </div>
            </div> */}
        </div>
    )
}

export default HostTravelers
