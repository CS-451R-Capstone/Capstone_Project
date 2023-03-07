import React from 'react';
import '../App.css';
import NavBar from '../navigation/NavBar';
function MyAccount(){
    return(
        <div className='App'>
            <div>
                <NavBar/>
            </div>
            <h1>
                My Account Page
            </h1>
        </div>
    );
}
export default MyAccount;