import React from 'react';
import {
    AppBar
    , Toolbar
    , Typography
    , Container
    , Button
    , IconButton
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import RollSlider from './RollSlider';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        margin: "0 0 5em 0"
    }
});

function AddRoll() {
    const classes = useStyles();
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
                        Add Roll
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Container className={classes.root}>
                <RollSlider />

                <Button variant="contained" color="secondary">
                    Add Roll
                </Button>
            </Container>
        </>
    );
  }

export default AddRoll;