// JS Object where property values of the component are stored
// Managed inside of the component instead of being passed into it like props

import { useState } from 'react';

const State = () => {
    const [count, setCount] = useState( () => {
        console.log('Function ran!')
        return 4;
    }) //destructuring the method of useState, these name setups are conventions

    function decCount() {
        setCount(count - 1)
    }

    function incCount() {
        setCount(count + 1)
    }

    //anything inside the return statement is not JS, it's JSX
    return (
        <> 
        <button onClick={decCount}>-</button>
        <span>{ count }</span>
        <button onClick={incCount}>+</button>
        </>
    )
}

export default State;