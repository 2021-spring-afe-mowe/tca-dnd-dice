import { React, useState } from 'react';
import DiceList from './DiceList';
import AddDie from './AddDie';
import AddRoll from './AddRoll';
import { 
    Route
    , Switch
    , HashRouter as Router
  } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b71c1c',
        },
        secondary: {
            main: '#00bfa5',
            contrastText: '#fff',
        },
    },
  });

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

    const addData = (rollData) => {
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

    // get dice names and filter out duplicates
    let diceNames = appData.allRolls.map(x => x.dieName);
    diceNames = [...new Set(diceNames)];
    console.log("dice names: " + diceNames);


    return (
    <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <Route path="/addRoll">
                    <AddRoll
                        appAddData={addData}
                        appDiceNames={diceNames}
                    />
                </Route>
                <Route path="/addDie">
                    <AddDie
                        appAddData={addData}
                    />
                </Route>
                <Route path="/">
                    <DiceList
                        appDiceNames={diceNames}
                        appData={appData}
                    />
                </Route>
            </Switch>
        </Router>
    </ThemeProvider>
    );
}

export default App;