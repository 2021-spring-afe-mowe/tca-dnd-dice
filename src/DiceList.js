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
                    <ListItem button
                        onClick={individualStats}
                    >
                        <ListItemIcon>
                            <Casino />
                        </ListItemIcon>
                        <ListItemText primary="Blue Speckled" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Casino />
                        </ListItemIcon>
                        <ListItemText primary="Green and Gold" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Casino />
                        </ListItemIcon>
                        <ListItemText primary="White Speckled" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Casino />
                        </ListItemIcon>
                        <ListItemText primary="Purple" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                </List>
            </Container>

            <Nav />
        </div>
    );
}

export default DiceList;
