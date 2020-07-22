import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});




function valuetext(value) {
    return value;
}

export default function DiscreteSlider({countHandleChange}) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
                Количество килограм
            </Typography>
            <Slider
                defaultValue={1}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={countHandleChange}
                step={1}
                min={1}
                max={100}
            />
        </div>
    );
}