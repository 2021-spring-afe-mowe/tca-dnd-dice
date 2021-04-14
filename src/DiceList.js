import { React, useState } from 'react';
import {
    AppBar
    , Toolbar
    , Typography
    , Container
    , List
    , ListItem
    , ListItemIcon
    , ListItemText
    , Collapse
    , Divider
} from '@material-ui/core';
import Casino from '@material-ui/icons/Casino';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import Nav from './Nav';

export const DiceList = ({ appDiceNames, appData }) => {
    const history = useHistory();

    // collapse stuff
    const [open, setOpen] = useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };

    let rollData;

    //get roll data
    const getRollData = ( dieName ) => {
        rollData = appData.allRolls.filter(x => x.dieName == dieName);
        rollData = rollData.map(x => x.roll);
        console.log(rollData);
        return rollData;
    }

    //get average
    const getAverage = ( dieName ) => {
        let average = getRollData(dieName).reduce((a, value) => a + value, 0) / getRollData(dieName).length;
        return average;
    }

    // generate dice buttons
    const diceButtons = appDiceNames.map(x =>
        <>
        <ListItem button
            onClick={handleClick}
        >
            <ListItemIcon>
                <Casino />
            </ListItemIcon>
            <ListItemText primary={x} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider />
        <Collapse in={open}>
            <List component="div" disablePadding>
                <ListItem>
                    <ListItemText primary="Average Roll: " secondary={getAverage(x)}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="20's Rolled: " />
                </ListItem>
                <ListItem>
                    <ListItemText primary="1's Rolled: " />
                </ListItem>
            </List>
        </Collapse>
        <Divider />
        </>
    );

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Dice
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Container>
                <List>
                    {diceButtons}
                </List>
            </Container>

            <Nav />
        </div>
    );
}

export default DiceList;
