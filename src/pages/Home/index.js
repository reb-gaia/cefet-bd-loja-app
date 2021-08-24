import React from 'react';
import Container from '../../components/Container';
import { Styled } from './styles';

function Home() {
  
  return (
    <Container 
      title="Clinica" 
      size="lg"
    >
      <h1>Nome da Clinica</h1>
      <h1>Descrição</h1>
      <h1>Missão</h1>
      <h1>Valores</h1>
      <h1>Foto ou logo</h1>
    </Container>
  )
}

export default Home;