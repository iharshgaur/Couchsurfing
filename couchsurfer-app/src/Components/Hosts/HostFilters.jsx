import React from 'react'
import styles from "./HostFilters.module.css"
import {useDispatch} from "react-redux"
import * as actionFunc from "../../Redux/Hosts/action"
import {useParams} from "react-router-dom"
const rooms=[ "Private room",
    "Public room",
    "Shared room",
    "Shared Bed",
   ]
const prefrences_filters=["Kids at Home",
    "Kid Friendly",
    "Pet-free",
    "Pet Friendly",
    "Wheelchair Accessible",]
const HostFilters = () => {
    const dispatch = useDispatch()
    const[details,setDetails]=React.useState({
        haveReference:false,
        isAcceptingGuests:false,
        whichCity:"",
        languageSpoken:"",
        isVerified:false

    })
    const handleChange=(e)=>{
        const{name,type,value,checked}=e.target
        const val=type==="checkbox"?checked:value
        setDetails({...details,[name]:val})
    }
    const{haveReference,isAcceptingGuests,whichCity,languageSpoken,isVerified}=details
    const handleSubmit=(e)=>{
        e.preventDefault()
    
        if(haveReference)
        {
            dispatch(actionFunc.getFilterByRefrences())
        }
        if(isAcceptingGuests)
        {
            dispatch(actionFunc.getFilterByAcceptingGuests())
        }
        if(languageSpoken!=="")
        {
           
            dispatch(actionFunc.getFilterByLanguage(languageSpoken))
        }
        if(whichCity!=="")
        {
           
            dispatch(actionFunc.getFilterByCity(whichCity))
        }
        if(isVerified)
        {
            dispatch(actionFunc.getFilterByVerified())
        }
    }
 
    const handleReload=()=>{
            window.location.reload()
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className={styles.main__cont}>
            <div className={styles.main__cont__host__info}>
                <p>HOST INFO</p>
                <div>
                    <label>
                        <input onChange={handleChange} name="haveReference" checked={haveReference} type="checkbox"/>
                        Have References
                    </label>
                    <br/>
                    <label>
                        <input onChange={handleChange} name="isVerified" checked={isVerified} type="checkbox"/>
                        Are Verified
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox"/>
                        Ambassador
                    </label>
                    <br/>
                    <label>
                        <input onChange={handleChange} name="isAcceptingGuests" checked={isAcceptingGuests} type="checkbox"/>
                        Accepting Guest
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox"/>
                        Wants to Meet Up
                    </label>
                    <br></br>
                    <br/>
                    
                    <label>
                        Last Login Date<br></br>
                        <select>
                            {["Anytime","In the last 24 hours","In the last week hours","In the last six months"]
                            .map((item)=>
                            <option key={item} value={item}>{item}</option>)}
                            
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        Join Date<br></br>
                        <select>
                            {["Anytime","In the last 24 hours","In the last week hours","In the last six months"]
                            .map((item)=>
                            <option key={item} value={item}>{item}</option>)}
                            
                        </select>
                    </label>
                    <br></br>
                    <br/>
                    <label>
                        Gender<br></br>
                        <select>
                            {["All","Male","Female","others"]
                            .map((item)=>
                            <option key={item} value={item}>{item}</option>)}
                            
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                       Age
                        <input type="number" />
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                       Languages Spoken<br></br>
                        <input onChange={handleChange} value={languageSpoken} name="languageSpoken" placeholder="example:German" />
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                       City<br></br>
                        <input onChange={handleChange} value={whichCity} name="whichCity" placeholder="example:German" />
                    </label>
                    <br></br>
                    <br/>
                    <label>
                      Interest<br></br>
                        <input placeholder="example:Hiking" />
                    </label>
                    <br></br>
                </div>

            </div>
            <div className={styles.main__cont__accomodations}>
                <p>Accomodations</p>
                    {
                        rooms.map((item)=>
                            <div>
                                <label>
                                    <input type="checkbox"/>
                                    {item}
                                </label>
                                <br></br>
                            </div>
                          
                        )
                    }
                    <br></br>
                    <br></br>
                    <div>
                        <label>
                            Smoking is allowed<br/>
                            <select>
                                {["No Preference","Yes","No"].map((item)=>
                                <option key={item} value={item}>{item}</option>)}
                            </select>
                        </label>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <label>
                            Radius <br></br>
                            <select>
                                {["within 10 km","within 20km"].map((item)=>
                                <option key={item} value={item}>{item}</option>)}
                            </select>
                        </label>
                    </div>
            </div>
            <div className={styles.main__cont__preferences}>
                <p>PREFRENCES</p>
                {
                        prefrences_filters.map((item)=>
                            <div>
                                <label>
                                    <input type="checkbox"/>
                                    {item}
                                </label>
                                <br></br>
                            </div>
                          
                        )
                 }
                 <br/>
                 <br/>
                 <div className={styles.main__cont__preference__keyword}>
                     <label>
                         Keywords<br></br><br></br>
                         <input type="text"/>
                     </label>
                 </div>
                 <br/><br/>
                 <label>
                    sort<br></br>
                    <select>
                        {["Best Match","Hosting Experience"].map((item)=>
                        <option key={item} value={item}>{item}</option>)}
                    </select>
                 </label>

            </div>
        </div>
        <input className={styles.submit__btn} type="submit" value="SEARCH"/>
        </form>
        <button className={styles.submit__btn} onClick={handleReload} >CLEAR FILTERS</button>
        </>

    )
}

export default HostFilters
