import React, { useEffect, useState } from 'react';
import { Styled } from './styles';
import { useAddresses } from '../../hooks/contexts/AddressesProvider'
import { useEmployee } from '../../hooks/contexts/EmployeeProvider'
import { usePatients } from '../../hooks/contexts/PatientsProvider'
import { useSchedule } from '../../hooks/contexts/ScheduleProvider'
import CardAddress from '../../components/CardAddress';
import CardEmployee from '../../components/CardEmployee';
import CardPatient from '../../components/CardPatient';
import CardSchedule from '../../components/CardSchedule';
import { Button } from 'react-bootstrap';


function Queries() {
  const { addresses, getAddresses } = useAddresses();
  const { employees, getEmployee } = useEmployee();
  const { patients, getPatients } = usePatients();
  const { schedules, getSchedule } = useSchedule();

  const [ filter, setFilter ] = useState('schedule');
  const [doctorName, setDoctorName] = useState();

  const idDoctor = sessionStorage.getItem('@Doctor');

  function handleTextChange() {
    fetch(`http://localhost:3002/employees?id=${idDoctor}`)
    .then(res => res.json())
    .then(res => setDoctorName(res[0].name));
    
  }
  
  useEffect(() => {
    getAddresses();
    getEmployee();
    getPatients();
    getSchedule(idDoctor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{margin: "100px"}}>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center" style={{marginBottom: "50px", justifyContent:"center", }}>
        <Button variant="primary" onClick={() => { setFilter('schedule'); handleTextChange();}}>Agendamentos</Button>{' '}
        <Button variant="secondary" onClick={() => setFilter('patient')}>Pacientes</Button>{' '}
        <Button variant="success" onClick={() => setFilter('employee')}>Funcionários</Button>{' '}
        <Button variant="warning" onClick={() => setFilter('address')}>Endereços</Button>{' '}
      </div>

      {filter === 'address' && <Styled.CardWrapper>
        {addresses.map(address => (
          <CardAddress
            key={address.id}
            address={address}>
              
          </CardAddress>
        ))}
      </Styled.CardWrapper>}

      {filter === 'employee' && <Styled.CardWrapper>
        {employees.map(employee => (
          <CardEmployee
            key={employee.id}
            employee={employee}>
              
          </CardEmployee>
        ))}
      </Styled.CardWrapper>}

      {filter === 'patient' && <Styled.CardWrapper>
        {patients.map(patient => (
          <CardPatient
            key={patient.id}
            patient={patient}>
              
          </CardPatient>
        ))}
      </Styled.CardWrapper>}

      {filter === 'schedule' && <div>
        <h4>{doctorName ? "Agenda - " + doctorName : ''}</h4>
        <Styled.CardWrapper>
          {schedules.map(schedule => (
            <CardSchedule
              key={schedule.id}
              schedule={schedule}>
            </CardSchedule>
          ))}
        </Styled.CardWrapper>
      </div>
      }
    </div>
  )
}

export default Queries;