import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import DiceList from './DiceList';
import AddDie from './AddDie';
import IndividualStats from './IndividualStats';
import AddRoll from './AddRoll';
import { 
    Route
    , Switch
    , BrowserRouter as Router
  } from 'react-router-dom';
import { useState } from 'react';

function App() {

    return (
        <Router>

            <Switch>
                <Route path="/individualStats">
                    <IndividualStats />
                </Route>
                <Route path="/addDie">
                    <AddDie />
                </Route>
                <Route path="/addRoll">
                    <AddRoll />
                </Route>
                <Route path="/addDie">
                    <AddDie />
                </Route>
                <Route path="/">
                    <DiceList />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;