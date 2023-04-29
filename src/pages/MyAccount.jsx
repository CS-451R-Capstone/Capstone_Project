import React from 'react';
import '../App.css';
import NavBar from '../navigation/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLoading } from '../actions/authActions';


function MyAccount(){

    return(
        <div className='App'>
            <div>
                <NavBar/>
            </div>
            <h1>Welcome !</h1>
        </div>
        
    );
}
export default MyAccount;