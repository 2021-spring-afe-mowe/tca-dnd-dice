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
    , makeStyles
    , Card
    , CardContent
} from '@material-ui/core';
import Casino from '@material-ui/icons/Casino';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CasinoOutlined from '@material-ui/icons/CasinoOutlined';
import { useHistory } from 'react-router-dom';
import Nav from './Nav';

const useStyles = makeStyles({
    list: {
        margin: "0 0 2em 0"
    }
    , dieName: {
        fontSize: "24px"
    }
    , statLabel: {
        paddingBottom: "0",
        color: "#424242"
    }
    , stat: {
        paddingTop: "0",
        maxWidth: "60%",
        margin: "0 0 0 2em",
        color: "#008573"
    }
    , noStats: {
        textAlign: "center",
        margin: "4em auto"
    }
});

export const DiceList = ({ appDiceNames, appData }) => {
    const classes = useStyles();
    const history = useHistory();

    const onLink = (href) => {
      history.push(href);
    };

    // collapse stuff
    const [open, setOpen] = useState(false);
  
    const dropdownControl = () => {
        setOpen(!open);
    };

    let rollData;

    //get roll data
    const getRollData = ( dieName ) => {
        rollData = appData.allRolls.filter(x => x.dieName === dieName);
        rollData = rollData.filter(x => x.roll !== null);
        rollData = rollData.map(x => x.roll);
        console.log(dieName + " rolls: " + rollData);
        return rollData;
    }

    //get average
    const getAverage = ( dieName ) => {
        let average = getRollData(dieName).reduce((a, value) => a + value, 0) / getRollData(dieName).length;
        if (average) {
            return average;
        } else {
            return "Never rolled";
        }
    }

    // get times rolled
    const getTimesRolled = ( dieName ) => {
        return getRollData(dieName).length;
        
    }

    // get 20s
    const getTwenties = ( dieName ) => {
        return getRollData(dieName).filter(x => x === 20).length;
    }

    // get 20s
    const getOnes = ( dieName ) => {
        return getRollData(dieName).filter(x => x === 1).length;
    }

    // get most recent roll
    const getMostRecent = ( dieName ) => {
        let lastRoll = getRollData(dieName)[getRollData(dieName).length - 1];
        if (lastRoll) {
            return lastRoll;
        } else {
            return "Never rolled";
        }
    }

    // generate dice buttons
    const diceButtons = appDiceNames.map(x =>
        <>
        <ListItem button
            onClick={dropdownControl}
        >
            <ListItemIcon>
                <Casino color="secondary"/>
            </ListItemIcon>
            <ListItemText
                primary={x}
                className={classes.dieName}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider />
        <Collapse in={open}>
            <List component="div" disablePadding>
                <ListItem className={classes.statLabel}>
                    <ListItemText primary="Average Roll:" />
                </ListItem>
                <ListItem className={classes.stat}>
                    <ListItemText primary={getAverage(x)} />
                </ListItem>
                <ListItem className={classes.statLabel}>
                    <ListItemText primary="Times Rolled:" />
                </ListItem>
                <ListItem className={classes.stat}>
                    <ListItemText primary={getTimesRolled(x)} />
                </ListItem>
                <ListItem className={classes.statLabel}>
                    <ListItemText primary="20's Rolled:" />
                </ListItem>
                <ListItem className={classes.stat}>
                    <ListItemText primary={getTwenties(x)} />
                </ListItem>
                <ListItem className={classes.statLabel}>
                    <ListItemText primary="1's Rolled:" />
                </ListItem>
                <ListItem className={classes.stat}>
                    <ListItemText primary={getOnes(x)} />
                </ListItem>
                <ListItem className={classes.statLabel}>
                    <ListItemText primary="Last Roll:" />
                </ListItem>
                <ListItem className={classes.stat}>
                    <ListItemText primary={getMostRecent(x)} />
                </ListItem>
            </List>
        </Collapse>
        <Divider />
        </>
    );

    if (appDiceNames.length == 0) {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Dice
                        </Typography>
                    </Toolbar>
                </AppBar>
                
                <Container
                    className={classes.noStats} 
                    onClick={() => onLink("/addRoll")}
                >
                    <CasinoOutlined style={{ fontSize: 40 }}  color="Secondary"/>
                    <Typography color="textSecondary">
                        Add dice to see stats!
                    </Typography>
                </Container>

                <Nav />
            </div>
        );
    } else {
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
                    <List className={classes.list}>
                        {diceButtons}
                    </List>
                </Container>

                <Nav />
            </div>
        );
    }
}

export default DiceList;
