import ServiceList from './ServicesList';
import { observer } from 'mobx-react-lite';
import BusinessData from './businessData';

const Customers = observer(() => {
    return (
        <div>
            <BusinessData showLoginn={true} isAdmin={false}/>
            <br></br>
            <ServiceList showButton={true} />

        </div>
    )
});

export default Customers;

 