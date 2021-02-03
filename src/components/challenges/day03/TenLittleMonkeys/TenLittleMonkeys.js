// Create a button that when clicked you will subtract one monkey from the total. If it is zero you should display the following:
// There is no more monkeys jumping on the bed
// Otherwise you should display the following:
// 10 monkeys jumping on the bed one fell of and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed.
// Create a new component
// use useState
// Initialize your monkey count to 10

import React, {useState} from "react";

const TenLittleMonkeys = () => {
    const [count, setCount ] = useState(10);
    let [message, setMessage] = useState(`${count} monkeys jumping on the bed one fell off and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed.`);

    function countDown() {
        if(count != 0){
           setCount(count - 1);
        }
        setMessage(`${count} monkeys jumping on the bed one fell off and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed.`);
        if (count < 1) {
            setCount(0);
            setMessage("There is no more monkeys jumping on the bed");
        }
    };

    // function handleClick () {
    //     setCount(count - 1);
    // }




    return (
    <div>
        {/* <p>{message}</p> */}
        <p>{count != 0 ? `${count} little monkeys jumping` : "no more monkeys"} jumping on the bed.</p>
        <button onClick={countDown}>Less Monkeys!</button>
    </div>
    );
};


export default TenLittleMonkeys;