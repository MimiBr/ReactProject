// ServiceList.jsx
import { observer } from 'mobx-react-lite';
import service from './classes/service';
import SingleService from './singleService';


const ServiceList = observer((props) => {
    const { showButton } = props;
    const list = service.getAllServices;

    return (
        <div id="div" style={{ display: 'flex', flexDirection: 'row' }}>
            {list.map((s, index) => (
                <div id="divSingleService" key={s.typeService} style={{ marginBottom: '10px' }}>
                    <SingleService {...s} showButton={showButton} />
                    {index !== list.length - 1 && <hr />}
                </div>
            ))}
        </div>
    );
});

export default ServiceList;