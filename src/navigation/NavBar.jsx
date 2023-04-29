import React, {useState} from "react"
import logo from '../UMKC_Logo.png';
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logoutUser } from "../actions/authActions";

function NavBar() {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    return(
        <div>
            <nav>
                <div className="logo"> <img src={logo} alt="UMKC" /> </div>
                <ul className="nav-links" style={{transform: open ? "translateX(0px)" : "" }}>
                    <Link to='/'>
                        <li><a>Home</a></li>
                    </Link>
                    <Link to='/my-account'>
                        <li><a>My Account</a></li>
                    </Link>
                    <Link to='/'>
                        <li onClick={dispatch(logoutUser(dispatch))}><a>Logout</a></li>
                    </Link>
                    
                    
                </ul>
                <i onClick={() => setOpen(!open)} class="fa-solid fa-bars burger" />
            </nav>
        </div>
    )
}

export default NavBar