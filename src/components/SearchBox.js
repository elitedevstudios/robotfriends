import React from 'react';
import CardList from './CardList'; // Calling the Card Template
//import {robots} from './robots'; // import robot.js





const SearchBox = ({searchfield, searchChange}) => {
    return ( 
        //retuns an input, place holder,
        <div className='pa2'>
            <input 
            className = 'pa3 ba b--green bg-lightest-blue'
            type ='search' 
            placeholder ='Search Robots'
            onChange ={searchChange}
            />
        </div>
    
    );
}

export default SearchBox;