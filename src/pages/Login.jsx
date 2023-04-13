import React, {useState, useEffect} from 'react';
import logo from '../UMKC_Logo.png';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function Login(){

    const location = useLocation();
    const posting = location.state?.posting;
    const className = location.state?.className;
    const sectionID = location.state?.sectionID;

    /*

    const [userLogins, setUserLogins] = useState([]);
    useEffect(() => {
        async function getLogins(){
            const response = await fetch(`http://localhost:5000/logins`);
            if(response.ok){
                let userLogins = await response.json();
                setUserLogins(userLogins);
                return;
            }
        }
        getLogins();
        return;
    }, [userLogins.length]);
    */

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //function Authenticate(){
        

    //}

    return(
        <div className='sign-in-container'>
            <div className="logo">
                <img src={logo} alt="UMKC" />
            </div>
            <form onSubmit={""}>
                <h1>Log In</h1>
                <input 
                type="email" 
                placeholder='Enter your email...' 
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                />
                <input 
                type="password" 
                placeholder='Enter your password...' 
                value={password}
                onChange={(event) => {setPassword(event.target.value)}}
                />
                <Link to={{pathname: '/submission-portal', 
                    state: {
                        posting: posting,
                        className: className,
                        sectionID: sectionID
                    }}}>
                    <button>Log In</button>
                </Link>
                
                
            </form>
        </div>
    )
}
export default Login;
