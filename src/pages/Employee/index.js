import React, { useEffect } from 'react';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useEmployee} from '../../hooks/contexts/EmployeeProvider'

function Employee() {

  const { employees, getEmployee } = useEmployee();

  // useEffect -> renderizar os produtos
  useEffect(() => {
    getEmployee()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container 
      title="Últimos Cadastros" 
      size="lg"
    >
      <Styled.CardWrapper>
        {employees.map(employee => (
          <div key={employee.id}>
            <h1>{employee.name}</h1>
          </div>
          
        ))}
      </Styled.CardWrapper>
    </Container>
  )
}

export default Employee;