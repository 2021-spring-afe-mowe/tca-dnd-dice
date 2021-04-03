import React from 'react';
import {
    AppBar
    , Toolbar
    , Typography
    , Container
    , List
    , ListItem
    , ListItemText
    , ListSubheader
    , IconButton
    , Divider
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import Nav from './Nav';

function IndividualStats() {
    const history = useHistory();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={() => history.goBack()}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Die Stats
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Container>
                <List>
                    <ListSubheader />
                        <ListItemText primary="1s Rolled" />
                    <ListSubheader />
                    <Divider />
                    <ListItem>
                        2
                    </ListItem>

                    <ListSubheader />
                        <ListItemText primary="20s Rolled" />
                    <ListSubheader />
                    <Divider />
                    <ListItem>
                        3
                    </ListItem>

                    <ListSubheader />
                        <ListItemText primary="Roll Average" />
                    <ListSubheader />
                    <Divider />
                    <ListItem>
                        11
                    </ListItem>
                </List>
            </Container>

            <Nav />
        </>
    );
}

export default IndividualStats;
