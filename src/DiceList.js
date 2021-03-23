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
    , IconButton
} from '@material-ui/core';
import Casino from '@material-ui/icons/Casino';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    IconButton: {
        margin: "0 0 0 auto"
    }
});

export const DiceList = () => {
    const classes = useStyles();
    const history = useHistory();

    const addDie = () => {
        history.push("/addDie");
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Dice
                    </Typography>
                    <IconButton
                        onClick={addDie}
                        className={classes.IconButton}
                        color="secondary"
                    >
                        <AddIcon />
                        <Typography variant="h6">
                            Add Die
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            
            <Container>
                <List>
                    <ListItem button>
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
        </div>
    );
}

export default DiceList;
