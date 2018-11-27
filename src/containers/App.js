/*
    Contains all the modules to be called on the index page. 

*/
import React, {Component} from 'react';
import CardList from '../components/CardList'; // Calling the Card Template
import SearchBox from '../components/SearchBox'; //Add Searchbox component
//import {robots} from './robots'; // import robot.js
import Scroll from '../components/Scroll';
import './App.css';

//App component has two states
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    // Get users from .json API
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));    
    }
    //Search function change state
    onSearchChange = (event) => { 
        this.setState({ searchfield: event.target.value })
    }

    render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
        //Assuming  that the json file takes awhile to load you can put an if statement.
    return !robots.length ?
         <h1>Loading</h1> :
    (
            <div className='tc'>
                <h1 className='f1'>Robot Friends</h1>
                <SearchBox searchChange ={this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div> ///this.state.robots - React syntax. 
            );
    }
}
export default App; 