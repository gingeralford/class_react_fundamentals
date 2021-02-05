import React, { useEffect, useState } from 'react';
import MortyChild from './MortyChild';
import { CardColumns } from 'reactstrap';

const MortyParent = () => {
    const [characters, setCharacters] = useState([]);

    function fetchMorty(){
        fetch('https://rickandmortyapi.com/api/character', {
            method: 'GET'
        }).then((res) => res.json())
        .then((json) => {
            setCharacters(json.results);
            console.log(json.results)});
    }

    useEffect(() => {
        fetchMorty();
    }, []);
    //this empty set is an empty dependency, so it won't run over and over, only runs once on load. it's not depending on anything else to run


    function displayCards (){
        return characters.length > 0 ? characters.map((character) => <MortyChild mortyCharacter={character} />) : null;
    }

    return ( 
        <div>
            <button onClick={fetchMorty}>Fetch Morty</button>
            {/* Hello From MortyParent */}
            
            <CardColumns>
                {displayCards()}
            </CardColumns>
        </div>
     );
}
 
export default MortyParent;