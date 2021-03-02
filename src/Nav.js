import React from 'react';
import { BottomNavigation, BottomNavigationAction, Icon } from '@material-ui/core';

function Nav() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="dice" icon={<RestoreIcon />} />
            <BottomNavigationAction label="stats" icon={<RestoreIcon />} />
            <BottomNavigationAction label="stats" icon={<RestoreIcon />} />
        </BottomNavigation>
    );
  }

export default Nav;