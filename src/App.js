import { React, useState } from 'react';
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

function App() {

    const initialAppData = {
        allRolls: [
            {
                dieName: "Blue Speckled"
                , roll: 5
                , time: "9pm on saturday"
            }
            , {
                dieName: "Blue Speckled"
                , roll: 18
                , time: "10pm on saturday"
            }
            , {
                dieName: "Green"
                , roll: 14
                , time: "11pm on saturday"
            }
        ]
    };

    const [appData, updateAppData] = useState(initialAppData);

    console.log(appData);

/*    const rollDie = () => {
        updateAppData({
            ...appData
            , allRolls: [
                ...appData.allRolls
                , {
                    dieName: "selected die"
                    , roll: "selected roll"
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