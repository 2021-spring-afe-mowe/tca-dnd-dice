import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import CasinoOutlined from '@material-ui/icons/CasinoOutlined';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

function Nav() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="dice" icon={<CasinoOutlined />} />
            <BottomNavigationAction label="stats" icon={<FormatListNumberedIcon />} />
        </BottomNavigation>
    );
  }

export default Nav;