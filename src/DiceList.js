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
    , Fab
} from '@material-ui/core';
import Casino from '@material-ui/icons/Casino';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';

function DiceList() {
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
                        <ListItemText primary="Blue Speckled" />
                        <ArrowForwardIosIcon />
                    </ListItem>
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
                        <ListItemText primary="Blue Speckled" />
                        <ArrowForwardIosIcon />
                    </ListItem>
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
                        <ListItemText primary="Blue Speckled" />
                        <ArrowForwardIosIcon />
                    </ListItem>
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
                        <ListItemText primary="Blue Speckled" />
                        <ArrowForwardIosIcon />
                    </ListItem>
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
                        <ListItemText primary="Blue Speckled" />
                        <ArrowForwardIosIcon />
                    </ListItem>
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
                        <ListItemText primary="Blue Speckled" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Casino />
                        </ListItemIcon>
                        <ListItemText primary="Blue Speckled" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                </List>
                <Fab color="secondary">
                    <AddIcon />
                </Fab>
            </Container>
        </div>
    );
}

export default DiceList;
