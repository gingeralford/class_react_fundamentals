import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function eOnC (event) {
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    function pOnC (event) {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    return (
        <div>
            <h3>Signup</h3>
            <input type="text" placeholder="email"
            value={email} onChange={(e) => eOnC(e)} />
            <input type="text" placeholder="password"
            value={password} onChange={(e) => pOnC(e)} />
        </div>
      );
}
 
export default Signup;