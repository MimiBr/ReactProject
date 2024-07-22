import ServiceList from './ServicesList';
import { observer } from 'mobx-react-lite';
import BusinessData from './businessData';
import AddService from './addService';
import * as React from 'react';
import AppointmentList from './appointmentList';

const Manager = observer(() => {
  const [showAddService, setShowAddService] = React.useState(false);

  return (
    <div>

      <BusinessData showLoginn={false} isAdmin={true} />

      <div className="button-container">
        <button className="buttonManager" onClick={() => setShowAddService(true)}>
          Add Service
        </button>
        {showAddService && <AddService setShowForm={setShowAddService} />}
      </div>

      <ServiceList showButton={false} />
      <AppointmentList />
    </div>
  );
});

export default Manager;
