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
    , ListSubheader
    , IconButton
    , Divider
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    IconButton: {
        margin: "0 0 0 auto"
    }
});

function IndividualStats() {
    const classes = useStyles();
    const history = useHistory();

    const addRoll = () => {
        history.push("/addRoll");
    }

    return (
        <div>
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
                    <IconButton
                        onClick={addRoll}
                        className={classes.IconButton}
                        color="secondary"
                    >
                        <AddIcon />
                        <Typography variant="h6">
                            Add Roll
                        </Typography>
                    </IconButton>
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
        </div>
    );
}

export default IndividualStats;
