import { React, useState } from 'react';
import DiceList from './DiceList';
import AddDie from './AddDie';
import IndividualStats from './IndividualStats';
import AddRoll from './AddRoll';
import { 
    Route
    , Switch
    , HashRouter as Router
  } from 'react-router-dom';

const App = () => {

    const initialAppData = {
        allRolls: [
            {
                dieName: "Blue Speckled"
                , roll: 5
                , time: "9pm on saturday"
            }
            , {
                dieName: "Green and Gold"
                , roll: 13
                , time: "9:30pm on saturday"
            }
            , {
                dieName: "Green and Gold"
                , roll: 19
                , time: "10:30pm on saturday"
            }
            , {
                dieName: "Green and Gold"
                , roll: 8
                , time: "11:30pm on saturday"
            }
        ]
    };

    const [appData, updateAppData] = useState(initialAppData);

    console.log(appData);

    const rollDie = (rollData) => {
        updateAppData({
            ...appData
            , allRolls: [
                ...appData.allRolls
                , {
                    dieName: rollData.die
                    , roll: rollData.roll
                    , time: Date.now()
                }
            ]
        });
        console.log(appData);
    }


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
    );
}

export default App;