import React, { useEffect } from 'react';
import Container from '../../components/Container';
import { Styled } from './styles';
import { usePatients } from '../../hooks/contexts/PatientsProvider'

function Patients() {

  const { patients, getPatients } = usePatients();

  // useEffect -> renderizar os produtos
  useEffect(() => {
    getPatients()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container 
      title="Últimos Cadastros" 
      size="lg"
    >
      <Styled.CardWrapper>
        {patients.map(patient => (
          <div key={patient.id}>
            <h1>{patient.name}</h1>
          </div>
        ))}
      </Styled.CardWrapper>
    </Container>
  )
}

export default Patients;