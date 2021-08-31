import React from 'react';
import Footer from '../../components/Footer';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Styled } from './styles';

function Home() {
  return (
    <div style={{overflowY: "scroll"}}>
      <Styled.Container>
        <Styled.Box>
          <Styled.Title>Clinica Médica</Styled.Title>
          <Styled.Description>A Clínica Médica é a especialidade da Medicina focada no diagnóstico e tratamento clínico das patologias em adultos, ou seja, sem cirurgia. O médico desta especialidade é responsável por avaliar o paciente de maneira completa e está apto a resolver a maioria das enfermidades, além de gerenciar o cuidado do paciente indicando o especialista adequado, caso haja necessidade.</Styled.Description>
        </Styled.Box>

        <CardGroup style={{margin: '90px 200px 0 200px'}}>
          <Card style={{padding: '40px'}}>
            <Card.Body>
              <Card.Title>Missão</Card.Title>
              <Card.Text style={{textAlign: 'justify'}}>
              Atuar com excelência, em benefício da sociedade, na supervisão da ética profissional médica, por meio de ações regulamentadoras, educacionais, fiscalizadoras, judicantes, cartoriais e políticas.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{padding: '40px'}}>
            <Card.Body>
              <Card.Title>Valores</Card.Title>
              <Card.Text style={{textAlign: 'justify'}}> 
                Ética, justiça, equidade, sustentabilidade, credibilidade, comprometimento com o cliente e interesse público.
              </Card.Text>              
            </Card.Body>
          </Card>
        </CardGroup>

        <div className="row justify-content-center">
          <Styled.Img className="col-9">
            <img 
              src="undraw_medicine.svg" 
              alt="Icon" 
            />
          </Styled.Img>

          <Button className="col-3 align-self-center" variant="warning" href="/create-schedules">Agendar uma consulta</Button>{' '}
        </div>

      </Styled.Container>

      <Footer />
    </div>
  )
}

export default Home;