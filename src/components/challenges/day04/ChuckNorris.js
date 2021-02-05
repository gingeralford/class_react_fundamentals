import React, { useState, useEffect } from 'react';

const ChuckNorris = () => {
    const [joke, setJoke] = useState([]);

    function handleFetch() {
        fetch('https://api.chucknorris.io/jokes/random?category=celebrity', {
            method: 'GET'
        }).then((response) => response.json())
        .then((joke) => setJoke(joke.value))
    }

    return ( 
        <div><button onClick={handleFetch}>Get a Joke</button>
        <p>{joke}</p>
        </div>
     );
}
 
export default ChuckNorris;