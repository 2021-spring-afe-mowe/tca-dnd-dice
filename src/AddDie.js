import React, { useState } from 'react';
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
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        height: 400,
        margin: 16,
        textAlign: "center"
    }
});

const initialState = '';

const AddDice = ({ appAddData }) => {
    const classes = useStyles();
    const history = useHistory();

    // add die with blank roll so it shows up in the lists
    const [newDie, updateNewDie] = useState(initialState);

    // update form
    const updateData = (e) => {
        const formData = {
            name: e.target.value
        };
        updateNewDie(formData);
    };
    
    // add the die
    const addDie = () => {
        if (newDie.name) {
            console.log(newDie.name);
            appAddData({
                roll: ""
                , die: newDie.name
            });

        } else {
            return alert("Please enter a name!");
        }
    }

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
                        value={newDie.dieName}
                        onChange={updateData}
                    />

                    <br />
                    <br />
                    
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={addDie}
                    >
                        Add Die
                    </Button>
                </div>
            </Container>
        </>
    );
  }

export default AddDice;