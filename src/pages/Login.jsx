import React, {useState} from 'react';
import logo from '../UMKC_Logo.png';
import {useHistory} from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const signIn = (event) => {
        event.preventDefault();
        event.stopPropagation();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
            createUser(userCredential.user.uid);

        }).catch((error) => {
            console.log(error);
        })
        history.push('/home');
    }
    const createUser = async(uid) => {
        await setDoc(doc(db, "users", uid), {
            email: email,
            password: password
        });


    }
    return(
        <div className='sign-in-container'>
            <div className="logo">
                <img src={logo} alt="UMKC" />
            </div>
            <form onSubmit={signIn}>
                <h1>Log In</h1>
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
                <button type="submit">Log In</button>
                
            </form>
        </div>
    )
}
export default Login;
