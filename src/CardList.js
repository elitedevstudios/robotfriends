/*
    This module takes takes the Card.js tempate loops through the robot.js with the array of users,
    And makes cards for all the users.  

*/
import React from 'react';
import Card from './Card';// Calling the Card Template

const CardList = ({ robots }) => {

    return(// necessary
        <div>
        {
            robots.map((user,i) => {
            return (
                <Card 
                    key ={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email = {robots[i].email}

                />
            );
            })
        }
        </div>
    );
}


export default CardList;