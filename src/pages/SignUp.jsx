import React, {useState} from 'react';
import {auth} from '../firebase-config';
import {createUserWithEmailAndPassword} from '@firebase/auth';
import {Link} from 'react-router-dom';

function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }
    return(
        <div className='sign-up-container'>
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input 
                type="email" 
                placeholder='Enter your email...' 
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}/>
                <input 
                type="password" 
                placeholder='Enter your password...' 
                value={password}
                onChange={(event) => {setPassword(event.target.value)}}/>
                {/*<Link to='/home'>*/}
                    <button type="submit">Sign Up</button>
                {/*</Link>*/}

                
            </form>
        </div>
    )
}
export default SignUp;