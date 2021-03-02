import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

function Nav() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="dice" icon={<AccessAlarmIcon />} />
            <BottomNavigationAction label="stats" icon={<AccessAlarmIcon />} />
            <BottomNavigationAction label="stats" icon={<AccessAlarmIcon />} />
        </BottomNavigation>
    );
  }

export default Nav;