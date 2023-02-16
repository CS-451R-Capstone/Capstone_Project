import React, {useState} from 'react';
import logo from '../UMKC_Logo.png';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

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
                <Link to='/home'>
                    <button>Log In</button>
                </Link>
                
                
            </form>
        </div>
    )
}
export default Login;
