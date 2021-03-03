import React from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: 500,
        margin: 35
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

function RollSlider() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Slider
                defaultValue={10}
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={1}
                max={20}
                orientation="vertical"
            />
        </div>
    );
}

export default RollSlider;