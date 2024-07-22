import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import service from './classes/service';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; // ייבוא רכיב הכפתור

const NewService = observer(({ setShowForm }) => {
    const [data, setData] = useState({
     id:'',name:'',descraption: '', price: '',duration:''
    });

    function handleChange(field, value) {
        setData(prevData => ({ ...prevData, [field]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data)
        service.addService(data);
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
            <TextField  label="id" type="text" onChange={(e) => handleChange('id', e.target.value)} />
            <TextField  label="name" type="text" onChange={(e) => handleChange('name', e.target.value)} />
            <TextField  label="Descraption" type="text" onChange={(e) => handleChange('descraption', e.target.value)} />
            <TextField  label="price" type="text" onChange={(e) => handleChange('price', e.target.value)} />
            <TextField  label="duration" type="text" onChange={(e) => handleChange('duration', e.target.value)} />
            <TextField  label="img" type="text" onChange={(e) => handleChange('img', e.target.value)} />


            {/* כפתור ההוספה שמפעיל את הפונקציה handleSubmit */}
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Add
            </Button>
        </Box>
    );
});

export default NewService;


