import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import DiceList from './DiceList';
import AddDie from './AddDie';
import IndividualStats from './IndividualStats';
import AddRoll from './AddRoll';

ReactDOM.render(
    <React.StrictMode>
        {/* <DiceList /> */}
        {/* <AddDie /> */}
        <IndividualStats />
        {/* <AddRoll /> */}
        {/* <Nav /> */}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
