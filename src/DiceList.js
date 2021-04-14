import React from 'react';
import {
    AppBar
    , Toolbar
    , Typography
    , Container
    , List
    , ListItem
    , ListItemIcon
    , ListItemText
} from '@material-ui/core';
import Casino from '@material-ui/icons/Casino';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from 'react-router-dom';
import Nav from './Nav';

export const DiceList = ({ appDiceNames }) => {
    const history = useHistory();

    const individualStats = () => {
        history.push("/individualStats");
    }

    // generate dice buttons
    const diceButtons = appDiceNames.map(x =>
        <ListItem button
            onClick={individualStats}
        >
            <ListItemIcon>
                <Casino />
            </ListItemIcon>
            <ListItemText primary={x} />
            <ArrowForwardIosIcon />
        </ListItem>
    )

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
