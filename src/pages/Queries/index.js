import React, { useEffect } from 'react';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useAddresses } from '../../hooks/contexts/AddressesProvider'
import { useEmployee } from '../../hooks/contexts/EmployeeProvider'
import { usePatients } from '../../hooks/contexts/PatientsProvider'
import { useSchedule } from '../../hooks/contexts/ScheduleProvider'
import CardAddress from '../../components/CardAddress';
import CardEmployee from '../../components/CardEmployee';
import CardPatient from '../../components/CardPatient';
import CardSchedule from '../../components/CardSchedule';

function Queries() {
  const { addresses, getAddresses } = useAddresses();
  const { employees, getEmployee } = useEmployee();
  const { patients, getPatients } = usePatients();
  const { schedules, getSchedule } = useSchedule();

  // useEffect -> renderizar os produtos
  useEffect(() => {
    getAddresses();
    getEmployee();
    getPatients();
    getSchedule();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container 
      title="Endereços" 
      size="form"
    >
      <Styled.CardWrapper>
        {addresses.map(address => (
          <CardAddress
            key={address.id}
            address={address}>
              
          </CardAddress>
        ))}
      </Styled.CardWrapper>

      <Styled.CardWrapper>
        {employees.map(employee => (
          <CardEmployee
            key={employee.id}
            employee={employee}>
              
          </CardEmployee>
        ))}
      </Styled.CardWrapper>

      <Styled.CardWrapper>
        {patients.map(patient => (
          <CardPatient
            key={patient.id}
            patient={patient}>
              
          </CardPatient>
        ))}
      </Styled.CardWrapper>

      <Styled.CardWrapper>
        {schedules.map(schedule => (
          <CardSchedule
            key={schedule.id}
            schedule={schedule}>
              
          </CardSchedule>
        ))}
      </Styled.CardWrapper>
    </Container>
  )
}

export default Queries;