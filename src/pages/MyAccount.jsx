import React, { useEffect, useState } from 'react';
import '../App.css';
import NavBar from '../navigation/NavBar';
import { useSelector, useDispatch} from 'react-redux';
import { setUserLoading } from '../actions/authActions';


function MyAccount(){

    const NameOfUser = useSelector(state => state.auth.user.name);

    

    return(
        <div className='App'>
        <div>
            <NavBar/>
        </div>
        <h1>Welcome {NameOfUser || ""} !</h1>
    </div>
        
    );
}
export default MyAccount;