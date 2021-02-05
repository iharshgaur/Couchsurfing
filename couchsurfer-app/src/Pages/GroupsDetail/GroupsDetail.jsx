import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../../Components/GroupsDetail/GroupsDetail.css";
import Navbar from "../../Components/Navbar/Navbar";
import { getEvents } from "../../Redux/Events/action";
import DiscussionForum from "../../Components/DiscussionForum/DiscussionForum";

const GroupsDetail = () => {
    const { id } = useParams();
   
    const data = useSelector(state => state.events.data);
    const dispatch = useDispatch();
    const [popUp, setpopUp] = React.useState(false);
    React.useEffect(() => {
        dispatch(getEvents());
        console.log(id);
    },[])
 
  return (
    <>
      <Navbar></Navbar>
      <div className="GroupsDetail__container">
        <div className="GroupsDetail__container__left">
          <div>
            <div className="GroupsDetail__container__left__createEvent" >
             <img src="https://i.imgur.com/oJIBk65.png" alt=""/>
              <h3>JOIN</h3>
            </div>
            <div className="GroupsDetail__container__left__hr"></div>
            <div className="GroupsDetail__container__left__createEvent__button" >
             <button onClick={()=>setpopUp(!popUp)}>JOIN</button>
            </div>
         </div>      
        </div>
        <div>
             
        <div className="GroupsDetail__container__right">
            <div>
              <div className="GroupsDetail__container__right__logo">
                <img src="https://i.imgur.com/utfxlYV.png" alt="logo" />
                       <h4> Group Detail </h4>
              </div>
              <div className="GroupsDetail__container__right__hr"></div>
             
                {data&&data?.filter(e=>e.id==id).map((e)=><> <div key={e.id} className="GroupsDetail__container__right_image">
                <div >
                   <img style={{height:"100%" ,width:"100%"}}  src={e.url} alt={ e.url}/>
                </div>
                <div >
                    <div>
                        <h2>{e.title}</h2>
                            <p>{e.location}</p>
                            <p>{`From :${e.from}  To :${e.to}`}</p>
                    </div>
                    </div>
                    
                </div>
                    <div className="GroupsDetail__container__right__hr"></div>
                </>    
                )}
        </div>
            </div>
        </div>
          </div>
          <DiscussionForum countryName={"India"} />        
    </>
  );
  
};
export default GroupsDetail;
