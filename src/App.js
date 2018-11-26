/*
    Contains all the modules to be called on the index page. 

*/
import React, {Component} from 'react';
import CardList from './CardList'; // Calling the Card Template
import SearchBox from './SearchBox';//Add Searchbox component
import {robots} from './robots'; // import robot.js
import './App.css';

//App component has two states
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    //Search function change state
    onSearchChange = (event) => { 
        this.setState({ searchfield: event.target.value })
    }


    render() {
    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
     return(
        <div className='tc'>
            <h1 className='f1'>Robot Friends</h1>
            <SearchBox searchChange ={this.onSearchChange}/>
            <CardList robots = {filteredRobots}/>
        </div> ///this.state.robots - React syntax. 
         );
    }
}


export default App; 