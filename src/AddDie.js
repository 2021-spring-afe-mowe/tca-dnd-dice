import React from 'react';
import {
    AppBar
    , Toolbar
    , Typography
    , Container
    , TextField
    , Button,
    IconButton
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function AddDice() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Add Dice
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Container>
                <TextField
                    required
                    id="new-die-name"
                    label="Die Name - Required"
                    defaultValue="Enter die name"
                    variant="outlined"
                    margin="normal"
                    position="center"
                />
                <br />
                <br />
                <Button variant="contained" color="secondary">
                    Add Die
                </Button>
            </Container>
        </div>
    );
  }

export default AddDice;