import React, {Component} from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import countries from './countries';
import Globe from './Globe.png'

class App extends Component{
    render()
    {
        return (
            <div className="App">
                <div className="App-Component">
                    <h1> Countries of the World </h1>
                    <img className="Globe" src={Globe} alt="Globe"/>
                    <AutoCompleteText items={countries}/>
                </div>
            </div>
        );
    }
}

export default App;
