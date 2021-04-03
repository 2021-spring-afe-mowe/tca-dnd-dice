import { React, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import CasinoOutlined from '@material-ui/icons/CasinoOutlined';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: "fixed",
        bottom: "0",
        width: "100%"
    }
});

function Nav() {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = useState(0);

    const onLink = (href) => {
      history.push(href);
    };

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            className={classes.root}
        >
            <BottomNavigationAction
                label="Add Dice"
                value="/addDie"
                onClick={() => onLink("/addDie")} 
                icon={<FormatListNumberedIcon />}
            />
            <BottomNavigationAction
                label="Add Roll"
                value="/addRoll"
                onClick={() => onLink("/addRoll")}
                icon={<CasinoOutlined />}
            />
        </BottomNavigation>
    );
  }

export default Nav;