import { observer } from 'mobx-react-lite';
import business from './classes/business';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Login from './login';
import NewBusiness from './editbusinessDate'

const BusinessData = observer((props) => {
    const { showLoginn,isAdmin } = props;

    const busines = business.getBusiness;
    const [showLogin,setShowLogin]=React.useState(false)
    const [edit,setEdit]=React.useState(false)

    function handleClick(){
        setShowLogin(true)
    }
    function handleEdit(){
        setEdit(true)
    }

    return (<>
        <div>
            <Card sx={{ maxWidth: 10000 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={busines.logo}
                        //alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {busines.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {busines.description}
                        <br></br>
                        {busines.owner}
                        <br></br>
                        {busines.address}
                        <br></br>
                        {busines.phone}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
              {isAdmin && <button className='buttonManager' onClick={handleEdit}>Edit</button>}
             {showLoginn && <button className='buttonManager' onClick={handleClick}>Login</button>}
              {showLogin && <Login/>}
              {edit && <NewBusiness/>}
        </div>
    </>)
});

export default BusinessData;