import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function StateTextFields(props) {


    return (
        <TextField
            id="outlined-controlled"
            label="Controlled"
            value={props.search}
            onChange={props.onChange}
            sx ={{minWidth: '100%'}}
        />
    )
}