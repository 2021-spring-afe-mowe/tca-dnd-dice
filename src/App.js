import { React, useState } from 'react';
import DiceList from './DiceList';
import AddDie from './AddDie';
import IndividualStats from './IndividualStats';
import AddRoll from './AddRoll';
import { 
    Route
    , Switch
    , BrowserRouter as Router
  } from 'react-router-dom';

function App() {

    const initialAppData = {
        allDice: [
            {
                dieName: "Blue Speckled"
                , rolls: [
                    {
                        roll: 5
                        , time: "9pm on saturday"
                    }
                    , {
                        roll: 18
                        , time: "10pm on saturday"
                    }
                ]
            }
            , {
                dieName: "Green"
                , rolls: [
                    {
                        roll: 13
                        , time: "9:30pm on saturday"
                    }
                    , {
                        roll: 20
                        , time: "11pm on saturday"
                    }
                ]
            }
        ]
    };

    const [appData, updateAppData] = useState(initialAppData);

    console.log(appData);

/*    const rollDie = (rollData) => {
        updateAppData({
            ...appData
            , allDice: [
                ...appData.allDice
                , {
                    dieName: "selected die"
                    , roll: selected roll
                    , time: Date.now()
                }
            ]
        });
    }
*/

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