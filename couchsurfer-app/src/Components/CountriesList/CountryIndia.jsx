import React from "react"
import styles from "./CountryList.module.css";


const CountryIndia =()=>{

    return(

        <div className={styles.countryList__wrapper}>

        <div className={styles.countryList__hostsCard}>
            <h2 className={styles.countryList__head}>Local Hosts</h2>
            <p>Stay with one of the 672,389 hosts in India</p>

            
            <div style={{display:"flex", flexWrap:"wrap", margin: "30px"}}>
            
                <div>
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" 
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                    <p style={{margin:"0px"}}>Lara</p>
                </div>

                <div>
                    <img src="https://www.abc.net.au/cm/rimage/12108300-3x4-xlarge.jpg?v=4"
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} /> 
                    <p style={{margin:"0px"}}>James</p>
                </div>
                
                <div>
                    <img src="https://www.glenbardgps.org/wp-content/uploads/2019/03/Amy-morin.jpg" 
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                    <p style={{margin:"0px"}}>Priya</p>
                </div>

                <div>
                    <img src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} /> 
                    <p style={{margin:"0px"}}>Ram</p>
                </div>

                <div>
                    <img src="https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-indian-woman-picture-id917499044?k=6&m=917499044&s=612x612&w=0&h=lx17asXD4jaIlXrFgBdd8Tinl0oSe43K0All11IjKWY="
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                    <p style={{margin:"0px"}}>Geeta</p>
                </div>
                
                <div>
                    <img src="https://i.pinimg.com/originals/ac/80/a4/ac80a426827b367175d81f905d5e04e4.jpg" 
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                    <p style={{margin:"0px"}}>Surya</p>
                </div>

                    <button style={{backgroundColor:"#287FB8",width:"50%",padding:"10px 20px", margin:"50px auto", border:"none", borderRadius:"5px", color:"white", fontSize:"15px", fontWeight:"bold"}}>Meet Travelers</button>

            </div>
        </div>


        {/* card2 */}
        <div className={styles.countryList__hostsCard}>
            <h2 className={styles.countryList__head}> Upcoming Visitors</h2>
            <p>Meet or Host some of the 795 visitors to India</p>
            
            <div style={{display:"flex", flexWrap:"wrap", margin: "30px"}}>
            
                <div>
                    <img src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} /> 
                    <p style={{margin:"0px"}}>Ram</p>
                </div>

                <div>
                    <img src="https://www.abc.net.au/cm/rimage/12108300-3x4-xlarge.jpg?v=4"
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} /> 
                    <p style={{margin:"0px"}}>James</p>
                </div>
                
                <div>
                    <img src="https://i.pinimg.com/originals/ac/80/a4/ac80a426827b367175d81f905d5e04e4.jpg" 
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                    <p style={{margin:"0px"}}>Surya</p>
                </div>

                <div>
                    <img src="https://www.glenbardgps.org/wp-content/uploads/2019/03/Amy-morin.jpg" 
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                    <p style={{margin:"0px"}}>Priya</p>
                </div>

                

                <div>
                    <img src="https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-indian-woman-picture-id917499044?k=6&m=917499044&s=612x612&w=0&h=lx17asXD4jaIlXrFgBdd8Tinl0oSe43K0All11IjKWY="
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                    <p style={{margin:"0px"}}>Geeta</p>
                </div>
                
                <div>
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" 
                    alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                    <p style={{margin:"0px"}}>Lara</p>
                </div>

                <button style={{backgroundColor:"#287FB8",width:"50%",padding:"10px 20px", margin:"50px auto", border:"none", borderRadius:"5px", color:"white", fontSize:"15px", fontWeight:"bold"}}>Meet Travelers</button>
            </div>
         </div>

        {/* card3  */}


        <div className={styles.countryList__hostsCard}>
            <h2 className={styles.countryList__head}> Hangouts</h2>
            <p>76 members available to meet now</p>

            <div style={{display:"flex", flexWrap:"wrap", margin: "30px"}}>

            <div>
                <img src="https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-indian-woman-picture-id917499044?k=6&m=917499044&s=612x612&w=0&h=lx17asXD4jaIlXrFgBdd8Tinl0oSe43K0All11IjKWY="
                alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                <p style={{margin:"0px"}}>Geeta</p>
            </div>

            <div>
                <img src="https://www.abc.net.au/cm/rimage/12108300-3x4-xlarge.jpg?v=4"
                alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} /> 
                <p style={{margin:"0px"}}>James</p>
            </div>

            <div>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" 
                alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                <p style={{margin:"0px"}}>Lara</p>
            </div>

            <div>
                <img src="https://www.glenbardgps.org/wp-content/uploads/2019/03/Amy-morin.jpg" 
                alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                <p style={{margin:"0px"}}>Priya</p>
            </div>

            <div>
                <img src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} /> 
                <p style={{margin:"0px"}}>Ram</p>
            </div>

            
            <div>
                <img src="https://i.pinimg.com/originals/ac/80/a4/ac80a426827b367175d81f905d5e04e4.jpg" 
                alt="user" style={{margin: "10px", width:"80px",height:"80px", borderRadius:"50%"}} />
                <p style={{margin:"0px"}}>Surya</p>
            </div>

                <button style={{backgroundColor:"#287FB8",width:"50%",padding:"10px 20px", margin:"50px auto", border:"none", borderRadius:"5px", color:"white", fontSize:"15px", fontWeight:"bold"}}>Meet Travelers</button>

            </div>

        </div>

        <div className={styles.countryList__wrapper}>

        </div>


</div>

    )
}

export {CountryIndia}

