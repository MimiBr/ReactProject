import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import Business from './classes/business';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewBusiness = observer(({ setShowForm }) => {
    const [closeEdit, setCloseEdit] = React.useState(true);

    const [data, setData] = useState({
        name: '', address: '', phone: '', owner: '', logo: '', description: ''
    });

    function handleChange(field, value) {
        setData(prevData => ({ ...prevData, [field]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        Business.addBusiness(data);
        setCloseEdit(false);
    }

    if (!closeEdit) {
        return null; // Return null to hide the form when closeEdit is false
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
            <TextField label="id" type="text" onChange={(e) => handleChange('id', e.target.value)} />

            <TextField label="name" type="text" onChange={(e) => handleChange('name', e.target.value)} />
            <TextField label="address" type="text" onChange={(e) => handleChange('address', e.target.value)} />
            <TextField label="phone" type="text" onChange={(e) => handleChange('phone', e.target.value)} />
            <TextField label="owner" type="text" onChange={e => handleChange('owner', e.target.value)} />
            <TextField label="logo" type="text" onChange={e => handleChange('logo', e.target.value)} />
            <TextField label="description" type="text" onChange={e => handleChange('description', e.target.value)} />
              <Button onClick={handleSubmit} variant="contained" color="primary">
                  Save Changes
              </Button>
          </Box>
      );
  });
  
  export default NewBusiness;