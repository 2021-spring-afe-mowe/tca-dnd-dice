import './DiceList.css';
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
                </List>
            </Container>
        </div>
    );
  }

export default DiceList;
