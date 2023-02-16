import React, {useState} from "react"
import logo from '../UMKC_Logo.png';
import {Link} from 'react-router-dom';
import MyAccount from "../pages/MyAccount";

function NavBar() {
    const [open, setOpen] = useState(false);

    return(
        <div>
            <nav>
                <div className="logo"> <img src={logo} alt="UMKC" /> </div>
                <ul className="nav-links" style={{transform: open ? "translateX(0px)" : "" }}>
                    <Link to='/home'>
                        <li><a>Home</a></li>
                    </Link>
                    <Link to='/my-account'>
                        <li><a>My Account</a></li>
                    </Link>
                    <Link to='/submission_portal'>
                        <li><a>Submission Portal</a></li>
                    </Link>
                    {/*<li><a>About</a></li>*/}
                    {/**
                     * We might have to change the logout button to use the method useHistory() instead depending on how
                     * the home page will look like in the end. Because logout should sign out the user.
                     */}
                    <Link to='/'>
                        <li><a>Logout</a></li>
                    </Link>
                    
                    
                </ul>
                <i onClick={() => setOpen(!open)} class="fa-solid fa-bars burger" />
            </nav>
        </div>
    )
}

export default NavBar