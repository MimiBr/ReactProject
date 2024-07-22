import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import appointment from './classes/appointment';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; // ייבוא רכיב הכפתור

const NewAppointment = observer(({ setShowForm }) => {
    const [data, setData] = useState({
        id: '', serviceType: '', dateTime: '', clientName: '', clientPhone: '', clientEmail: ''
    });

    function handleChange(field, value) {
        setData(prevData => ({ ...prevData, [field]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        appointment.addAppointment(data);
        setShowForm(false);
    }
    
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField  label="Id" type="text" onChange={(e) => handleChange('id', e.target.value)} />
            <TextField  label="ServiceType" type="text" onChange={(e) => handleChange('serviceType', e.target.value)} />
            <TextField  label="ClientName" type="text" onChange={(e) => handleChange('clientName', e.target.value)} />
            <TextField  label="ClientEmail" type="text" onChange={e => handleChange('clientEmail', e.target.value)} />
            <TextField  label="ClientPhone" type="text" onChange={e => handleChange('clientPhone', e.target.value)} />
            <TextField type="date" onChange={e => handleChange('dateTime', e.target.value)} />
            {/* כפתור ההוספה שמפעיל את הפונקציה handleSubmit */}
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Add
            </Button>
        </Box>
    );
});

export default NewAppointment;


