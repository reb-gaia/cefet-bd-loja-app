import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/src/sweetalert2.scss';
import { AuthProvider } from './hooks/contexts/AuthProvider';
import { AddressesProvider } from './hooks/contexts/AddressesProvider';
import { EmployeeProvider } from './hooks/contexts/EmployeeProvider';
import { PatientsProvider } from './hooks/contexts/PatientsProvider';
import { ScheduleProvider } from './hooks/contexts/ScheduleProvider';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AddressesProvider>
        <EmployeeProvider>
          <PatientsProvider>
            <ScheduleProvider>
              <App />
            </ScheduleProvider>
          </PatientsProvider>
        </EmployeeProvider>
      </AddressesProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);