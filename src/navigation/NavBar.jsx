import React, {useState} from "react"
import logo from '../UMKC_Logo.png';
import {Link} from 'react-router-dom';

function NavBar() {
    const [open, setOpen] = useState(false);

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
                    {
                        /*
                        <Link to='/submission-portal'>
                            <li><a>Submission Portal</a></li>
                        </Link>
                        */
                    }
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