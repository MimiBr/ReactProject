import { observer } from 'mobx-react-lite';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NewAppointment from './addAppointment';

const SingleService = observer((props) => {
    const { id, name,descraption,price,duration,img, showButton } = props;
    const [showNewAppointment, setShowNewAppointment] = React.useState(false);

    const handleAddAppointmentClick = () => {
        setShowNewAppointment(true);
    };

    return (
        <div>
            <Card style={{ 
                backgroundColor:'pink',
                minWidth: 30, 
                marginBottom: '20px', 
                margin:'20px',
                minHeight:300                
            }}>
                <CardMedia
                   
                    style={{ height: 120}}
                    image={img}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                        
                    </Typography>
                    {"service code "+id}
                    <Typography variant="body2" color="text.secondary">
                        
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descraption}
                    </Typography>
                </CardContent>
                <CardActions>
                    {showButton && <Button onClick={handleAddAppointmentClick} size="small">AddAppointment</Button>}
                </CardActions>
            </Card>
            {showNewAppointment && <NewAppointment setShowForm={setShowNewAppointment} />}
        </div>
    );
});

export default SingleService;
