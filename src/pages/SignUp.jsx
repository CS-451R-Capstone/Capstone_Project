import React, {useState} from 'react';



function SignUp(){
    return(
        <div className='sign-up-container'>
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input 
                type="email" 
                placeholder='Enter your email...' 
                
                />
                <input 
                type="password" 
                placeholder='Enter your password...' 
                
                />
                <button type="submit">Sign Up</button>

                
            </form>
        </div>
    )
}
export default SignUp;