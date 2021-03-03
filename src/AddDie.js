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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: 400,
        margin: 16,
        textAlign: "center"
    }
});

function AddDice() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Add Die
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Container>
                <div className={classes.root}>
                    <TextField
                        required
                        id="new-die-name"
                        label="Die Name - Required"
                        placeholder="Enter die name"
                        variant="outlined"
                        margin="normal"
                        position="center"
                    />

                    <br />
                    <br />
                    
                    <Button variant="contained" color="secondary">
                        Add Die
                    </Button>
                </div>
            </Container>
        </div>
    );
  }

export default AddDice;