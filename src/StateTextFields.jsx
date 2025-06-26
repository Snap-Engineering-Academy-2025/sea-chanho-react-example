import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function StateTextFields() {
    const [name, setName] = React.useState('Cat in the Hat');

    function handleChange(e) {
        setName(e.target.value);
        console.log(name);
    }

    return (
        <TextField
            id="outlined-controlled"
            label="Controlled"
            value={name}
            onChange={handleChange}
        />
    )
}