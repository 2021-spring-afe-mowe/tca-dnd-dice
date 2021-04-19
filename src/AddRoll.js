import React, { useState } from 'react';
import {
    AppBar
    , Toolbar
    , Typography
    , Container
    , Button
    , IconButton
    , Slider
    , Select
    , InputLabel
    , MenuItem
    , makeStyles
    , FormControl
    , Snackbar
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import App from './App';

const useStyles = makeStyles({
    root: {
        textAlign: "center",
    }
    , slider: {
        height: 500,
        margin: "1em"
    }
    , formControl: {
        minWidth: 120
    }
    , button: {
        display: "Block",
        margin: "1em auto"
    }
});

const marks = [
    {
        value: 1,
        label: '1',
    }
    ,{
        value: 2,
        label: '2',
    }
    , {
        value: 3,
        label: '3',
    }
    , {
        value: 4,
        label: '4',
    }
    ,{
        value: 5,
        label: '5',
    }
    , {
        value: 6,
        label: '6',
    }
    , {
        value: 7,
        label: '7',
    }
    ,{
        value: 8,
        label: '8',
    }
    , {
        value: 9,
        label: '9',
    }
    , {
        value: 10,
        label: '10',
    }
    ,{
        value: 11,
        label: '11',
    }
    , {
        value: 12,
        label: '12',
    }
    , {
        value: 13,
        label: '13',
    }
    ,{
        value: 14,
        label: '14',
    }
    , {
        value: 15,
        label: '15',
    }
    , {
        value: 16,
        label: '16',
    }
    ,{
        value: 17,
        label: '17',
    }
    , {
        value: 18,
        label: '18',
    }
    , {
        value: 19,
        label: '19',
    }
    ,{
        value: 20,
        label: '20',
    }
];

const AddRoll = ({ appAddData, appDiceNames }) => {
    const classes = useStyles();
    const history = useHistory();

    // generate select die options
    const selectOptions = appDiceNames.map(x =>
        <MenuItem value={x}>{x}</MenuItem>
    );
    
    // slider update
    const [value, setValue] = useState(10);
  
    const handleSliderChange = (e, newValue) => {
        setValue(newValue);
        updateData("roll", newValue);
    };
    
    // die select update
    const [name, setName] = useState('');
  
    const handleSelectChange = (e) => {
        setName(e.target.value);
        updateData("die", e.target.value);
    };

    //new roll update
    const initialState = {
        roll: value
        , die: name
      };

    const [newRoll, setNewRoll] = useState(initialState);

    const updateData = (type, data) => {
        const formData = {
            ...newRoll
            , [type]: data
        };
        //console.log(formData);
        setNewRoll(formData);
    };
    
    // add the roll
    const addRoll = () => {
        if (newRoll.die) {
            console.log(newRoll.die);
            console.log(newRoll.roll);
            appAddData(newRoll);
        } else {
            return alert("Please choose a die!");
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
                        Add Roll
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Container className={classes.root}>
                <div className={classes.slider}>
                    <Slider
                        valueLabelDisplay="auto"
                        step={1}
                        marks={marks}
                        min={1}
                        max={20}
                        orientation="vertical"
                        onChange={handleSliderChange}
                        defaultValue={10}
                        value={value}
                    />
                </div>

                <FormControl className={classes.formControl}>
                    <InputLabel id="die-select-label">Die</InputLabel>
                    <Select
                        labelId="die-select-label"
                        id="die-select"
                        value={name}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {selectOptions}
                    </Select>
                </FormControl>
                

                <Button
                     className={classes.button}
                    variant="contained"
                    color="secondary"
                    onClick={addRoll}
                >
                    Add Roll
                </Button>
            </Container>
        </>
    );
}

export default AddRoll;