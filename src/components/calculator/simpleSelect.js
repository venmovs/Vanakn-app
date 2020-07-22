import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect({typeHandleChange}) {
    const classes = useStyles();
    const [stones, stoneName] = React.useState('');

    const handleChange = (event) => {
        stoneName(event.target.value);
        typeHandleChange(event);
    };

    return (
        <div>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Камень</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={stones}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Травертин</MenuItem>
                    <MenuItem value={20}>Туф</MenuItem>
                    <MenuItem value={30}>Базальт</MenuItem>
                    <MenuItem value={40}>Фазальт</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}