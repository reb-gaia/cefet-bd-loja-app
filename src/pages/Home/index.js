import React from 'react';
import Footer from '../../components/Footer';
import { Card, CardGroup } from 'react-bootstrap';
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
              <Card.Text>
              Atuar com excelência, em benefício da sociedade, na supervisão da ética profissional médica, por meio de ações regulamentadoras, educacionais, fiscalizadoras, judicantes, cartoriais e políticas.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{padding: '40px'}}>
            <Card.Body>
              <Card.Title>Valores</Card.Title>
              <Card.Text>
                Ética, justiça, equidade, sustentabilidade, credibilidade, comprometimento com o cliente e interesse público.
              </Card.Text>              
            </Card.Body>
          </Card>
        </CardGroup>

        <Styled.Img>
          <img src="https://img-premium.flaticon.com/png/512/1806/premium/1806299.png?token=exp=1629856467~hmac=4a2f79e88fc068a2c9d35b46a05381c2" />
        </Styled.Img>

      </Styled.Container>

      <Footer />
    </div>
  )
}

export default Home;