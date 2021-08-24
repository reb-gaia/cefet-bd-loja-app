import React, { useEffect } from 'react';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useSchedule } from '../../hooks/contexts/ScheduleProvider'

function Schedules() {

  const { schedules, getSchedule } = useSchedule();

  // useEffect -> renderizar os produtos
  useEffect(() => {
    getSchedule()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container 
      title="Últimos Cadastros" 
      size="lg"
    >
      <Styled.CardWrapper>
        {schedules.map(schedule => (
          <div key={schedule.id}>
            <h1>{schedule.name}</h1>
          </div>
        ))}
      </Styled.CardWrapper>
    </Container>
  )
}

export default Schedules;