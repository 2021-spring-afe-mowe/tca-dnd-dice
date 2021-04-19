import React, { useState } from 'react';
import {
    AppBar
    , Toolbar
    , Typography
    , Container
    , TextField
    , Button
    , IconButton
    , Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

    // set open state for success popup
    const [open, setOpen] = useState(false);

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

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
                roll: null
                , die: newDie.name
            });
            setOpen(true);
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
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Die added!
                        </Alert>
                    </Snackbar>
                </div>
            </Container>
        </>
    );
  }

export default AddDice;