import React from 'react';
import {
    AppBar
    , Toolbar
    , Typography
    , Container
    , TextField
    , Button
    , IconButton
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import RollSlider from './RollSlider';

function AddRoll() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Add Roll
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Container>
                <RollSlider />

                <Button variant="contained" color="secondary">
                    Add Roll
                </Button>
            </Container>
        </div>
    );
  }

export default AddRoll;