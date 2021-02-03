import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
    const [status, setStatus] = React.useState(false);
    return (
        <div>
        <div className="Navbar">
            <div className="Navbar__left">
                <img src="https://i.imgur.com/nMkAWNm.png" alt="logo" />
                <div>
                    <select>
                        <option value="explore">Explore</option>
                        <option value="host">Find Host</option>
                        <option value="member">Find Member</option>
                        <option value="location">Find Loctaion</option>
                        <option value="events">Find Events</option>
                    </select>
                    <img src="https://i.imgur.com/L8cOagc.png" alt="search"/>
                    <input type="text" placeholder="Where are you going?"/>
                </div>
            </div>
            <div className="Navbar__linksDiv">
                <div><Link className="Navbar__linksDiv__links p1" to="/"><img src="https://i.imgur.com/EZaiOyv.png" alt="verify"/><p>Verify</p></Link></div>
                <div><Link className="Navbar__linksDiv__links" to="/"><img src="https://i.imgur.com/kP616Fa.png" alt="dasboard" /><p>Dashboard</p></Link></div>
                <div><Link className="Navbar__linksDiv__links" to="/"><img src="https://i.imgur.com/oJIBk65.png" alt="group"/><p>Groups</p></Link></div>
                <div><Link className="Navbar__linksDiv__links" to="/"><img src="https://i.imgur.com/XdQafEV.png" alt="event"/><p>Event</p></Link></div>
                <div><Link className="Navbar__linksDiv__links" to="/"><img src="https://i.imgur.com/AlSftGF.png" alt="inbox"/><p>Inbox</p></Link></div>
                <div><Link className="Navbar__linksDiv__links" to="/"><img src="https://i.imgur.com/oDSouf3.png" alt="profile" /><p>Profile</p></Link></div>
                <div><Link className="Navbar__linksDiv__links" onClick={()=>setStatus(!status)}><img src="https://i.imgur.com/t54g7h9.png" alt="setting" /><p>Settings</p></Link></div>
                
            </div>

            </div>
            {status&&<div className="Navbar__linksDiv__settings">
                    <Link className="Navbar__linksDiv__links p2" to="/"><p>{`Account &Settings`}</p></Link>
                    <Link className="Navbar__linksDiv__links p2" to="/"><p>Logout</p></Link>
            </div>}
    </div>
    )
}

export default Navbar
