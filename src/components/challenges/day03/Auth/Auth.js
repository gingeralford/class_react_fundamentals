//imrs
import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';

//sfc/
const Auth = () => {
    const [showLogin, setShowLogin] = useState(true);

    function handleToggle() {
        setShowLogin(!showLogin);
        //Same as below:
        // if(showLogin === true) {
        //     setShowLogin(false)
        // } else (
        //     setShowLogin(true)
        // )
    }

    return ( <div>
        {showLogin === true ? <Login /> : <Signup/>}
        <button onClick={handleToggle}>Click to Toggle</button>
        
        </div> );
}
 
export default Auth;