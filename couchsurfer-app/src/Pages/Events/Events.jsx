import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../Components/Events/Events.css";
import Navbar from "../../Components/Navbar/Navbar";
import { getEvents, putEvents } from "../../Redux/Events/action";
const Dashboard = () => {
    const data = useSelector(state => state.events.data);
    const dispatch = useDispatch();
    const history = useHistory();
    React.useEffect(() => {
        dispatch(getEvents());
        console.log(data);
    },[])
  const handleCountry = (country) => {
      history.push(`/country/${country}`);
    };
    
    const handleJoin = (id) => {
        dispatch(putEvents(id, "true"));
    }
    const handleRemove = (id) => {
        dispatch(putEvents(id, "false"));
    }
  return (
    <>
      <Navbar></Navbar>
      <div className="Events__container">
        <div className="Events__container__left">
          <div>
            <div className="Events__container__left__createEvent" >
             <img src="https://i.imgur.com/GULrZMx.png" alt=""/>
              <h3>Events I’m Organizing</h3>
            </div>
            <div className="Events__container__left__hr"></div>
            <div className="Events__container__left__createEvent__button" >
             <button>+ Create an Event</button>
            </div>
         </div>
            <div className="Events__container__left__createEvent" >
             <img src="https://i.imgur.com/GULrZMx.png" alt=""/>
              <h3> Events I'm Attending</h3>
            </div>       
            {data&&
              data?.filter((e)=>e.status==="true").map((e)=><div key={e.id} className="Events__container__left__Joined">
              <div >
                      <h3>{ e.title}</h3>
                      <p>{e.location}</p>
              </div>
              <div className="Events__container__left__hr"></div>
              <div>
              <button onClick={()=>handleRemove(e.id)}>
                Remove
              </button>
             </div>
                    </div>  )
            }          
        </div>
        <div>
           {data&&data?.map((e)=><div key={e.id} className="Events__container__right">
            <div>
              <div className="Events__container__right__logo">
                {" "}
                <img src="https://i.imgur.com/TkZ3kB9.png" alt="logo" />
                       <h4> Envets : {e.country }</h4>
              </div>
              <div className="Events__container__right__hr"></div>
              <div className="Events__container__right_image">
                <div onClick={() => handleCountry("India")}>
                           <img style={{height:"100%" ,width:"100%"}}  src={e.url} alt={ e.url}/>
                </div>
                <div onClick={() => handleCountry("USA")}>
                           <div>
                               <h2>{e.title}</h2>
                               <p>{e.location}</p>
                               <p>{`From :${e.from}  To :${e.to}`}</p>
                               <div className="Events__container__right__social">
                                   <h3>Share this event with your friends:</h3>
                                   <div> 
                                       <img src="https://i.imgur.com/5VzqqGF.png" alt="facebook" />
                                       <img src="https://i.imgur.com/VtwmpfL.png" alt="whatapp" />
                                       <img src="https://i.imgur.com/5wWrFuG.png" alt="Twitter"/>
                                   </div>
                               </div>
                           </div>
                </div>
                
              </div>
              <div className="Events__container__right__join">
                {e.status=="false"?<button onClick={() => handleJoin(e.id)}>JOIN</button>:""}
              </div>
                      </div>
            </div>
   )
                      
            }
        </div>
      </div>
    </>
  );
};
export default Dashboard;
